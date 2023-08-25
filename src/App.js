import './css/style.min.css'
import './css/app.min.css'
import './css/getweeather.min.css'
import Resume from './components/Resume'
import { GetWeather } from './components/GetWeather'

function App() {
  return (
    <div className="App">
      <Resume />
      <GetWeather />
    </div>
  );
}

export default App;
