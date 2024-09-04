import { AuthRouter } from "../auth/router/AuthRouter";
import { SpotifyRouter } from "../spotify/router/SpotifyRouter";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const AppRouter = () => {
    const { status: statusAuth } = useSelector((state) => state.auth);

    const homeRoutes = [
        {
            path: "/*",
            children: SpotifyRouter,
        },
        {
            path: "*",
            element: <Navigate to={"/home"} />,
        },
    ];

    const authRoutes = [
        {
            path: "/auth/*",
            children: AuthRouter,
        },
        {
            path: "*",
            element: <Navigate to={"/auth/login"} />,
        },
    ];

    if (statusAuth === "not-authenticated") return authRoutes;
    if (statusAuth === "authenticated") return homeRoutes;
    return authRoutes;
};