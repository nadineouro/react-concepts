import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ApplicationState } from '../store/types';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Header from '../components/Header';

const App: React.FC = () => {
  const { theme } = useSelector((state: ApplicationState) => state.main)
  return (
    <BrowserRouter>
      <div className={`app-container-${theme}`}>
        <Header />
          <div className='app-sub-container'>
            <div className='app-content'>
              <Switch>
                <Route path='/not-found' component={NotFound} />
                <Route path='/' component={Home} />
              </Switch>
            </div>
          </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
