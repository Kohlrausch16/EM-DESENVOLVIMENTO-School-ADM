import style from 'styled-components';

export const ButtonIcon = style.i`
    color: white;
    font-size: 190%;
`;

export const ButtonBody = style.button`
    display: flex;
    height: 37px;
    background-color:rgba(74, 145, 226, 0.75);
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 7%;
    width: 38px;

    &:hover{
        background-color: #4A90E2;
        cursor: pointer;
    }
`;

