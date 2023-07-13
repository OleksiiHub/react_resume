import './App.css';
import './css/style.min.css'
import './css/app.min.css'
import AboutMe from './components/AboutMe';
import ExpDescription from './components/ExpDescription'
import photo from './image/photo.jpg'

function App() {
  return (
    <div className="App">
      <div className='page-style'>
        <AboutMe
          src={photo}
          alt="my photo"
          target={'_blank'}
        />
        <ExpDescription />
      </div>

    </div>
  );
}

export default App;
