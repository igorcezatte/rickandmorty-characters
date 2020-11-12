import styled from 'styled-components';
import { shade } from 'polished';

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
    margin: 15px 0;
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
    padding: 10px;
    display: flex;

    flex-flow: row wrap;


    /* margin: 150px 50px 0 50px; */
    text-align: center;
    align-items: center;
    justify-content: center;


    li {
        margin: 20px;
        min-height: 310px;
        min-width: 270px;
        max-width: 270px;
        border-radius: 30px;
        background: #312e38;
        display: flex;
        flex-direction: column;
        padding: 20px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: 1px solid;
        border-color: #312e38;
     
        :hover {
            border-color: #fff;
            img {
                max-width: 260px;
            }
        }

        img {
            border-radius: 10px;
            align-self: center;
            max-width: 250px;
        }

        > h1 {
            font-size: 24px;
            color: #ff8c00;
            line-height: 20px;
            align-self: center;
            margin-bottom: 10px;
        }
    }
`;

export const Paginate = styled.div`
    text-align: center;
    margin: 10px 0 30px 0;
`;