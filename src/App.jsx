import { useRoutes } from 'react-router-dom'
import './app.scss'
import Home from './pages/Home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Watch from './pages/watch/Watch'
import ErrorPage from './pages/error/ErrorPage'
import { useContext } from 'react'
import FirebaseContext from './context/FirebaseContext'

function App() {
const {authToken}= useContext(FirebaseContext)
  const routes = 
    authToken ? useRoutes([
      {
        path:"/",
        element:<Home/>,
        errorElement:<ErrorPage/>
      },
      {
        path:"/watch",
        element:<Watch/>,
        errorElement:<ErrorPage/>
      },
    ]) :
    useRoutes([
      {
        path:"/login",
        element:<Login/>,
        errorElement:<ErrorPage/>
      },
      {
        path:"/register",
        element:<Register/>,
        errorElement:<ErrorPage/>
      },
    ])
  

  return routes
}

export default App
