import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/signin' component={SignIn} />
        </switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
// implemented ProjectDetails ID
// Implemented SignIn form
// Imported CDN Javascript from materializecss.com
