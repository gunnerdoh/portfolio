import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OldFrontpage from './OldFrontpage';
import Frontpage from './Frontpage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/old" element={<OldFrontpage />} />
        <Route path="/" element={<Frontpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
