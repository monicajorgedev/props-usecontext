import './App.css';
import { CalculatorProvider } from './components/CalculatorProvider';
import RoutesApp from './routes/RoutesApp';

function App() {
  return (
    <>
      <CalculatorProvider>
        <RoutesApp />
     </CalculatorProvider>
    </>
  );
}

export default App;
