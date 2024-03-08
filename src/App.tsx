import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./Layout";
import PlaylistPage from "./pages/PlaylistPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />,
      },
      {
        path: "video/:videoId",
        element: <VideoPage />,
      },
      {
        path: "playlist/:playlistId",
        element: <PlaylistPage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}
