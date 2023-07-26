// import React from 'react';
// import { useQuery, gql } from '@apollo/client';

// const GET_CHARACTERS = gql`
//   query GetCharacters {
//     characters {
//       results {
//         id
//         name
//         status
//         species
//         image
//         location {
//           name
//         }
//       }
//     }
//   }
// `;

// const CharacterList = () => {
//   const { loading, error, data } = useQuery(GET_CHARACTERS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       <h2>Rick and Morty Characters</h2>
//       <ul>
//         {data.characters.results.map((character) => (
//           <li key={character.id}>
//             <img src={character.image} alt={character.name} />
//             <h3>{character.name}</h3>
//             <p>Status: {character.status}</p>
//             <p>Species: {character.species}</p>
//             <p>Location: {character.location.name}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CharacterList;









import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        status
        species
        image
        location {
          name
        }
      }
    }
  }
`;

const CharacterList = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Rick and Morty Characters</h2>
      <ul>
        {data.characters.results.map((character) => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Location: {character.location.name}</p>
            <Link to={`/characters/${character.id}`}>More Info</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;




