import { Link } from "react-router-dom";

export const About = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);
  return (
    <div>
      <h1>Aboutページです</h1>
      <Link to={{ pathname: "/about/detailA", state: arr }}>AboutDetaileA</Link>
      <br />
      <Link to="/about/detailB">AboutDetaileB</Link>
    </div>
  );
};
