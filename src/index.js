

import React from 'react';
import App from './routes/App';
import {createRoot} from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App tab="home" />); 




/*import ReactDom from 'react-dom';

//import {createRoot} from 'react-dom/client';
//const container = document.getElementById('app');
//const root = createRoot(container);
//root.render(<App tab="home" />);
//import App from './routes/App';
/*import {createRoot} from 'react-dom/client' 
createRoot(document.getElementById('root')).render(<App />, document.getElementById())*/


//ReactDom.render(<App/>, document.getElementById('app'));

