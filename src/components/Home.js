import { Link } from 'react-router-dom'
import axios from 'axios'

function Home() {
    
    state.starships.map(starship =>
        <Link
          to={{
            pathname: '/starship',
            state: starship
          }}
          key={starship.name}
        >
          {{starship.name}}
        </Link>
    
    return(
        <ul>
            <li>
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/procedures'>Procedures</Link>
            </li>
        </ul>
    )
}

export default Home