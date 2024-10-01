import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import LandingPage from './Pages/LandingPage';
import Onboarding from './Pages/Onboarding';
import PostJobs from './Pages/PostJobs';
import SaveJobs from './Pages/SaveJobs';
import Job from './Pages/Job';
import Joblisting from './Pages/Job-listing';
import MyJobs from './Pages/MyJobs';
import { ThemeProvider } from './components/theme-provide';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/onboarding',
        element: <Onboarding />
      },
      {
        path: '/job/:id',
        element: <Job />
      },
      {
        path: '/jobs',
        element: <Joblisting />
      },
      {
        path: '/my-jobs',
        element: <MyJobs />
      },
      {
        path: '/post',
        element: <PostJobs/>
      },
      {
        path: '/SaveJobs',
        element: <SaveJobs/>
      }
    ]
  }
]);

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
