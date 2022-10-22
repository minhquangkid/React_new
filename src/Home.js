import { useState } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [id, setId] = useState();
  const history = useHistory();

  const changeHandle = (e) => {
    console.log(e.target.value);
    setId(e.target.value);
  };

  const getIdHandle = () => {
    if (Number(id) > 500) {
      history.push(`/home/${id}`);
    } else {
      alert("id phai lon hon 500");
      return;
    }
  };

  return (
    <div>
      <h1>HOME PAGE</h1>
      <input type="text" value={id} onChange={changeHandle} />
      <button onClick={getIdHandle}>Get ID</button>
    </div>
  );
};
export default Home;
