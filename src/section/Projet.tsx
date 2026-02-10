import { useParams } from "react-router-dom";
import { useProjet } from "../hook/useProjet";

export default function Projet() {
  const { id } = useParams();

  const { data, isLoading } = useProjet(id);

  return (
    <>
      <h1>Projet {id}</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && data && (
        <div>
          <h2>{data.name}</h2>
          <p>{data.shortdescriptionfr}</p>
        </div>
      )}
    </>
  );
}
