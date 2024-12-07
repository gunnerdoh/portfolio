import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Frontpage from './Frontpage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/old" element={<Homepage />} />
        <Route path="/" element={<Frontpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
