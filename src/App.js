import { BrowserRouter, Routes, Route } from 'react-router-dom'


import NavBar from './components/NavBar';
import Home from './components/Pages/Home';
import Employee from './components/Pages/Employee';

import UserManagement from './components/utils/UserManagement';

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<NavBar/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/employee' element={<Employee/>}/>
          <Route path='/working' element={<UserManagement/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
