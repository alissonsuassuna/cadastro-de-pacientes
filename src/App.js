import logo from './logo.svg';
import './App.css';
import Contacts from './component/Contacts';

function App() {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2"> 
        <Contacts />
      </div>
      
    </div>
  );
}

export default App;
