import './App.css';
import Home from './routes/Home';
import { Route, Routes } from 'react-router-dom';
import Single from './routes/Single';


function App() {
  

  return (
    <>
   <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='single' element={<Single/>}/>
   </Routes>
    </>
  )
}

export default App;