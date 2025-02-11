import style from 'styled-components';

export const ButtonBody = style.button`
    display: flex;
    height: 37px;
    background-color:rgba(223, 74, 74, 0.75);
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 7%;
    width: 38px;

    &:hover{
        background-color: #DF4A4A;
        cursor: pointer;
    }
`;

export const ButtonIcon = style.i`
    color: white;
    font-size: 200%;
`;