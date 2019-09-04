import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

function Topic({ match }) {
    return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {

    console.log(match);

    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:id`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    );
}

const App = () => {
    return (
        <Router>
            <header>
                <nav>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/topics'}>Topics</Link>
                </nav>
            </header>

            <div>
                <Route exact path="/" component={Index} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
            </div>
        </Router>
    )
};

export default App;
