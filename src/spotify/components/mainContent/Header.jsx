import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDarkMode, useGetDataUrl } from "../../hooks/";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { startLogout } from "../../../store/auth";

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export const Header = () => {

    const { isDark, toggleDarkMode } = useDarkMode();
    const { entity } = useGetDataUrl();
    const dispatch = useDispatch();

    const onToggleDarkMode = () => {
        toggleDarkMode();
    }

    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();
    const onNavigate = (to) => {
        navigate(to);
    };

    const { userName } = useSelector(state => state.auth);
    const userShowed = userName.charAt(0);

    const inputRef = useRef(null);
    const focusSearch = () => {
        inputRef.current?.focus();
    };

    const onSubmited = () => {
        event.preventDefault();
        const value = event.target[0].value;
        if (value) navigate(`/search/${event.target[0].value}`);
    };

    const onSearch = () => {
        const value = event.target?.value;
        navigate(`/search/${event.target.value}`);
    };

    const onLogout = () => {
        dispatch(startLogout());
    };

    const navigateGithub = () => {
        window.open("https://github.com/AlanVegaS/spotify-proyect", "_blank");
    };

    return (
        <header className="flex justify-between p-lg">
            <div className="flex items-center">
                <motion.button className="flex items-center justify-center bg-l-traslucid-5 dark:bg-traslucid-5 p-sm rounded-full mr-2 h-9 aspect-square hover:bg-traslucid-5 dark:hover:bg-l-traslucid-5 transition-colors duration-500"
                    onClick={() => onNavigate(-1)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <svg role="img" viewBox="0 0 16 16" className="h-3 fill-white">
                        <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
                    </svg>
                </motion.button>
                <motion.button className="flex items-center justify-center bg-l-traslucid-5 dark:bg-traslucid-5 p-sm rounded-full h-9 aspect-square hover:bg-traslucid-5 dark:hover:bg-l-traslucid-5 transition-colors duration-500"
                    onClick={() => onNavigate(1)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <svg role="img" viewBox="0 0 16 16" className="h-3 fill-white">
                        <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
                    </svg>
                </motion.button>
                {
                    entity === 'search' ?
                        <form onChange={onSearch} onSubmit={onSubmited} onClick={focusSearch} className="flex items-center ml-sm w-64 bg-l-traslucid-5 dark:bg-traslucid-5 rounded-full h-9 hover:bg-traslucid-5 dark:hover:bg-l-traslucid-5 transition-all duration-500">
                            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 fill-white mx-sm"><path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path></svg>
                            <input ref={inputRef} type="text" className="w-52 bg-traslucid-full outline-none" />
                        </form>
                        : <></>
                }
            </div>
            <div className="flex items-center">
                <motion.button className="box mr-1" onClick={onToggleDarkMode}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    {
                        isDark &&
                        <svg viewBox="0 0 457.32 457.32" className="fill-amber-600 h-8">
                            <g id="XMLID_467_">
                                <path d="M228.66,112.692c-63.945,0-115.968,52.022-115.968,115.967c0,63.945,52.023,115.968,115.968,115.968   s115.968-52.023,115.968-115.968C344.628,164.715,292.605,112.692,228.66,112.692z" />
                                <path d="M401.429,228.66l42.467-57.07c2.903-3.9,3.734-8.966,2.232-13.59c-1.503-4.624-5.153-8.233-9.794-9.683   l-67.901-21.209l0.811-71.132c0.056-4.862-2.249-9.449-6.182-12.307c-3.934-2.858-9.009-3.633-13.615-2.077l-67.399,22.753   L240.895,6.322C238.082,2.356,233.522,0,228.66,0c-4.862,0-9.422,2.356-12.235,6.322l-41.154,58.024l-67.4-22.753   c-4.607-1.555-9.682-0.781-13.615,2.077c-3.933,2.858-6.238,7.445-6.182,12.307l0.812,71.132l-67.901,21.209   c-4.641,1.45-8.291,5.059-9.793,9.683c-1.503,4.624-0.671,9.689,2.232,13.59l42.467,57.07l-42.467,57.07   c-2.903,3.9-3.734,8.966-2.232,13.59c1.502,4.624,5.153,8.233,9.793,9.683l67.901,21.208l-0.812,71.132   c-0.056,4.862,2.249,9.449,6.182,12.307c3.934,2.857,9.007,3.632,13.615,2.077l67.4-22.753l41.154,58.024   c2.813,3.966,7.373,6.322,12.235,6.322c4.862,0,9.422-2.356,12.235-6.322l41.154-58.024l67.399,22.753   c4.606,1.555,9.681,0.781,13.615-2.077c3.933-2.858,6.238-7.445,6.182-12.306l-0.811-71.133l67.901-21.208   c4.641-1.45,8.291-5.059,9.794-9.683c1.502-4.624,0.671-9.689-2.232-13.59L401.429,228.66z M228.66,374.627   c-80.487,0-145.968-65.481-145.968-145.968S148.173,82.692,228.66,82.692s145.968,65.48,145.968,145.967   S309.147,374.627,228.66,374.627z" />
                            </g>
                        </svg>
                    }
                    {
                        !isDark &&
                        <svg viewBox="0 0 24 24" fill="none" className="fill-sky-500 h-8">
                            <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" />
                        </svg>
                    }
                </motion.button>
                <motion.button className="bg-violet-500 rounded-full w-7 h-7"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span>{userShowed}</span>
                </motion.button>
                <motion.nav className="menu fixed top-20 right-8 bg-l-text-secondary dark:bg-base-primary p-sm z-10 bg-clip-border"
                    hidden={!isOpen}
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    variants={{
                        open: {
                            clipPath: "inset(0% 0% 0% 0% round 10px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.15,
                            }
                        },
                        closed: {
                            clipPath: "inset(10% 50% 90% 50% round 10px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.3
                            }
                        }
                    }}
                >
                    <motion.ul
                        variants={{
                            open: {
                                clipPath: "inset(0% 0% 0% 0% round 10px)",
                                transition: {
                                    type: "spring",
                                    bounce: 0,
                                    duration: 0.01,
                                    staggerChildren: 0.05
                                }
                            },
                            closed: {
                                clipPath: "inset(10% 50% 90% 50% round 10px)",
                                transition: {
                                    type: "spring",
                                    bounce: 0,
                                    duration: 0.3
                                }
                            }
                        }}
                        style={{ pointerEvents: isOpen ? "auto" : "none" }}
                    >
                        <motion.li variants={itemVariants} className="cursor-pointer hover:bg-l-traslucid-5 rounded-sm p-1" onClick={onLogout}>Logout</motion.li>
                        <motion.li variants={itemVariants} className="cursor-pointer hover:bg-l-traslucid-5 rounded-sm p-1">
                            <a onClick={navigateGithub}>{`Alan's github`}</a>
                        </motion.li>
                    </motion.ul>
                </motion.nav>
            </div>
        </header>
    );
};