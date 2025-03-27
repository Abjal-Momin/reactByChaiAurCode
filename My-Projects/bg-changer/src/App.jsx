import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#999");

  return (
    <div className="w-full h-screen " style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-20 px-2 inset-x-0">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-xl bg-slate-300 px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 font-medium text-white shadow-xl rounded-full"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 font-medium text-white shadow-xl rounded-full "
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 font-medium text-white shadow-xl rounded-full "
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 font-medium text-white shadow-xl rounded-full "
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor("gray")}
            className="outline-none px-4 py-1 font-medium text-white shadow-xl rounded-full "
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 font-medium text-black shadow-xl rounded-full "
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 font-medium text-black shadow-xl rounded-full "
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 font-medium text-black shadow-xl rounded-full "
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("lavender")}
            className="outline-none px-4 py-1 font-medium text-black shadow-xl rounded-full "
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 font-medium text-black shadow-xl rounded-full "
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 font-medium text-white shadow-xl rounded-full "
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
