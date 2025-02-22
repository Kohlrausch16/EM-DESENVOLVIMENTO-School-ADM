import { CardContainer, LenguageFlag, ClassName, ItemContainer, CourseLevel, CardRow, TextContent, ItemIcon, Link, ItemDescription, ButtonContainer } from "./ClassCardStyle";

import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";

type classCardContent = {
    id: string;
    lenguageFlag: string;
    className: string;
    level: string;
    classInfo: [
        {
            icon: string,
            content: string;
        }
    ];
    active: true;
}   

type ClassCardContentProps = {
    content: classCardContent;
}

function ClassCard({content}: ClassCardContentProps){

    return(
        <>
            <Link href={`/class/${content.id}`}>
                <CardContainer>
                    <LenguageFlag src={content.lenguageFlag} />
                    <CardRow>
                            <ClassName> {content.className} </ClassName>

                        <TextContent>
                            {content.classInfo.map((item) =>
                                <ItemContainer>
                                <ItemIcon className={item.icon} /> 
                                <ItemDescription> {item.content} </ItemDescription>
                            </ItemContainer>
                            )}
                        </TextContent>
                    </CardRow>

                    <ButtonContainer> 
                        <EditButton />
                        <DeleteButton />
                    </ButtonContainer>
                    
                    <CourseLevel> {content.level} </CourseLevel>
                </CardContainer>
            </Link>  
        </>

    );
}

export default ClassCard;
