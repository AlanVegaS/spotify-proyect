export const CurrentSong = () => {
    return (
        <section className="h-full w-3/12 aspect-square flex p-sm gap-2 transition-all duration-500">
            <img className="rounded-sm" src="https://i.scdn.co/image/ab67616d00004851a7292b6863258e889b78d787" alt="cover" />
            <div className="flex-col content-center">
                <p className="font-semibold text-sm">Like a stone</p>
                <p className="font-light text-sm">Audoslave</p>
            </div>
        </section>
    );
};