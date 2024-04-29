import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import SelectUser from './components/SelectUser';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import Home from './components/Home';
import Login from './components/Login';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/SelectUser" element={<SelectUser />}></Route>
          <Route path="/CreateUser" element={<CreateUser label="Create new Item"/>}></Route>
          <Route path="/UpdateUser/:item_id" element={<UpdateUser label="Update Item:"/>}></Route>
          <Route path="/Login" element={<Login label="Login"/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
