import { CardContainer, LenguageFlag, ClassName, ItemContainer, CourseLevel, CardRow, TextContent, ItemIcon, Link, ItemDescription, ButtonContainer } from "./ClassCardStyle";
import deutschland from '../assets/images/deutschland_flagge.png';
import frankreich from '../assets/images/frankreich_flagge.png';
import usa from '../assets/images/usa_flagge.png';
import spanien from '../assets/images/spanien_flagge.png';
import italien from '../assets/images/italien_flagge.png';
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";

type classCardContent = {
    id: string;
    lenguageFlag: number;
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

    const flags = [deutschland, frankreich, usa, spanien, italien];

    return(
        <>
            <Link href={`/class/${content.id}`}>
                <CardContainer>
                    <LenguageFlag src={flags[content.lenguageFlag]} />
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
