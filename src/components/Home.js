import React, { useContext } from "react";
import { AuthContext } from "../Context/UserContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>This Home is For {user?.displayName} </h2>
    </div>
  );
};

export default Home;
