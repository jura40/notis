
import Navbar from './Navbar';
import Home from './Home';
import VisaState from './VisaState';
import Efect from './Efect';
import Likes from './Like';
import Likess from './Likess';
import Reducer from './Reducer';
import Efecter from './Efecter';
import Fetch from './Fetch';
import Input from './Input';


function App() {
  
  return (
    <div className='App'>
      <Navbar />
      
      <div className='content'>
      <Home></Home>
      <VisaState />
      <Reducer />
    <Likes />
      
      <Likess />
      <div>
      <Efecter />
      </div>
      
      <Input />
      
 <Fetch />
    </div>
    </div>
  );
}

export default App;
