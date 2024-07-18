import React from 'react'
import './App.scss'
import btnStyles from './Button.module.css'
import Logo from './images/react-logo.png'

const App = () => {
    return (
        <div>
            <h1>Hello World 2</h1>
            <button className={btnStyles.success}>Success</button>
            <button className={btnStyles.error}>Error</button>
            <img src={Logo} />
        </div>
    )
}

export default App