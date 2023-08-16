import './App.css';
import Home from './pages/Home';
import About from "./pages/About";
import Dashboard from "./pages/Dashboard"
import RootLayout from './rootlayout/RootLayout';
import ForgotPassword from './pages/ForgotPassword';
import Login from './pages/Login';
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
    <Route index element={<Login />} /> 
    <Route path="forgot-password" element={<ForgotPassword />} />

    <Route element={<RootLayout />}>
      <Route
        path='dashboard' element={<Dashboard />}/>
    </Route>
  </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
