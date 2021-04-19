import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Component/login';
import Registration from './Component/registration';
import Profile from './Component/profile';

function App() {
  return (
    <div className=" ">
      <Router>
        <>
          <Route  path="/" exact component={Login}/>
          <Route  path="/login" component={Login}/>
          <Route  path="/registration" exact component={Registration}/>
          <Route  path="/profile/:id/:firstName/:lastName/:email/:gender/:typeOfFarmer" component={Profile}/>
        </>
      </Router>
    </div>
  );
}

export default App;
