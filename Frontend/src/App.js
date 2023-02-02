import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BookHome from './Components/BookHome';
import Navbar from './Components/Navbar';


function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookHome />}>
            <Route path="/" element={<Navbar />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </MantineProvider>
  );
}

export default App;
