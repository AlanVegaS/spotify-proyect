export const CurrentSong = () => {
    return (
        <section className="h-full w-3/12 aspect-square flex p-sm gap-2 transition-all duration-500">
            <img className="rounded-sm" src="https://i.scdn.co/image/ab67656300005f1f8b34d64e614539df299e7839" alt="cover" />
            <div className="flex-col content-center">
                <p className="font-semibold text-sm">Like a stone</p>
                <p className="font-light text-sm">Audoslave</p>
            </div>
        </section>
    );
};