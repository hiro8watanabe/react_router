import { useLocation, useHistory } from "react-router-dom";

export const AboutDetailA = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();
  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>AboutDetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
