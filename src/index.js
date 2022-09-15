import React from 'react';
//import ReactDom from 'react-dom';
import {createRoot} from 'react-dom/client' 
createRoot(document.getElementById('root')).render(<App />, document.getElementById())
import App from './routes/App';

ReactDom.render(<App />, document.getElementById('app'));

