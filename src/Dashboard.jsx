import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div>
      <h1>Dashboardページです</h1>
      <Link to="/dashboard/999"> Parameter</Link>
      <br />
      <Link to="/dashboard/999?name=hogehoge"> Query Parameter</Link>
    </div>
  );
};
