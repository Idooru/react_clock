import "./App.css";
import { Clock } from "./pages/Clock";
import { useClock } from "./hooks";

function App() {
  const today = useClock();

  return (
    <div className="App">
      <Clock today={today}></Clock>
    </div>
  );
}

export default App;
