import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'

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
                <Route
                    path='/:id'
                    render={({ location }) => 
                        <StarshipPage location={ location } />
                    }
                />
            </>
        </BrowserRouter>
    )
}

export default App