import React from 'react';
import { Header } from './components/header/Header';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <React.Fragment>
            <Router>
                <Header />
            </Router>
        </React.Fragment>
    );
}

export default App;
