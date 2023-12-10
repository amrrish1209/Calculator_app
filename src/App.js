import "./style.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand"></div>
        <div className="current-operand">{value}</div>
      </div>
      <button className="span-two" value="AC" onClick={(e) => setValue("")}>
        AC
      </button>
      <button value="DEL" onClick={(e) => setValue(value.slice(0, -1))}>
        DEL
      </button>
      <button value="/" onClick={(e) => setValue(value + e.target.value)}>
        /
      </button>
      <button value="1" onClick={(e) => setValue(value + e.target.value)}>
        1
      </button>
      <button value="2" onClick={(e) => setValue(value + e.target.value)}>
        2
      </button>
      <button value="3" onClick={(e) => setValue(value + e.target.value)}>
        3
      </button>
      <button value="*" onClick={(e) => setValue(value + e.target.value)}>
        *
      </button>
      <button value="4" onClick={(e) => setValue(value + e.target.value)}>
        4
      </button>
      <button value="5" onClick={(e) => setValue(value + e.target.value)}>
        5
      </button>
      <button value="6" onClick={(e) => setValue(value + e.target.value)}>
        6
      </button>
      <button value="+" onClick={(e) => setValue(value + e.target.value)}>
        +
      </button>
      <button value="7" onClick={(e) => setValue(value + e.target.value)}>
        7
      </button>
      <button value="8" onClick={(e) => setValue(value + e.target.value)}>
        8
      </button>
      <button value="9" onClick={(e) => setValue(value + e.target.value)}>
        9
      </button>
      <button value="-" onClick={(e) => setValue(value + e.target.value)}>
        -
      </button>
      <button value="." onClick={(e) => setValue(value + e.target.value)}>
        .
      </button>
      <button value="0" onClick={(e) => setValue(value + e.target.value)}>
        0
      </button>
      <button
        className="span-two"
        value="="
        onClick={(e) => setValue(eval(value))}
      >
        =
      </button>
    </div>
  );
}

export default App;
