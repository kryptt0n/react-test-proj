import './App.css';
import Counter from './components/counter/Counter';


function App() {
  const by = {
    first: 1,
    second: 25,
    third: 100
  }
  return (
    <div className="App">
      My counter
      <Counter by={by}></Counter>
    </div>
  );
}
export default App;
