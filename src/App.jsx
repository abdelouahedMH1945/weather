import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar/SearchBar';
import Wallpaper from './components/Wallpaper/Wallpaper';
import Weather from './components/Weather/Weather';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
<Wallpaper/>
<Container>
  <SearchBar/>
<Weather/>


</Container>

    </div>
  );
}

export default App;
