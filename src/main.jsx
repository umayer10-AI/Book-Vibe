import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Home.jsx'
import ListedBooks from './component/ListedBooks.jsx'
import PagesRead from './component/PagesRead.jsx'
import axios from 'axios'
import Information from './component/Information.jsx'
import Error from './component/Error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        loader: async() => {
          const a = await axios.get("booksData.json")
          return a.data
        },
        Component: Home
      },
      {path: 'book', Component: ListedBooks},
      {path: 'page', Component: PagesRead},
      {path: 'info', Component: Information},
    ]
  },
  {
    path: "*",
    Component: Error
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>,
)
