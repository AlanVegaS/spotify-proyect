import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { saveToken } from "../auth";
import { getNewToken } from "../../auth/helpers/getNewToken";

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://api.spotify.com/v1/',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.tokenAuth;
        headers.set('Authorization', `Bearer ${token}`);
        return headers;
    },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
    console.log(args);
    let result = await baseQuery(args, api, extraOptions);

    if (result.error?.status === 401) {
        console.log('Error 401');
        const newToken = await getNewToken();
        api.dispatch(saveToken(newToken));
        localStorage.setItem('tokenAuth', newToken);
        result = await baseQuery(
            {
                url: args,
                headers: {
                    ...args.headers,
                    Authorization: `Bearer ${newToken}`,
                },
            },
            api,
            extraOptions
        );
    }
    return result;
};

export const spotifyApi = createApi({
    reducerPath: 'content',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getCatalogs: builder.query({
            query: () => 'search?q=top&type=artist%2Cplaylist%2Cshow&market=US&limit=10'
        }),
        getLibraryMostHeaderContent: builder.query({
            query: () => 'browse/featured-playlists?market=US&fields=playlists%28items%28name%2Ctype%2Cimages%2Cid%29%29&limit=28'
        }),
        getTopTracksArtist: builder.query({
            query: (id) => `artists/${id}/top-tracks`
        }),
        getTracksPlaylist: builder.query({
            query: (id) => `playlists/${id}`
        }),
        getEpisodesShows: builder.query({
            query: (id) => `shows/${id}`
        }),
        getInfoArtist: builder.query({
            query: (id) => `artists/${id}`
        }),
    })
});

export const { useGetCatalogsQuery,
    useGetTracksPlaylistQuery,
    useGetLibraryMostHeaderContentQuery,
    useGetTopTracksArtistQuery,
    useGetEpisodesShowsQuery,
    useGetInfoArtistQuery
} = spotifyApi;