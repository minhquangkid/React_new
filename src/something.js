import { useParams } from "react-router-dom";

const Something = () => {
  const params = useParams();

  return <h1>{params.id}</h1>;
};
export default Something;
