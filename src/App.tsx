import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './utils/store';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Pet from './Pages/Pet/Pet';
import Footer from './Components/Footer/Footer';
import AnimalDetail from './Pages/AnimalDetail/AnimalDetail';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/Pet" element={<Pet />} />
          <Route path="/AnimalDetail" element={<AnimalDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
