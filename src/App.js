import "./App.css";
import { UserAuth } from "./context/AuthContext";
import Login from "./components/login/Login";
import Main from "./components/dashboard/Main";

function App() {
  const { user } = UserAuth();
  return <div className="App">{user ? <Main /> : <Login />}</div>;
}

export default App;
