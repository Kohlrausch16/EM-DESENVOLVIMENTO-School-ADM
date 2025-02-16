import style from "styled-components";

export const StudentPicture = style.img`
    width: 16.5%;
    height: 19%;
    border-radius: 50%;
    border: solid 2px  #DEDEDE;
    
    &:hover{
        cursor: pointer;
    }
`;

export const Line = style.hr`
    display: flex;
    width: 83.5%;
    height: 10%;
    margin: -16.5% 0% 0% 17%;
    background-color: none;
    border: none;
    border-bottom: solid 1px  #DEDEDE;
`;
