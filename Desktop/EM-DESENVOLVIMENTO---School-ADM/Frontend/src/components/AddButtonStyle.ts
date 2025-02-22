import style from 'styled-components';

export const ButtonBody = style.button`
    display: flex;
    height: 37px;
    background-color:rgba(45, 197, 124, 0.75);
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 7%;
    width: 38px;

    &:hover{
        background-color:#2dc57c;
        cursor: pointer;
    }
`;

export const ButtonIcon = style.i`
    color: white;
    font-size: 250%;
`;