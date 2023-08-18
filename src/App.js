import './App.css';
import Home from './pages/Home';
import About from "./pages/About";
import RootLayout from './rootlayout/RootLayout';
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import { useState, } from 'react';
import {CounterContext } from './CounterContext';
import {ColorContext} from './CounterContext'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index path='Home' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
  </Route>
  )
)

function App() {
  const [likeCounter, setLikeCounter] = useState(0);
  const [chartCounter, setChartCounter] = useState(0);
  const [color, setColor] = useState("");
  return (
    <RouterProvider router={router}>
      <CounterContext.Provider value={{setChartCounter, setLikeCounter, likeCounter, chartCounter}}>
      <ColorContext.Provider value={{color, setColor}}/>
      </CounterContext.Provider>
    </RouterProvider>
  );
}

export default App;
