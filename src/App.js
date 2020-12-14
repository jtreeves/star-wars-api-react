import { BrowserRouter } from 'react-router-dom'

import Home from './components/Home'

function App() {
    return (
        <BrowserRouter>
            <>
                <h1>STAR WARS STARSHIPS</h1>
                <Home />
            </>
        </BrowserRouter>
    )
}

export default App