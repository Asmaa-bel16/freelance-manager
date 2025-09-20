import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>💼 Freelance Manager</h1>
        <p>Trackez vos heures, gérez vos clients et facturez pro !</p>
        
        <div className="dashboard-preview">
          <h2>📊 Aperçu Dashboard</h2>
          <div className="stats">
            <div className="stat-card">
              <h3>0h</h3>
              <p>Ce mois</p>
            </div>
            <div className="stat-card">
              <h3>0 DH</h3>
              <p>Revenus</p>
            </div>
            <div className="stat-card">
              <h3>0</h3>
              <p>Projets actifs</p>
            </div>
            <div className="stat-card">
              <h3>0</h3>
              <p>Factures en attente</p>
            </div>
          </div>
          
          <button className="start-btn" onClick={() => alert('🚀 Bientôt : Timer !')}>
            Démarrer Timer
          </button>
        </div>
        
        <p style={{marginTop: '2rem', fontSize: '0.9rem', opacity: 0.8}}>
          Backend connecté : {new Date().toLocaleString('fr-FR')}
        </p>
      </header>
    </div>
  );
}

export default App;