import { Link } from 'react-router-dom'

function StarshipDetails(props) {
    const starship = props.location.state

    return(
        <>
            <p>NAME: {starship.name}</p> 
            <p>MODEL: {starship.model}</p>
            <p><Link to='/'>RETURN</Link></p>
        </>
    )
}

export default StarshipDetails