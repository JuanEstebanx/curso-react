import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import CreateAccount from '../pages/CreateAccount';
import CreateNewPassword from '../pages/CreateNewPassword';
import NotFound from '../pages/NotFound';
import SendEmail from '../pages/SendEmail';
import { TaskCard } from '../components/TaskCard';
import '../styles/global.css';


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/recovery-password" element={<RecoveryPassword />} />
                <Route path="/create-new-password" element={<CreateNewPassword />} /> 
                <Route path="/create-account" element={<CreateAccount />} /> 
                <Route path="/send-email" element={<SendEmail />} /> 
                <Route path="/task-card" element={<TaskCard ready={true}/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>

    );
}

/*
Principales rutas y secciones que tienen la aplicacion
*/
