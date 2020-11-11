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

export const Header = styled.div`
    text-align: center;
`;

export const Form = styled.form`
    align-self: center;
    margin-top: 40px;
`;

export const Input = styled.input`
    background: #232129;
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
    padding: 0 16px;
    color: #312e38;
    font-weight: 500;
    transition: background-color 0.2s;
    cursor: pointer;
`;