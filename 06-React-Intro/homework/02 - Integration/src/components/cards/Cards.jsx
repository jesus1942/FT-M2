

// import React from 'react';
import Card from '../card/Card';

export default function Cards(props) {
   return (
      <>
         <div>
            {props.characters.map((character) => (
               <Card
                  key={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin.name}
                  image={character.image}
                  onClose={props.onClose}
               />
            ))}
         </div>
      </>
   );
}
