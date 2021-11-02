import {Switch, Route} from 'react-router-dom';
import Home from './views/Home'
import Project from './views/Project'

function App() {
    return (
        <div className=''>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/project/:title' component={Project}/>
          </Switch>
        </div>
    );
}

export default App;
