import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Axios from 'axios'

import StarshipsList from './StarshipsList'
import StarshipDetails from './StarshipDetails'

function Home() {
    const [starships, setStarships] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)
    
    async function getStarships() {
        try {
            const starshipsQuery1 = await Axios.get('http://swapi.dev/api/starships/')
            const starshipsData1 = starshipsQuery1.data.results
            const starshipsQuery2 = await Axios.get('http://swapi.dev/api/starships/?page=2')
            const starshipsData2 = starshipsQuery2.data.results
            const starshipsQuery3 = await Axios.get('http://swapi.dev/api/starships/?page=3')
            const starshipsData3 = starshipsQuery3.data.results
            const starshipsQuery4 = await Axios.get('http://swapi.dev/api/starships/?page=4')
            const starshipsData4 = starshipsQuery4.data.results
            const starshipsData = starshipsData1.concat(starshipsData2, starshipsData3, starshipsData4)
            setStarships(starshipsData)
        } catch(errorMessage) {
            setIsLoaded(false)
            setError(errorMessage)
        }
    }
    
    function displayStarships() {
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <Switch>
                    <Route
                        exact path='/'
                        render={() => 
                            <StarshipsList starships={starships} />
                        }
                    />
                    <Route
                        path='/:id'
                        render={({location}) => 
                            <StarshipDetails location={location} />
                        }
                    />
                </Switch>
            )
        }
    }
    
    useEffect(() => {
        getStarships()
    }, [])
    
    return (
        <>
            {displayStarships()}
        </>
    )
}

export default Home