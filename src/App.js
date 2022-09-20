import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import Header from './components/Header'
import Footer from './components/Footer'
import LocationDirectoryPage from './pages/LocationDirectoryPage'
import LocationDetailPage from './pages/LocationDetailPage'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='menu' element={<MenuPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='directory' element={<LocationDirectoryPage />} />
        <Route path='directory/:locationId' element={<LocationDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
