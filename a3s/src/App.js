import './App.css';
import React from 'react';
// import Homepage from './components/Homepage';
// import Top from './components/Top';
import Homepage from './components/Homepage';
import { AuthProvider } from './components/AuthContext';
// AuthProvider


function App() {

  return (
    <div className="App">
      <AuthProvider>
      <Homepage/>
      </AuthProvider>
    </div>
  );
}

export default App;