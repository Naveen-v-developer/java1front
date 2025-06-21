import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Footercomponent from './components/footercomponent';
import Addemployeecomponent from './components/Addemployeecomponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        
        <div className='container'>
          <Routes>
            <Route path='/' element={<ListEmployeeComponent />} />
            <Route path='/employees' element={<ListEmployeeComponent />} />
            <Route path='/add-employee' element={<Addemployeecomponent />} />
            <Route path='/edit-employee/:id' element={<Addemployeecomponent />} />
          </Routes>
        </div>

        <Footercomponent />
      </Router>
    </div>
  );
}

export default App;
