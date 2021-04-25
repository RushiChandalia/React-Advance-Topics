import './App.css';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/Images';

function App() {
  return <ImageSlider slides={SliderData} />;
}

export default App;
