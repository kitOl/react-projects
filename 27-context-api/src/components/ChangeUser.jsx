import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function ChangeUser() {
  const { userName, changeUserName } = useContext(UserContext);
  const [text, setText] = useState("");

  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Input new name"
      />
      <br />
      <button
        onClick={() => {
          changeUserName(text);
          setText("");
        }}
        // onClick={() => changeUserName(userName === "Oleg" ? "Alice" : "Oleg")}
      >
        ChangeUser
      </button>
    </>
  );
}

export default ChangeUser;
