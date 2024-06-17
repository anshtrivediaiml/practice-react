import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { Route, Router, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AuthLayout from './components/AuthLayout.jsx'
import Login from './components/Login.jsx'

const router=createBrowserRouter(
createRoutesFromElements(
  <Route path="/" element={<App/>}>
    <Route path="" element={<Home/>}/>
    <Route path="/login" element={<AuthLayout authentication={false}>
      <Login/>
    </AuthLayout>}/>
  </Route>
)
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
