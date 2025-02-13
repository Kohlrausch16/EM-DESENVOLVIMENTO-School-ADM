import { CardContainer, LenguageFlag, ClassName, ItemContainer, CourseLevel, CardRow, TextContent, ItemIcon, Link, ItemDescription, ButtonContainer } from "./ClassCardStyle";
import deutschland from '../assets/images/deutschland_flagge.png';
import frankreich from '../assets/images/frankreich_flagge.png';
import usa from '../assets/images/usa_flagge.png';
import spanien from '../assets/images/spanien_flagge.png';
import italien from '../assets/images/italien_flagge.png';
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";

function ClassCard(){

    const flags = [deutschland, frankreich, usa, spanien, italien];

    return(
        <>
            <Link href={`/class`}>
                <CardContainer>
                    <LenguageFlag src={flags[0]} />
                    <CardRow>
                            <ClassName> Alemão </ClassName>
                        <TextContent>
                            
                            <ItemContainer>
                                <ItemIcon className= 'fas fa-calendar-alt' /> 
                                <ItemDescription> teste </ItemDescription>
                            </ItemContainer>

                            <ItemContainer>
                                <ItemIcon className= 'fas fa-calendar-alt' /> 
                                <ItemDescription> teste </ItemDescription>
                            </ItemContainer>

                            <ItemContainer>
                                <ItemIcon className= 'fas fa-calendar-alt' /> 
                                <ItemDescription> teste </ItemDescription>
                            </ItemContainer>

                            <ItemContainer>
                                <ItemIcon className= 'fas fa-calendar-alt' /> 
                                <ItemDescription> teste </ItemDescription>
                            </ItemContainer>
                        </TextContent>
                    </CardRow>

                    <ButtonContainer> 
                        <EditButton />
                        <DeleteButton />
                    </ButtonContainer>
                    
                    <CourseLevel> B1.1 </CourseLevel>
                </CardContainer>
            </Link>
        </>

    );
}

export default ClassCard;

/*






*/