import { FormEvent, useState } from 'react';
import { CharacterList, Header, Form, Input, Button } from '../styles/pages/Home';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination'

import api from '../services/api';

import { default as logo } from '../assets/test.svg';

interface ICharacter {
  id: string;
  name: string;
  gender: string;
  image: string;
}

interface IData {
  results: ICharacter[];
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      
    },
  ul: {
    backgroundColor: '#fff',
  }
  },
}));

export default function Home() {
  const [data, setData] = useState<IData>();
  const [search, setSearch] = useState('');

  const n = 8;

  const classes = useStyles();

  function handleSearch(e: FormEvent) {
      e.preventDefault();

      api.get(`https://rickandmortyapi.com/api/character/?name=${search}`).then((response) => {
      setData(response.data);
    });
  }

  function handleNextPage(e: FormEvent) {
    api.get(data.info.next).then((response) => {
      setData(response.data);
    });
  }

  function handlePreviousPage(e: FormEvent) {
    api.get(data.info.prev).then((response) => {
      setData(response.data);
    });
  }

  return (
    <div>
      <Header>
        <Form>
            <Input type="text" placeholder="Search" value={search} onChange={ e => setSearch(e.target.value) }/>
            <Button type="submit" onClick={handleSearch}>Pesquisar</Button>
        </Form>

      
      <img src="../assets/public/rickandmorty.png" />

      </Header>
      

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

        {/* <div>
          { data ? Array(data.info.pages).fill(<div>{data.info.pages - 1}</div>) : null }



          { data ? [...Array(data.info.pages)].map((elementInArray, index) => ( 
                <div className="" key={data.info.pages}> Whatever needs to be rendered repeatedly </div> 
          )) : null}
        </div> */}

        { data ? 
                <div className={classes.root}>
                <Pagination count={data.info.pages} />
                <Pagination count={data.info.pages} color="primary" />
                <Pagination count={data.info.pages} color="secondary" />
                <Pagination count={data.info.pages} disabled />

                <Pagination count={data.info.pages} variant="outlined" />
                <Pagination count={data.info.pages} variant="outlined" color="primary" />
                <Pagination count={data.info.pages} variant="outlined" color="secondary" />
                <Pagination count={data.info.pages} variant="outlined" disabled />
              </div> 
          : null }

          { data ?
              <div>
                { data.info.prev ? 

                    <Button type="button" onClick={handlePreviousPage}>Previous page</Button>

                  : null }

                { data.info.next ? 
                
                    <Button type="button" onClick={handleNextPage}>Next page</Button>
                
                : null }
              </div>
          : null }

    </div>
  )
}
