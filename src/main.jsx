import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Homepagenologin from './pages/Homepagenologin'
import AGB from './pages/AGB';


const Main = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/hinweise" component={Hinweise} />
          <Route path="/kontakt" component={Kontakt} />
          <Route path="/AGB" component={AGB} /> 
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Homepagenologin/>
  </React.StrictMode>,
)

export default Main;