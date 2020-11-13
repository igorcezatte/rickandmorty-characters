import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { ICharacter } from '../../types';

import api from '../../services/api';

import { Button, Container, CharacterInfo } from '../../styles/pages/CharacterPage';

export default function CharacterPage() {
    const [character, setCharacter] = useState<ICharacter>();
    const router = useRouter()
    
    useEffect(() => {
        if(router.query.slug) {
            api.get(`https://rickandmortyapi.com/api/character/${router.query.slug}`).then((response) => {
                setCharacter(response.data)
            })
        }
    }, [router.query.slug]);

    return (
        <Container>
            <Link href="/"><Button>Back to Home</Button></Link>

            <CharacterInfo>
            { character ? 
                <div>
                    <h1>{character.name}</h1>
                    <img src={character.image}></img>
                    <p>Species: {character.species}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Status: {character.status}</p>
                    { character.type ? <p>Type: {character.type}</p> : null }
                    
                    <p>Location: {character.location.name}</p>
                </div>
                 : null }
            </CharacterInfo>
        </Container>
    )
}