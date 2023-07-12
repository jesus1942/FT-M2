import React, { useState } from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import ParticlesBackground from './components/ParticlesBackground';
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick } from './data.js';


function App() {

   const [ showCard, setShowCard] = useState(true);
   const handleCloseCard = () => {
      setShowCard(false);
   };

   return (
      <div className='App'>
      {showCard && (
         <Card 
            //Propiedad del personaje
            onCLose={handleCloseCard} //Para la funcion handleCloseCard
         />
      )}

         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} />
         <Card
            id={characters.id}
            name={characters.name}
            status={characters.status}
            species={characters.species}
            gender={characters.gender}
            origin={characters.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />
         
         <ParticlesBackground />

      </div>
   );
}

export default App;
