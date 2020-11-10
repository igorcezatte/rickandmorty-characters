import styled from 'styled-components';

export const CharacterList = styled.ul`
    margin-top: 150px;

    padding: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    list-style: none;

    li {
        display: flex;
        flex-direction: column;

        border-radius: 4px;
        padding: 20px;

        img {
            align-self: center;
            max-width: 250px;
        }

        > h1 {
            font-size: 26px;
            color: #ff8c00;
            line-height: 20px;
            align-self: center;
            margin-bottom: 10px;
        }
    }
`;