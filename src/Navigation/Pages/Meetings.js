import '../../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../Navbar';
import MeetingsChart from './Charts/Meetings_Chart';

export default function Meetings()  {
    return (    
        <div className="App">


        <header className="App-header">       
            <Navbar />
        </header>

        <div className='Body'>

            <div className='Meetings'>
                <MeetingsChart/>
            </div>

            <div className='Meetings-Text'>
                <h2>Meetings Booked</h2>
            </div>

            
        </div>

        <div className='Footer'>
          <p>Copyright © SalesDirect 2023</p>
        </div>
        
        </div>
    );
}