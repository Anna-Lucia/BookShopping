import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home';
import Contatos from './Pages/contato';


const MainRoutes = () => {

    return(
        <Routes>
            <Route 
                path = "/" //rota mãe
                element={<HomePage/>} // o que desejo renderizar
            />
            <Route 
                path='/contato'
                element={<Contatos />}
            />
        </Routes>
    )
}

export default MainRoutes;

