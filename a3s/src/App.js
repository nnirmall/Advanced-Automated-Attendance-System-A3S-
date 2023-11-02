import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
// import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';

// import Preferences from './components/Preferences/Preferences';

function App() {

  return (
    <div className="wrapper">
      <h1>Login Page</h1>
        {/* <Dashboard/>
        <Preferences/> */}
        <Login/>
    </div>
  );
}

export default App;
