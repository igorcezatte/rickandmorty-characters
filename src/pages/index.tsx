import { FormEvent, useState, useEffect } from 'react';
import Link from 'next/link';
import { CharacterList, Header, Form, Input, Button, RButton, Paginate } from '../styles/pages/Home';

import { IData } from '../types';

import api from '../services/api';

export default function Home() {
  const [data, setData] = useState<IData>();
  const [search, setSearch] = useState('');

  const randomChar = Math.floor((Math.random() * 671) + 1);

  useEffect(() => {
      if(!data) {
          api.get(`https://rickandmortyapi.com/api/character/?name=`).then((response) => {
              setData(response.data)
          })
      }
  }, []);

  function handleSearch(e: FormEvent) {
      e.preventDefault();

      api.get(`https://rickandmortyapi.com/api/character/?name=${search}`).then((response) => {
        setData(response.data);
      });
  }

  function handleNextPage(e: FormEvent) {
    e.preventDefault();

    api.get(data.info.next).then((response) => {
      setData(response.data);
    });
  }

  function handlePreviousPage(e: FormEvent) {
    e.preventDefault();

    api.get(data.info.prev).then((response) => {
      setData(response.data);
    });
  }

  return (
    <div>
      <Header>
        <Form>
            <Input type="text" placeholder="Character" value={search} onChange={ e => setSearch(e.target.value) }/>
            <Button type="submit" onClick={handleSearch}>Search</Button>
        </Form>

        <Link href={`character/${randomChar}`}>
          <RButton type="button">Random Character</RButton>
        </Link>
        { data ? <h1>Total amount: {data.info.count}</h1> : null }
      </Header>
      
      <div>
        {data ? <CharacterList>
          {data.results.map(character => {
            return (
              <Link key={character.id} href={`character/${character.id}`}>
                <li key={character.id}>
                  <h1>{character.name}</h1>
                  <img src={character.image}></img>
                </li>
              </Link>
            )
          })}
        </CharacterList> : null}
      </div>
          { data ?
              <Paginate>
                { data.info.prev ? 
                    <Button type="button" onClick={handlePreviousPage}>Previous page</Button>
                  : null }

                { data.info.next ? 
                    <Button type="button" onClick={handleNextPage}>Next page</Button>                
                : null }
              </Paginate>
          : null }
    </div>
  )
}
