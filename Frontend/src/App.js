import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BookHome from './Components/BookHome';
import Main from './Components/Main';


function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookHome />}>
            <Route path="/" element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </MantineProvider>
  );
}

export default App;
