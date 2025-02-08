import { ClassCard, LenguageFlag, ClassName, CourseLevel, CardRow, Information, TextContent, ItemIcon, ItemDescription, CardInfo } from "./HomeClassCardStyle";
import deutschland from '../assets/images/deutschland_flagge.png';
import frankreich from '../assets/images/frankreich_flagge.png';
import usa from '../assets/images/usa_flagge.png';
import spanien from '../assets/images/spanien_flagge.png';
import italien from '../assets/images/italien_flagge.png';


function HomeClassCard(){

    const cardIcons = ["fab fa-instagram", "fab fa-facebook", "fab fa-whatsapp", "fab fa-envelope"];

    return(
        <>

            <ClassCard>

                <LenguageFlag src={deutschland} />

                <CardRow>

                <CardInfo>
                    <ClassName> Alemão - B1.2</ClassName>
                    <CourseLevel> B1.2 </CourseLevel>
                </CardInfo>

                <TextContent>

                    {cardIcons.map((item) => 
                        <Information>
                            <ItemIcon className={item} />
                            <ItemDescription> vfvwvwf</ItemDescription>
                        </Information>
                    )}

                </TextContent>


                </CardRow>

            </ClassCard>









            <ClassCard>
                <LenguageFlag src={frankreich} />
                <ClassName> Alemão - B1.2</ClassName>
                <CourseLevel> B1.2 </CourseLevel>
            </ClassCard>

            <ClassCard>
                <LenguageFlag src={usa} />
                <ClassName> Alemão - B1.2</ClassName>
                <CourseLevel> B1.2 </CourseLevel>
            </ClassCard>

            <ClassCard>
                <LenguageFlag src={spanien} />
                <ClassName> Alemão - B1.2</ClassName>
                <CourseLevel> B1.2 </CourseLevel>
            </ClassCard>

            <ClassCard>
                <LenguageFlag src={italien} />
                <ClassName> Alemão - B1.2</ClassName>
                <CourseLevel> B1.2 </CourseLevel>
            </ClassCard>
        </>

    );
}

export default HomeClassCard;

/*

                
                
                


*/

