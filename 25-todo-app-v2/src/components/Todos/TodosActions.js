import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";

import Button from "../UI/Button";
import styles from "./TodosActions.module.css";

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <div className={styles.todoActionsContainer}>
      <Button title="Reset All Todos" onClick={() => resetTodos()}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        disabled={!completedTodosExist}
        onClick={() => deleteCompletedTodos()}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosActions;
