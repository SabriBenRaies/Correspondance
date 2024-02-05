import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';


/** import all components */
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import TestMapApi from './components/TestMapApi';
import PageNotFound from './components/PageNotFound';
import HomePage from './components/HomePage';

import 'bootstrap/dist/css/bootstrap.min.css'


/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth';

/** roor routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <HomePage/>
  },
  {
    path : '/login',
    element : <Username/>
  },
  {
    path : '/register',
    element : <Register/>
  },
  {
    path : '/password',
    element : <ProtectRoute> <Password /> </ProtectRoute> 
  },
  {
    path : '/Profile',
    element : <AuthorizeUser> <Profile /> </AuthorizeUser> 
  },
  {
    path : '/Recovery',
    element : <ProtectRoute> <Recovery/></ProtectRoute>
  },
  {
    path : '/Reset',
    element : <Reset/>
  },
  {
    path : '/TestMapAPi',
    element : <TestMapApi/>
  },
  {
    path : '/PageNotFound',
    element : <PageNotFound/>
  }
])



function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
        
    </main>
  );
}

export default App;
