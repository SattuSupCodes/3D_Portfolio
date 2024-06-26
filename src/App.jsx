import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home, About, Projects, Contact } from './pages';
import Navbar from './components/navbar';

const App = () => {
    return (
        <main className='bg-slate-300/20'>
            <Router>
                 <Navbar />
                 <Routes>
                    <Route path="/3D_Portfolio" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/Projects" element={<Projects/>}/>
                    <Route path="/Contact" element={<Contact/>}/>

                    
                 </Routes>
            </Router>
        </main>
    )
}
export default App
