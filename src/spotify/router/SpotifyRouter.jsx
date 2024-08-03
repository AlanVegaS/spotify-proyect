import { SpotifyPage } from "../pages/SpotifyPage";
import { Navigate } from "react-router-dom";

export const SpotifyRouter = [
    {
        index: true,
        path: "",
        element: <SpotifyPage />,
    },
    {
        path: "home",
        element: <SpotifyPage />,
    },
    {
        path: "*",
        element: <Navigate to={"/"} />,
    },
];
