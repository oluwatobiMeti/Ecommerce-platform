import './App.css';
import Home from './pages/Home';
import About from "./pages/About";
import RootLayout from './rootlayout/RootLayout';
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path='Home' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
  </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
