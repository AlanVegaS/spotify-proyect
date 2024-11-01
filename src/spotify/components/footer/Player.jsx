import { useDispatch, useSelector } from "react-redux";
import { changePlayerMode, setNextSong, setPreviousSong, toggleShuffle } from "../../../store/spotify";
import { motion } from "framer-motion";

export const Player = () => {

    const { isPlaying } = useSelector((state) => state.spotify.contentActive);
    const { isShuffle, isRepeat, isRepeatOnce } = useSelector((state) => state.spotify.playerSettings);
    const dispatch = useDispatch();

    const onToggleShuffle = () => {
        dispatch(toggleShuffle());
    };

    const onNextSong = () => {
        dispatch(setNextSong());
    };

    const onPreviousSong = () => {
        dispatch(setPreviousSong());
    };

    const onChangePlayerMode = () => {
        dispatch(changePlayerMode());
    };

    return (
        <section className="h-full w-6/12 aspect-square flex justify-center items-center gap-4 fill-l-text-primary dark:fill-text-secondary transition-all duration-500" aria-disabled>
            <motion.button
                onClick={onToggleShuffle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ stiffness: 400, damping: 17 }}
            >
                <svg className={`h-4 ${isShuffle ? 'fill-text-green dark:fill-base-green' : 'dark:active:fill-text-secondary dark:hover:fill-text-primary hover:fill-l-text-secondary active:fill-l-text-primary'}`} aria-hidden="true" viewBox="0 0 16 16"><path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path><path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path></svg>
            </motion.button>
            <motion.button
                onClick={onPreviousSong}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ stiffness: 400, damping: 17 }}
            >
                <svg className="h-4 dark:active:fill-text-secondary dark:hover:fill-text-primary hover:fill-l-text-secondary active:fill-l-text-primary" aria-hidden="true" viewBox="0 0 16 16"><path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path></svg>
            </motion.button>
            <div className="h-9 w-9 flex justify-center items-center">
                <motion.button className="h-9 rounded-full aspect-square flex justify-center items-center fill-l-base-primary dark:fill-base-primary bg-l-text-primary active:bg-l-text-secondary dark:bg-text-primary dark:active:bg-text-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ stiffness: 400, damping: 17 }}
                >
                    {
                        isPlaying
                            ? <svg className="h-4" aria-hidden="true" viewBox="0 0 16 16"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
                            : <svg role="img" aria-hidden="true" viewBox="0 0 24 24" className='h-3/5'>
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                            </svg>
                    }
                </motion.button>
            </div>
            <motion.button
                onClick={onNextSong}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ stiffness: 400, damping: 17 }}
            >
                <svg className="h-4 dark:active:fill-text-secondary dark:hover:fill-text-primary hover:fill-l-text-secondary active:fill-l-text-primary" aria-hidden="true" viewBox="0 0 16 16" ><path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path></svg>
            </motion.button>
            <motion.button
                onClick={onChangePlayerMode}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ stiffness: 400, damping: 17 }}
            >
                {!isRepeatOnce
                    ? <svg className={`h-4 ${isRepeat ? 'fill-text-green dark:fill-base-green' : 'dark:active:fill-text-secondary dark:hover:fill-text-primary hover:fill-l-text-secondary active:fill-l-text-primary'}`} aria-hidden="true" viewBox="0 0 16 16"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path></svg>
                    : <svg className="h-4 fill-text-green dark:fill-base-green" aria-hidden="true" viewBox="0 0 16 16"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h.75v1.5h-.75A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5ZM12.25 2.5a2.25 2.25 0 0 1 2.25 2.25v5A2.25 2.25 0 0 1 12.25 12H9.81l1.018-1.018a.75.75 0 0 0-1.06-1.06L6.939 12.75l2.829 2.828a.75.75 0 1 0 1.06-1.06L9.811 13.5h2.439A3.75 3.75 0 0 0 16 9.75v-5A3.75 3.75 0 0 0 12.25 1h-.75v1.5h.75Z"></path><path d="m8 1.85.77.694H6.095V1.488c.697-.051 1.2-.18 1.507-.385.316-.205.51-.51.583-.913h1.32V8H8V1.85Z"></path><path d="M8.77 2.544 8 1.85v.693h.77Z"></path></svg>
                }
            </motion.button>
        </section>
    );
};