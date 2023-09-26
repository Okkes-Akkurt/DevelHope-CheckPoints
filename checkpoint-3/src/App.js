import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Routes, Route,BrowserRouter } from 'react-router-dom';
import InputPage from './components/InputPage';
import FilterPage from './components/FilterPage';
import FilteredPage from './components/FilteredPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact Component={InputPage}/>
          <Route path='/filter' Component={FilterPage}/>
          <Route path='/result' Component={FilteredPage}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
