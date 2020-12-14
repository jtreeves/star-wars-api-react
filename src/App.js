import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import StarshipPage from './components/StarshipPage'

function App() {
    return (
        <BrowserRouter>
            <>
                <h1>STAR WARS STARSHIPS</h1>
                <Route
                    exact
                    path='/'
                    component={ Home }
                />
            </>
        </BrowserRouter>
    )
}

export default App