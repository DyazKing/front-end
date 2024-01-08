import './App.css';
import ButtonComponents from './components/ButtonComponents';
import ImageComponents from './components/ImageComponents';

const btnText = "Cliccami";
const imgSrc = "https://upload.wikimedia.org/wikipedia/it/f/fc/Pippo_Disney.png";
const imgAlt = "Pippo"


function App() {
  return (
    <div className="App">
      <ButtonComponents value={btnText} />
      <ImageComponents src={imgSrc} alt={imgAlt} />
    </div>
  );
}

export default App;
