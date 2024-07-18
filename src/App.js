import React from 'react'
import './App.scss'
import btnStyles from './Button.module.css'

const App = () => {
    return (
        <div>
            <h1>Hello World 2</h1>
            <button className={btnStyles.success}>Success</button>
            <button className={btnStyles.error}>Error</button>
        </div>
    )
}

export default App