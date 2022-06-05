import { useLocation } from "react-router-dom";

export const AboutDetailA = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h1>AboutDetailAページです</h1>
    </div>
  );
};
