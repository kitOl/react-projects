import { addCurrentTime, clearTimes } from "./redux/actionCreators.js";
import store from "./redux/store.js";
// import getCurrentTime from "./utils/getCurrentTime.js";

const addTimeBtn = document.getElementById("btnAddTime");
addTimeBtn.addEventListener("click", () => {
  store.dispatch(
    addCurrentTime()
    //   {
    //   type: "ADD_CURRENT_TIME",
    //   payload: getCurrentTime(),
    // }
  );
});

const clearAllTimesBtn = document.getElementById("btnClearTimes");
clearAllTimesBtn.addEventListener("click", () => {
  store.dispatch(
    clearTimes()
    // { type: "CLEAR_ALL_TIMES" }
  );
  timesList.innerHTML = "";
});

const timesList = document.getElementById("timesList");

store.subscribe(() => {
  const times = store.getState();
  console.log(times);

  let lastTime = times[times.length - 1];
  let li = document.createElement("li");
  li.innerText = lastTime;
  timesList.appendChild(li);

  // timesList.innerHTML = "";
  // times.forEach((time) => {
  //   let li = document.createElement("li");
  //   li.innerText = time;
  //   timesList.appendChild(li);
  // });
});

// const unsubscribe = store.subscribe(() =>
//   console.log(`Redux store just changed! ${store.getState()}`)
// );

// console.log(store.getState());

// store.dispatch({
//   type: "ADD_CURRENT_TIME",
//   payload: "11:30:30",
// });
// console.log(store.getState());

// unsubscribe();

// store.dispatch({
//   type: "ADD_CURRENT_TIME",
//   payload: "17:30:30",
// });
// console.log(store.getState());

// store.dispatch({
//   type: "CLEAR_ALL_TIMES",
// });
// console.log(store.getState());
