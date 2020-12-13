import React, {Fragment} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About';
import Predictor from './components/Predictor-mains';
import Notes from './components/Notes'
import Questionare from './components/questionare/questionare'
import Survey from './components/survey/components/Main'
import Branch from './components/branches/components/main'
import Engineering from './components/eng-med/components/engineering'
import Medical from './components/eng-med/components/medical'
import Switcher from './components/Login/Switcher'
import store from './components/Redux/store'
import Plans from './components/plans/components/main'
import Document_checklist from './components/Document_checklist/Document_checklist'
import ConfirmPayment from './components/plans/components/confirmPayment'
import College_data from './components/College_data/College_data'
import College_stats from './components/College_stats/College_stats'
import {Provider} from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import SubjNotes from './components/subNotes';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Fragment>
	      <Provider store={store}>
            <Router>
              <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/predictor-mains" component={Predictor} />
                <Route exact path="/" component={Home} />
                <Route exact path="/notes" component={Notes} />
                <Route exact path="/notes/:subId" component={SubjNotes} />
                <Route exact path="/questionare" component={Questionare} />
                <Route exact path="/survey" component={Survey} />
                <Route exact path="/branches/:type" component={Branch} />
                <Route exact path="/engineering/:type" component={Engineering} />
                <Route exact path="/medical/:type" component={Medical} />
                <Route exact path="/plans" component={Plans} />
                <Route exact path="/college_data" component={College_data} />
                <Route exact path="/college_data/:sno" component={College_stats} />
		            <Route exact path='/document_checklist' component={Document_checklist} />
        	      <Route exact path='/switcher' component={Switcher}/>
                {/* <Redirect from="*" to="/" /> */}
              </Switch>
            </Router>
 	      </Provider>
      </Fragment>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
