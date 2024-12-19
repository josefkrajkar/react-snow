import Snow from "./Snow.tsx";

import "./App.css";

function App() {
  return (
    <div id="wrapper">
      <h1>React Snow</h1>
      <Snow blurValue={10} count={30} snowflakeWidth={30} timeOffset={5} />
    </div>
  );
}

export default App;
