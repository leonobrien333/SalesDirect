import '../../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../Navbar';
import WinLoseChart from './Charts/Win_Lose_Chart';

export default function Win_Lose()  {
    return (    
        <div className="App">


        <header className="App-header">       
            <Navbar />
        </header>

        <div className='Body'>

            <div className='Win-Lose'>
                <WinLoseChart/>
            </div>

            <div className='Win-Lose-Text'>
                <h2>Win-Lose Ratio</h2>
            </div>

            
        </div>

        <div className='Footer'>
          <p>Copyright © SalesDirect 2023</p>
        </div>
        
        </div>
    );
}