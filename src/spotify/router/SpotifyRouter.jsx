import { SpotifyLayout } from "../layout/SpotifyLayout";
import { Navigate } from "react-router-dom";

export const SpotifyRouter = [
    {
        index: true,
        path: "",
        element: <SpotifyLayout />,
    },
    {
        path: "playlist/:id",
        element: <SpotifyLayout />,
    },
    {
        path: "artist/:id",
        element: <SpotifyLayout />,
    },
    {
        path: "show/:id",
        element: <SpotifyLayout />,
    },
    {
        path: "*",
        element: <Navigate to={"/"} />,
    },
];