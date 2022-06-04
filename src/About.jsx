import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <h1>Aboutページです</h1>
      <Link to="/about/detailA">AboutDetaileA</Link>
      <br />
      <Link to="/about/detailB">AboutDetaileB</Link>
    </div>
  );
};
