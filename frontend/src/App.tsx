import { useEffect, useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { fetchProductionSuggestion } from "./store/slices/productionSlice";

function App() {
  const [count, setCount] = useState(0);

  const dispatch = useAppDispatch();
  const suggestion = useAppSelector((s) => s.production.suggestions);
  const loading = useAppSelector((s) => s.production.loading);

  console.log("loading", loading);
  console.log("suggestion", suggestion);
  

  useEffect(() => {
    dispatch(fetchProductionSuggestion());
  }, []);

  return (
    <>
      <div
        className="flex flex-col"
      >
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
