import './App.css';
import './css/style.min.css'
import AboutMe from './components/AboutMe';
import photo from './image/photo.jpg'

function App() {
  return (
    <div className="App">
      <AboutMe 
      src = {photo}
      alt = "my photo"
      target = {'_blank'}
      />
    </div>
  );
}

export default App;
