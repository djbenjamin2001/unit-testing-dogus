import './App.css';
import Home from './pages/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Blah, {blahLoader} from './pages/Blah';
function App() { 
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="blah" element={<Blah/>} loader={blahLoader}/>
      
    </Route>
  ))
  return <RouterProvider router={router}/>
}

export default App;
