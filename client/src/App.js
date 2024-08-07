import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import HomePage from './HomePage';
import CallbackPage from './CallbackPage.jsx'; // Make sure you create this component

function App() {
    return ( <
        BrowserRouter >
        <
        Routes >
        <
        Route path = "/"
        element = { < LandingPage / > }
        /> <
        Route path = "/home"
        element = { < HomePage / > }
        /> <
        Route path = "/callback"
        element = { < CallbackPage / > }
        /> <
        /Routes> <
        /BrowserRouter>
    );
}

export default App;