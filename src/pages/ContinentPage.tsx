import { useParams } from 'react-router-dom';

export default function ContinentPage() {
  const { code } = useParams();
  console.log(code);

  return <div>Cette page affichera la liste des pays du continent</div>;
}
