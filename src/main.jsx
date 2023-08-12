import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import MainPage from './PageLayout/MainPage.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import MovieDetails from './Components/MovieCards/MovieDetails';
import MovieCards from './Components/MovieCards/MovieCards';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: '/',
        element:<MovieCards/>
      },
      {
        path: 'show/:id',
        element: <MovieDetails />,
        loader:({params})=>fetch(`https://api.tvmaze.com/lookup/shows?thetvdb=${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
