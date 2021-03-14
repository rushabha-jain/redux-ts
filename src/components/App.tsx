import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useSelector";
import { searchRepositories } from "../store";

function App() {
  const dispatch = useDispatch();
  const [packageName, setPackageName] = React.useState('');
  const { data, loading, error } = useTypedSelector(
    state => state.repositories
  );
  const loadPackages = () => {
    dispatch(searchRepositories(packageName));
  };
  return (
    <div className="App">
      <input
        value={packageName}
        onChange={e => setPackageName(e.target.value)}
      />
      <button onClick={loadPackages}>Load Packages</button>
      {loading && <p>Fetching packages...</p>}
      {!loading && !error && (
        <ul>
          {data.map(repo => (
            <li key={repo}>{repo}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
