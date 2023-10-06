import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Text from './components/text';
import Para from './components/para';
import Circle from './components/circle';
import Bottom from './components/bottom-para';
import News from './components/new-page';
import Copyright from './components/copy';

function App() {
  return (
    <div>
      <Navbar Classname="navy"></Navbar>
      <Text></Text>
      <Para></Para>
      <Circle></Circle>
      <Bottom></Bottom>
      <News></News>
      <Copyright></Copyright>
    </div>
    
    
  );
}

export default App;
