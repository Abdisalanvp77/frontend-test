import React, { Component } from 'react'
import  {Router, Route, Switch} from 'react-router-dom';
import history from '../history';
import Index from './Index'
import HowToPrepare from './HowToPrepare'
import InterviewQuestions from './InterviewQuestions'
import Contact from './Contact'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default class App extends Component {
    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                    <div>
                        <Navbar />
                        <Switch>
                            <Route path="/" exact component={Index}/>
                            <Route path="/pages/how_to_prepare" exact component={HowToPrepare}/>
                            <Route path="/pages/interview_questions" exact component={InterviewQuestions}/>
                            <Route path="/pages/contact_us" exact component={Contact}/>
                        </Switch>
                        <Footer />
                    </div>
                </Router>
            </div>
        )
    }
}

