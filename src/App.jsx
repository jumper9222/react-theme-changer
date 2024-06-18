import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

export default function App() {
    const [theme, setState] = useState('light');

    function toggleState() {
        setState((theme) => theme === 'light' ? 'dark' : 'light'
        )
    }

    return (
        <>
            <div className={`container p-5 justify-content-center ${theme}`} >
                <h1>Theme Switcher</h1>
                <p>{theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</p>
                <Button onClick={toggleState}>Toggle Theme</Button>
            </div>
        </>
    )
}
