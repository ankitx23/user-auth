import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Welcome to the App</h2>
      <Link to="/signup">Sign Up</Link> | <Link to="/login">Login</Link>
    </div>
  );
};

export default Home;
