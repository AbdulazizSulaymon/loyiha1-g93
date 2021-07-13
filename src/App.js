import mylogo from './logo.svg';
import './App.css';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGlide } from '@fortawesome/free-brands-svg-icons';
import Card from "./Card"

function App() {
  return (
    <div className="App">
      <header className="bg-dark shadow">
        <div className="container py-3 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img src={mylogo} className="logo" alt="" />
            <p className="fw-bold text-white mb-0">React App 1.0</p>
          </div>
          <button className="btn btn-dark">menu</button>
        </div>
      </header>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-sm-6 col-md-4">
            <Card img={"https://static8.depositphotos.com/1370441/847/i/950/depositphotos_8470542-stock-photo-blue-ocean-wave.jpg"} title="Ocean 1" icon={faGlobe} />
          </div>
          <div className="col-sm-6 col-md-4">
            <Card img={"https://s1.1zoom.ru/prev2/530/Waves_Ocean_Closeup_529151_300x206.jpg"} title="Ocean 2" icon={faGlide} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
