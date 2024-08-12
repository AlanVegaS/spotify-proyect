export const Header = () => {
    return (
        <header className="flex justify-between p-lg">
            <div className="flex">
                <button className="bg-deep-black p-sm rounded-full mr-2 w-7 h-7">
                    <svg role="img" viewBox="0 0 16 16" className="h-3 fill-white">
                        <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
                    </svg>
                </button>
                <button className="bg-deep-black p-sm rounded-full w-7 h-7">
                    <svg role="img" viewBox="0 0 16 16" className="h-3 fill-white">
                        <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
                    </svg>
                </button>
            </div>
            <div>
                <button className="bg-violet-500 rounded-full w-7 h-7">
                    <span>A</span>
                </button>
            </div>
        </header>
    );
};