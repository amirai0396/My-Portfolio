import './App.scss';
import { Switch, Route } from 'react-router-dom';

import NavBar from './Components/NavBar.component';
import AboutPage from './Pages/AboutPage.component';
import HomePage from './Pages/HomePage.component';
import ProjectsPage from './Pages/Project.component';
import ContactPage from './Pages/Contact.component';
import SkillsPage from './Pages/Skills.component';
import wallpaper from '../src/images/wallpaper.mp4';
import { useState } from 'react';
function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  };
  return (
    <div className='App'>
      <div className='sidebar'>
        <NavBar />
      </div>
      <div className='nav-btn' onClick={navClick}>
        <div className='lines-1'></div>
        <div className='lines-2'></div>
        <div className='lines-3'></div>
      </div>

      <div className='main-content'>
        <video src={wallpaper} type='video/mp4' autoPlay loop muted />
        <div className='content'>
          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/about' exact>
              <AboutPage />
            </Route>
            <Route path='/projects' exact>
              <ProjectsPage />
            </Route>
            <Route path='/skills' exact>
              <SkillsPage />
            </Route>
            <Route path='/contact' exact>
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
