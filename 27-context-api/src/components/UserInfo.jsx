import UserContext from "../context/UserContext";
import { useContext } from "react";

function UserInfo() {
  const { userName } = useContext(UserContext);
  // console.log("user-info", user);
  return (
    <h1>{userName}</h1>
    // <UserContext.Consumer>{(value) => <h1>{value}</h1>}</UserContext.Consumer>
  );
}

export default UserInfo;
