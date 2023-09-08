
import './App.css';
import Theme from './compounents/theme';
import ThemeContext from './compounents/ThemeContext'
import Button from './compounents/button'
function App() {
  return (
    
    <ThemeContext>
    <div className="App">
     <Theme/>
     <hr/>
     <Button/>
    </div>
      </ThemeContext> 
  );
}

export default App;
