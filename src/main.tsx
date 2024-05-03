import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router ,Routes, Route, } from "react-router-dom";


import ErrorPage from './pages/Error/ErrorPage';
import Home from './pages/Home/Home';

import BackToTop from './components/BackToTop/BackToTop';
import Footer from './components/Footer/Footer';

import './global.css'

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <main className=''>
        <Routes>
          <Route path="/campanhaB2B" element={<Home />}/>
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <BackToTop/>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>,
)
