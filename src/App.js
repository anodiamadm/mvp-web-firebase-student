import './App.css';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './components/screens/Home';
import MyProfile from './components/screens/MyProfile';
import RootLayout from './components/layouts/RootLayout';
import Signup from './components/auth/Signup';
import MyCourses from './components/screens/MyCourses';
import Signin from './components/auth/Signin';
import NotFound from './components/layouts/NotFound';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="mvp-web-firebase-student" element={<Home />} />
        <Route path="profile" element={<MyProfile />} />
        <Route path="courses" element={<MyCourses />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path='*' element={<NotFound />}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
