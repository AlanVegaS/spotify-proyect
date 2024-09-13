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

export const formatDataEpisodes = (items) => {
    return items.map(item => ({
        audio: item.audio_preview_url,
        name: item.name,
        img: item.images?.[3] ? item.images[3].url : item.images?.[0]?.url,
        duration: formatMsToHoursMin(item.duration_ms),
        info: item.type,
        id: item.id
    }))
};

export const formatDataTracksArtist = (items) => {
    return items.map(item => ({
        audio: item.preview_url,
        name: item.name,
        img: item.album.images?.[3] ? item.album.images[3].url : item.album.images?.[0]?.url,
        duration: formatMsToMinSec(item.duration_ms),
        info: item.album.artists.map(artist => artist.name).join(', '),
        id: item.id
    }))
};

export const formatDataTracksPlaylist = (items) => {
    return items.map(item => ({
        audio: item.track?.preview_url,
        name: item.track.name,
        img: item.track.album.images?.[3] ? item.track.album.images[3].url : item.track.album.images?.[0]?.url,
        duration: formatMsToMinSec(item.track.duration_ms),
        info: item.track.album.artists.map(artist => artist.name).join(','),
        id: item.track.id
    }))
};