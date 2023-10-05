import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./Util/AllRoutes";
import { useEffect } from "react";

function App() {
  function cursorMove() {
    let mousePosX = 0,
      mousePosY = 0,
      mouseCircle = document.getElementById("mouse-circle");

    document.onmousemove = (e) => {
      mousePosX = e.pageX;
      mousePosY = e.pageY;
    };

    let delay = 6,
      revisedMousePosX = 0,
      revisedMousePosY = 0;

    function delayMouseFollow() {
      requestAnimationFrame(delayMouseFollow);

      revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
      revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

      mouseCircle.style.top = revisedMousePosY + "px";
      mouseCircle.style.left = revisedMousePosX + "px";
    }
    delayMouseFollow();
  }

  useEffect(() => {
    cursorMove();
  }, []);

  return (
    <>
      <div id="mouse-circle"></div>
      <Router>
        <AllRoutes />
      </Router>
    </>
  );
}

export default App;
