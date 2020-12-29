import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/home';
import Banking from './pages/banking';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <div className="App__content">
                    <Switch>
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        <Route path="/banking">
                            <Banking />
                        </Route>
                        <Redirect from="/" to="/home" />
                    </Switch>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
