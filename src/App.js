import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.js";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Deals from "./Navigation/Pages/Deals.js";
import Leads from "./Navigation/Pages/Leads.js";
import Meetings from "./Navigation/Pages/Meetings.js";
import Win_Lose from "./Navigation/Pages/Win_Lose.js";

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/"  exact component={Home} />
          <Route path="/Deals" component={Deals} />
          <Route path="/Leads" component={Leads} />
          <Route path="/Meetings" component={Meetings} />
          <Route path="/Win_Lose" component={Win_Lose} />
        </Switch>

      </div>
    </Router>
    );
  }

export default App;


function Home(){

  return(
    <div className='App'>

      <header className="App-header">       
        <Navbar />
      </header>

      <div className='Body'>
        <div className='Homepage-Content'>
          <h2>Welcome To SalesDirect!</h2>

          <div className='Homepage-OfferDesc'>
            <h2>What We Offer<br/></h2>
            <p>
              SalesDirect data handling software allows<br/> 
              businesses to input their raw data as an unsorted file,<br/>
              and have it returned to them as an informative graph.<br/>
              Users can prompt the software to output information<br/>
              based on their own conditions at the push of a button,<br/>
              allowing for a fast and easy to use data handling experience.
            </p>
          </div>

          

        </div>
      </div>

      <div className='Footer'>
        <p>Copyright © SalesDirect 2023</p>
      </div>
    
    </div>
  )
}
