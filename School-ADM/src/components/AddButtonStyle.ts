import style from 'styled-components';


export const ButtonContainer = style.div`
    display: flex;
    width: 85%;
    height: 7%;
    align-items: center;
    padding: 1% 0%;
`;

export const ButtonBody = style.button`
    display: flex;
    height: 80%;
    margin-right: 2.5%;
    margin-left: auto;
    background-color:rgba(45, 197, 124, 0.75);
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 7%;
    width: 4.8%;

    &:hover{
        background-color:#2dc57c;
        cursor: pointer;
    }
`;

export const ButtonIcon = style.i`
    color: white;
    font-size: 250%;
`;