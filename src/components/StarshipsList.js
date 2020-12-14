import { Link } from 'react-router-dom'

function StarshipsList(props) {
    const starshipsArray = props.starships.map((starship, index) => {
        return <div key={ index }>
            <Link 
                to={ {pathname: '/:id', state: starship} }
                key={ starship.name }
            >
                { starship.name }
            </Link>
        </div>
    })
    
    return (
        <>
            { starshipsArray }
        </>
    )
}

export default StarshipsList