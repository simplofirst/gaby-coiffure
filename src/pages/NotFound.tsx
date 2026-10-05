import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function NotFound() {
  return (
    <div className="notfound">
      <Logo size={70} />
      <h1>404</h1>
      <h2 style={{ color: '#fbf8f3', marginBottom: 12 }}>Oups...</h2>
      <p>Cette page n'existe pas.</p>
      <Link to="/" className="btn btn-primary">
        Retour à l'accueil
      </Link>
    </div>
  );
}