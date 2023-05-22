import { useParams } from 'react-router-dom';

export default function CountryPage() {
  const { code } = useParams();
  console.log(code);

  return <div>Ceci affiche le détail d'un pays</div>;
}
