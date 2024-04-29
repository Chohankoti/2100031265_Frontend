import { BrowserRouter, Routes, Route } from 'react-router-dom'


import NavBar from './components/NavBar';
import Home from './components/Pages/Home';
import Employee from './components/Pages/Employee';

import Add from './components/operations/Add';
import Edit from './components/operations/Edit';


function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<NavBar/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/employee' element={<Employee/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
