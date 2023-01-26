import './App.css';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Home from './components/screens/Home';
import MyProfile from './components/screens/MyProfile';
import RootLayout from './components/layouts/RootLayout';
import Signup from './components/auth/Signup';
import MyCourses from './components/screens/MyCourses';
import Signin from './components/auth/Signin';
import NotFound from './components/layouts/NotFound';
import ResetPassword from './components/auth/ResetPassword';
import EmailLinkLogin from './components/auth/EmailLinkLogin';
import Experiments from './components/screens/Experiments';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Signin />} />
        <Route path="mvp-web-firebase-student" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="reset" element={<ResetPassword />} />
        <Route path="passwordless" element={<EmailLinkLogin />} />
        <Route path="profile" element={<ProtectedRoute><MyProfile /></ProtectedRoute>} />
        <Route path="expt" element={<ProtectedRoute><Experiments /></ProtectedRoute>} />
        <Route path="courses" element={<ProtectedRoute><MyCourses /></ProtectedRoute>} />
        <Route path="home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
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
