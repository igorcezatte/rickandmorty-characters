import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.div`
    background: #312e38;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 12px;
    width: 100%;

    h1 {
        margin-top: 12px;
    }
`;

export const Form = styled.form`
    align-self: center;
`;

export const Input = styled.input`
    background: #121214;
    border-radius: 10px;
    padding: 0 16px;
    height: 40px;
    border: 2px solid #232129;
    color: #fff;
`;

export const Button = styled.button`
    background: #ff9000;
    margin-left: 20px;
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

export const RButton = styled.button`
    background: #ff9000;
    margin-top: 15px;
    height: 44px;
    border-radius: 10px;
    border: 0;
    outline: 0;
    padding: 0 16px;
    color: #312e38;
    font-weight: 500;
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
        background: ${shade(0.2, '#ff9000')}
    }
`;

export const CharacterList = styled.ul`
    padding: 1vh;
    display: flex;

    flex-flow: row wrap;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 0;

    li {
        border-radius: 10px;
        background: #312e38;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin: 0.5vh;
        padding: 0.4vh;

        cursor: pointer;

        border: 1px solid;
        border-color: #312e38;
     
        :hover {
            border-color: #fff;
            img {
                
            }
        }

        img {
            border-radius: 10px;
            max-height: 21vh;
            
        }

        > h1 {
            font-size: 2vh;
            color: #ff8c00;
            align-self: center;
            margin-bottom: 5px;
        }

        @media (max-width: 768px) {
        max-width: 20vh;
        max-height: 25vh;

            img {
                align-self: center;
                max-height: 18vh;
            }
        }
    }
`;

export const Paginate = styled.div`
    text-align: center;
    margin: 10px 0 30px 0;

    button {
        height: 5vh;
    }
`;