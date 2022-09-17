import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
//import Login from '../containers/Login';
//import RecoveryPassword from '../containers/RecoveryPassword';
//import Home from '../pages/Home';
//import NotFound from '../pages/NotFound';
//import '../styles/global.css';

export default function App () {
    return (
        <BrowserRouter>
            {/* <Layout> */} 
                <Routes>
                    <Route path="/" element={<div>PGLOOOOOOOOOOOOOOOOOOO</div>} />
                    {/*<Route path="/login" element={<Login />} />		
                    <Route path="/recovery-password" element={<RecoveryPassword />} />
                    <Route path="*" element={<NotFound />} />*/}
                </Routes>
            {/* </Layout> */}            
        </BrowserRouter>
        /*<BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="recovery-password" component={RecoveryPassword} />
                    <Route component={NotFound} />
                </Routes>
            </Layout>
            <Layout>
                <Login></Login>
                <RecoveryPassword></RecoveryPassword>
            </Layout>
        </BrowserRouter>*/
  );
}
