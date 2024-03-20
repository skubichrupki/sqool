import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import SelectUser from './components/SelectUser';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import Home from './components/Home';
import BackendTest from './components/BackendTest';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/SelectUser" element={<SelectUser />}></Route>
          <Route path="/CreateUser" element={<CreateUser />}></Route>
          <Route path="/UpdateUser/:item_id" element={<UpdateUser />}></Route>
          <Route path="/BackendTest" element={<BackendTest />}></Route>
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>

    </div>
  );
}

export default App;
