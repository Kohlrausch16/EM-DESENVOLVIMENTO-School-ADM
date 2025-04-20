import style from 'styled-components';

export const PageBody = style.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 85%;
    padding: 1% 0% 0% 0%;
    overflow: scroll;
`;

export const ButtonContainer = style.div`
    display: flex;
    width: 85%;
    height: 7%;
    align-items: center;
    padding: 1% 0%;
    padding-right: 2.5%;
    justify-content: end;
`;