import React, { useEffect, useState } from 'react'

function Pokemon() {
    const [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then(response => response.json())
        .then(response => setPokedex(response.results))
    }, [])

  return (
    <div>
        {
            pokedex.length > 0 && pokedex.map((pokemon, index)=>{
                return(
                    <ul>
                        <li key={index}>
                            {pokemon.name}
                        </li>
                    </ul>
                )
            })
        }
    </div>
  )
}

export default Pokemon