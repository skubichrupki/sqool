import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/user/ListUser" element={<ListUser />}></Route>
          <Route path="/user/CreateUser" element={<CreateUser />}></Route>
          <Route path="/user/:id/EditUser" element={<EditUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
