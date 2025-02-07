import { ClassCard, LenguageFlag, ClassName, CourseLevel, CardInfo, Information, ItemIcon, ItemDescription } from "./HomeClassCardStyle";
import deutschland from '../assets/images/deutschland_flagge.png';
import frankreich from '../assets/images/frankreich_flagge.png';
import usa from '../assets/images/usa_flagge.png';
import spanien from '../assets/images/spanien_flagge.png';
import italien from '../assets/images/italien_flagge.png';


function HomeClassCard(){

    return(
        <>

            <ClassCard>
                <LenguageFlag src={deutschland} />
                <ClassName> Alemão - B1.2</ClassName>
                <CourseLevel> B1.2 </CourseLevel>
                <CardInfo>
                    <Information>
                        <ItemIcon> efvefv</ItemIcon>
                        <ItemDescription> vfvwvwf</ItemDescription>
                    </Information>

                    <Information>
                        <ItemIcon> efvefv</ItemIcon>
                        <ItemDescription> vfvwvwf</ItemDescription>
                    </Information>

                    <Information>
                        <ItemIcon> efvefv</ItemIcon>
                        <ItemDescription> vfvwvwf</ItemDescription>
                    </Information>

                    <Information>
                        <ItemIcon> efvefv</ItemIcon>
                        <ItemDescription> vfvwvwf</ItemDescription>
                    </Information>
                </CardInfo>

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

