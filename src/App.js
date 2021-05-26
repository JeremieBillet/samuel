import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Accueil from './Containers/Accueil/Accueil';
import Pineau from './Containers/Pineau/Pineau';
import Cognac from './Containers/Cognac/Cognac';
import Soft from './Containers/Soft/Soft';
import Contact from './Containers/Contact/Contact';
import Tarif from './Containers/Tarif/Tarif';
import Footer from './Components/Footer/footer';


function App() {
  return (
    <div className="App" id="page-container">

      <Router>

        <Navbar />

        <div className="container" id="content-wrap">
          <Switch>

            <Route path="/pineau" exact component={Pineau} />
            <Route path="/cognac" exact component={Cognac} />
            <Route path="/soft" exact component={Soft} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/tarif" exact component={Tarif} />
            <Route path="/" component={Accueil} />



          </Switch>
        </div>

        <Footer />


      </Router>


    </div>
  );
}

export default App;
