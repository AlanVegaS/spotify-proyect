import spotifyApi from "../api/axiosConfig";

export const getContentCatalog = async () => {
    try {
        const resp = await spotifyApi().get('search?q=tag%3Atop&type=artist%2Cplaylist%2Cshow&market=US&limit=10');
        return resp.data;
    } catch (error) {
        console.log(`Error in request getContent:${error}`);
        return [];
    }
};