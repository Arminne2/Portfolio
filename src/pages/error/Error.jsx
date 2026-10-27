import {Link} from 'react-router-dom'
import './error.css'

const Error = () =>{
return (
  <div className="error-container">
  <h1 className="error-name">404</h1>
  <h2 className="error-text">Oups! La page que vous demandez n'existe pas.</h2>
  <Link to='/' className="nav-link-error">Retourner sur la page d'accueil</Link>
  </div>
)
}
export default Error