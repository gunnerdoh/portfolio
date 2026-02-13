import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Frontpage from './Frontpage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frontpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
