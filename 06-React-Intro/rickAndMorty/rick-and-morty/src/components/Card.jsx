

export default function Card(props) {
   const handleOnClick = () => {
      // Lógica del comportamiento de la X al hacer click.
      props.onClose();
   }
   return (
      <div>
         <button onClick={handleOnClick}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt='' />
      </div>
   );
}
