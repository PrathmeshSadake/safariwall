import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const IndexPage = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return <div></div>;
};

export default IndexPage;
