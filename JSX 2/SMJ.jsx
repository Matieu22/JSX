function Item({ name, importance }) {
    return (
      <li className="item">
        {importance !== 0 && (
          <span>
            <em>(Importancia: {importance})</em> 
            &nbsp;{/* Agregamos un espacio entre las etiquetas */}
          </span>
        )}
        {name}
      </li>
    );
  }
  
  export default function PackingList() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
            importance={9} 
            name="Space suit" 
          />
          <Item 
            importance={0} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            importance={6} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }

  