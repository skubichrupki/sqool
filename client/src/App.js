import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import SelectUser from './components/SelectUser';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import { useState } from "react";
// import Footer from './components/Footer';

function App() {

  const[port, setPort] = useState(5000);
  const[database, setDatabase] = useState('MySQL');
  
  const togglePort = () => {
    if (port === 8000) {
        setPort(5000);
        setDatabase('MySQL');
    } else {
        setPort(8000);
        setDatabase('SQL Server');
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header port={port} database={database} togglePort={togglePort}/>
        {/* <div>
          <p>Port: {port}, Database: {database}</p>
          <button onClick={togglePort}>Toggle Port</button>
        </div> */}
        <Routes>
          <Route path="/SelectUser" element={<SelectUser port={port}/>}></Route>
          <Route path="/CreateUser" element={<CreateUser port={port} label="Create new Item"/>}></Route>
          <Route path="/UpdateUser/:item_id" element={<UpdateUser port={port} label="Update Item:"/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
