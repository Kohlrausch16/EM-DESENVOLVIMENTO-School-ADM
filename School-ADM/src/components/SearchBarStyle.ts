import style from 'styled-components';

export const ContentContainer = style.div`
    display: flex;
    width: 45%;
    height: 6%;
    border: solid 2px #DEDEDE;
    border-radius: 50px;
    overflow: hidden;
    transition: transform 0.2s;
    cursor: pointer;
    
    &:hover {
        background-color: #FAF5F5;
    }

`;
    
export const SearchField = style.input`
    border: none;
    flex: 1;
    width: 95%;
    font-size: 15px;
    margin: 0% 4%;
    outline: none;
    border: none;
    box-shadow: none;
    background: none
`;

export const IconContainer = style.div`
    display: flex;
    width: 12%;
    height: 100%;
    border-left: solid 2px  #DEDEDE;
    justify-content: center;

    &:hover {
        background-color: #b1aeae;
    }

`;

export const SearchIcon = style.i`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 120%;
    color: #DEDEDE;
`;