// src/App.js
import React from 'react';
import DevelopersPage from './pages/DevelopersPage';
import PlaceholderPage from './components/PlaceholderPage';

function App() {
  return (
    <div className="App">
      {/* Uncomment the line below to view the placeholder page */}
      {/* <PlaceholderPage /> */}
      <DevelopersPage />
    </div>
  );
}

export default App;

