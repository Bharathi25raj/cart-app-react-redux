
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './Store/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>      
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
