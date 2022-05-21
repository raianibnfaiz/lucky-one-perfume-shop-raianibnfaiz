import './App.css';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div>
      <h1 className="text-center mt-1  p-1 rounded-4">Perfume Shop</h1>
      <h3 className="text-center mt-1  p-1 rounded-4">Buy your favorite perfume</h3>

      <Shop></Shop>
    </div>
  );
}

export default App;
