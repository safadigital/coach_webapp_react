import { createBrowserRouter } from "react-router";
// import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import VideoPlayer from "./components/video_player/videoPlayer";

export const router = createBrowserRouter([
  //  {
        // path: "/",
        // element: <App />,
        // children: [
           { path: "/", element: <HomePage /> },
           { path: "/profile", element: <ProfilePage /> },
            { path: "/player", element: <VideoPlayer /> }
     //   ]
  //  }
])