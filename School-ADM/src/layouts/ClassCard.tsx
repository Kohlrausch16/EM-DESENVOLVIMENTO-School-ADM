import { CardContainer, LenguageFlag, ClassName, CourseLevel, CardRow, Information, TextContent, ItemIcon, Link, ItemDescription, CardInfo } from "./ClassCardStyle";
import deutschland from '../assets/images/deutschland_flagge.png';
import frankreich from '../assets/images/frankreich_flagge.png';
import usa from '../assets/images/usa_flagge.png';
import spanien from '../assets/images/spanien_flagge.png';
import italien from '../assets/images/italien_flagge.png';

function ClassCard(){

    const flags = [deutschland, frankreich, usa, spanien, italien];

    return(
        <>
            <Link href={`/class`}>
                <CardContainer>
                    <LenguageFlag src={flags[0]} />
                    <CardRow>
                        <CardInfo>
                            <ClassName> Alemão </ClassName>
                            <CourseLevel> B1.1 </CourseLevel>
                        </CardInfo>

                        <TextContent>
                            <Information>
                                <ItemIcon className= 'fas fa-calendar-alt' /> 
                                <ItemDescription> teste </ItemDescription>

                                <ItemIcon className='fas fa-calendar-alt'/>
                                <ItemDescription> teste </ItemDescription>

                                <ItemIcon className='fas fa-calendar-alt'/>                              
                                <ItemDescription> teste </ItemDescription>

                                <ItemIcon className='fas fa-calendar-alt'/>                             
                                <ItemDescription> teste </ItemDescription>
                            </Information>
                        </TextContent>
                    </CardRow>
                </CardContainer>
            </Link>
        </>

    );
}

export default ClassCard;