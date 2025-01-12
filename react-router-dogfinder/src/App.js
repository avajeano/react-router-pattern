import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import DogList from './DogList';
import FilterDogDetails from './FilterDogDetails';
import './App.css';

function App() {

  const dogs = [
    {
      name: "Whiskey",
      age: 5,
      src: "/whiskey.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "/duke.jpg",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "/perry.jpg",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: "/tubby.jpg",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar dogs={dogs}/>
        <Routes>
          <Route path="/dogs" element={<DogList dogs={dogs}/>}/>
          <Route path="/dogs/:name" element={<FilterDogDetails dogs={dogs} />}/>
          <Route path="/*" element={<Navigate to="/dogs" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
