import React, {Component} from 'react';
import {
    BrowserRouter as Router, Switch, Route, Link 
} from "react-router-dom";
import Home from './../components/Home';
import About from './../components/About';
import Contact from './../components/Contact';
import Project from './../components/Project';
import Result from './../components/Result';
import Lab from './../components/Lab';
import CV from '../components/CV';
import Lab1 from '../components/Lab/Lab1';
import Lab2 from '../components/Lab/Lab2';
import Lab3 from '../components/Lab/Lab3';
import Lab4 from '../components/Lab/Lab4';
import Lab5 from '../components/Lab/Lab5';

class RouterURL extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component= {Home} />
                    <Route exact path="/about" component= {About} />
                    <Route exact path="/contact" component= {Contact} />
                    <Route exact path="/project" component= {Project} />
                    <Route exact path="/result" component= {Result} />
                    <Route exact path="/CV" component= {CV} />
                    <Route exact path="/lab" component= {Lab} />
                    <Route exact path="/lab1" component= {Lab1} />
                    <Route exact path="/lab2" component= {Lab2} />
                    <Route exact path="/lab3" component= {Lab3} />
                    <Route exact path="/lab4" component= {Lab4} />
                    <Route exact path="/lab5" component= {Lab5} />
                </div>
            </Router>
        );
    }
}

export default RouterURL;