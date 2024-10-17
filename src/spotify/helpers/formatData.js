const formatMsToMinSec = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);

    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${formattedSeconds}`;
};

const formatMsToHoursMin = (ms) => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);

    return `${hours ? hours + ' h' : ''} ${minutes} m`;
};

export const formatDataEpisodes = (data, isFetching) => {
    if (isFetching) return null
    const items = data.episodes.items;
    const name = data.name;
    const contentType = 'Show';
    const img = data.images?.[1]?.url ? data.images[1].url : data.images?.[0]?.url;
    const info = `${data.total_episodes} episodes `;
    const id = data.id;
    const contentList = items.map(item => ({
        audio: item.audio_preview_url,
        name: item.name,
        img: item.images?.[3] ? item.images[3].url : item.images?.[0]?.url,
        duration: formatMsToHoursMin(item.duration_ms),
        info: item.type,
        id: item.id
    }));

    return { id, name, contentType, img, info, contentList }
};

export const formatDataTracksArtist = (artistData, tracksData, isFetching) => {
    if (isFetching) return null
    const name = artistData.name;
    const contentType = 'Artist';
    const img = artistData.images?.[2] ? artistData.images[2].url : artistData.images?.[0]?.url;
    const id = artistData.id;
    const info = artistData.genres.join(', ');
    const items = tracksData.tracks;
    const contentList = items.map(item => ({
        audio: item.preview_url,
        name: item.name,
        img: item.album.images?.[3] ? item.album.images[3].url : item.album.images?.[0]?.url,
        duration: formatMsToMinSec(item.duration_ms),
        info: item.album.artists.map(artist => artist.name).join(', '),
        id: item.id
    }));

    return { id, name, contentType, img, info, contentList };
};

export const formatDataTracksPlaylist = (data, isFetching) => {
    if (isFetching) return null
    const items = data.tracks.items;
    const id = data.id;
    const name = data.name;
    const contentType = 'Playlist';
    const img = data.images[0].url;
    const info = `${data.tracks.total} songs `
    const contentList = items.map(item => ({
        audio: item.track?.preview_url,
        name: item.track.name,
        img: item.track.album.images?.[3] ? item.track.album.images[3].url : item.track.album.images?.[0]?.url,
        duration: formatMsToMinSec(item.track.duration_ms),
        info: item.track.album.artists.map(artist => artist.name).join(','),
        id: item.track.id
    }));

    return { id, name, contentType, img, info, contentList }
};