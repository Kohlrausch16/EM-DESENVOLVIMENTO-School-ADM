import style from 'styled-components';

export const ContentContainer = style.a`
    display: flex;
    width: 89.5%;
    height: 5%;
    border: solid 2px  #DEDEDE;
    border-radius: 15px;
    padding: 5%;
    gap: 10px;
    align-items: center;
    transition: transform 0.2s;
    text-decoration: none;

    &:hover{
        cursor: pointer;
        background-color: #FAF5F5;
        transform: translate(0, -5%);
    }
`;

export const StudentPic = style.img`
    height: 200%;
    border-radius: 50%;
    border: solid 2px  #DEDEDE;
`;

export const InfoContainer = style.div`
    display: flex;
    width: 60%;
    height: 220%;
    flex-direction: column;
    justify-content: center;
`;

export const StudentName = style.div`
    display: flex;
    height: 65%;    
    font-size: 130%;
    font-family: verdana;
    color: #333333;
`;

export const LenguageIconContainer = style.div`
    display: flex;
    flex-direction: row;
    align-items: end;
    height: 40%;
    width: 100%;
    gap: 2%;
`;

export const CourseIcon = style.img`
    height: 100%;
    width:  5.65%;
`;

export const ButtonSection = style.div`
    display: flex;
    width: 40%;
    justify-content: end;
    gap: 6%;    
`;