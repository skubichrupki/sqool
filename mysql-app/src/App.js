import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <p>React JS, PHP, MySQL - CRUD Operations</p>

      <BrowserRouter>
        <Navigation />

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
