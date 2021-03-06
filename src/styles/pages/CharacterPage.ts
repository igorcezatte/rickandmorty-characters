import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    text-align: center;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;


    a {
        text-decoration: none;
        font-size: 30px;

        :hover {
            text-decoration: none;
        }
    }
`;

export const CharacterInfo = styled.div`
    margin: 1vh;
    border-radius: 10px;
    border-color: #808080;
    border: 1px solid;
    background: #312e38;
    padding: 20px 0;
    max-width: 500px;
    
    h1 {
        font-size: 28px;
        color: #ff9000;
    }

    p {
        font-size: 20px;
        color: #ff9000;
    }

    img {
        border-radius: 10px;
        margin: 8px;
    }
`;

export const Button = styled.button`
    background: #ff9000;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 44px;
    border-radius: 10px;
    border: 0;
    outline: 0;
    padding: 0 16px;
    color: #312e38;
    font-weight: 500;
    cursor: pointer;

    transition: background-color 0.2s;

    &:hover {
        background: ${shade(0.2, '#ff9000')}
    }
`;