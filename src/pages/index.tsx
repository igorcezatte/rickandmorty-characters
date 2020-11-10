import { useState } from 'react';
import { CharacterList } from '../styles/pages/Home';

import api from '../services/api';

interface ICharacter {
  id: string;
  name: string;
  gender: string;
  image: string;
}

interface IData {
  results: ICharacter[];
  info: {
    pages: string;
  }
}

export default function Home() {
  const [data, setData] = useState<IData>();
  const [search, setSearch] = useState('');

  function handleSearch() {
      api.get(`/character/?name=${search}`).then((response) => {
      setData(response.data);
    });
  }

  return (
    <div>
      <input type="text" placeholder="Search" onChange={ e => setSearch(e.target.value) }/>
      <button type="submit" onClick={handleSearch}>Pesquisar</button>

        {data ? <CharacterList>
          {data.results.map(character => {
            return (
              <li key={character.id}>
                <h1>{character.name}</h1>
                <img src={character.image}></img>
              </li>
            )
          })}
        </CharacterList> : null}

        <div>{data ? data.info.pages : null}</div>

    </div>
  )
}
