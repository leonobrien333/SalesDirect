import '../../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../Navbar';
import DealChart from './Charts/Deals_Chart.js'

export default function Deals()  {
    return (    
        <div className="App">


        <header className="App-header">       
            <Navbar />
        </header>

        <div className='Body'>

            <div className='Deals'>
                <DealChart />
            </div>
            
            <div className='Deals-Text'>
                <h2>Deals Made</h2>
            </div>

        </div>

        <div className='Footer'>
          <p>Copyright © SalesDirect 2023</p>
        </div>
        
        </div>
    );
}