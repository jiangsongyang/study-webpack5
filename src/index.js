import _ from "lodash";
import "./style.css";
import MyImage from "./test.jpeg";
import Data from "./data.xml";
import Notes from "./data.csv";

function component() {
  const element = document.createElement("div");

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  const myIcon = new Image();
  myIcon.src = MyImage;

  console.log(Data);
  console.log(Notes);

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
