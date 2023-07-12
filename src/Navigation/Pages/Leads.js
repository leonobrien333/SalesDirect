import '../../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../Navbar';
import LeadsChart from './Charts/Leads_Chart';

export default function Leads()  {
    return (    
        <div className="App">


        <header className="App-header">       
            <Navbar />
        </header>

        <div className='Body'>

            <div className='Leads'>
                <LeadsChart/>
            </div>           
            
            <div className='Leads-Text'>
                <h2>Leads Picked Up</h2>
            </div>


        </div>

        <div className='Footer'>
          <p>Copyright © SalesDirect 2023</p>
        </div>
        
        </div>
    );
}