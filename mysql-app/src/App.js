import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import SelectUser from './components/SelectUser';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user/SelectUser" element={<SelectUser />}></Route>
          <Route path="/user/CreateUser" element={<CreateUser />}></Route>
          <Route path="/user/:id/UpdateUser" element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
