import { SpotifyLayout } from "../layout/SpotifyLayout";
import { Navigate } from "react-router-dom";

export const SpotifyRouter = [
    {
        index: true,
        path: "",
        element: <SpotifyLayout />,
    },
    {
        path: "home",
        element: <SpotifyLayout />,
    },
    {
        path: "*",
        element: <Navigate to={"/"} />,
    },
];
