import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        status
        species
        image
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
          <p key={character.id}>
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <ul>
            <li>Status: {character.status}</li>
            <li>Species: {character.species}</li>
            </ul>   
          </p>
        ))}
      </ul>
    </div>
  );
};



export default CharacterList;

// import React from 'react';
// import { useQuery, gql } from '@apollo/client';

// const GET_CHARACTERS = gql`
//   query GetCharacters($name: String!, $status: String!) {
//     characters(filter: { name: $name, status: $status }) {
//       results {
//         id
//         name
//         status
//         species
//         image
//         count
//       }
//     }
//   }
// `;

// const CharacterList = ({ name, status }) => {
//   const { loading, error, data } = useQuery(GET_CHARACTERS, {
//     variables: { name, status },
//   });

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
//             <p>count:{character.count}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CharacterList;

