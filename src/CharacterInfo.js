import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const GET_CHARACTER_INFO = gql`
  query GetCharacterInfo($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      image
      gender
      origin {
        name
      }
      location {
        name
      }
      episode {
        name
        episode
      }
    }
  }
`;

const CharacterInfo = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER_INFO, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const character = data.character;

  return (
    <div>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Location: {character.location.name}</p>
      <h3>Episodes:</h3>
      <ul>
        {character.episode.map((episode) => (
          <li key={episode.episode}>{episode.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterInfo;
