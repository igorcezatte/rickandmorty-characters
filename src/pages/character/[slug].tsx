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
                    <h1>Name: {character.name}</h1>
                    <img src={character.image}></img>
                    <h1>Species: {character.species}</h1>
                    <h1>Gender: {character.gender}</h1>
                    <h1>Status: {character.status}</h1>
                    { character.type ? <h1>Type: {character.type}</h1> : null }
                    
                    <h1>Location: {character.location.name}</h1>
                </div>
                 : null }
            </CharacterInfo>
        </Container>
    )
}