import { useState } from "react";
import "./App.css";
function App(){
  const [count, setCount] = useState(0);
  return (
    <div id="appp">
      <h1>SPA Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
export default App;