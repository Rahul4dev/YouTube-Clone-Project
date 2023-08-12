import { createBrowserRouter } from 'react-router-dom';
import MainContainer from '../components/MainContainer';
import VideoContainer from '../components/VideoContainer';
import WatchPage from '../components/WatchPage';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainContainer />,
    children: [
      {
        index: 1,
        element: <VideoContainer />,
      },
      {
        path: '/watch',
        element: <WatchPage />,
      },
    ],
  },
]);
