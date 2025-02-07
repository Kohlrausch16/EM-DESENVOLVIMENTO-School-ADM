import { ClassCard, LenguageFlag, ClassName, CourseLevel, CardInfo, Information, ItemIcon, ItemDescription } from "./HomeClassCardStyle";
import flag from '../assets/images/deutschland_flagge.png';


function HomeClassCard(){

    return(
        <>

            <ClassCard>
                <LenguageFlag src={flag} />
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
                <LenguageFlag src={flag} />
                <ClassName> Alemão - B1.2</ClassName>
                <CourseLevel> B1.2 </CourseLevel>
            </ClassCard>

            <ClassCard>
                <LenguageFlag src={flag} />
                <ClassName> Alemão - B1.2</ClassName>
                <CourseLevel> B1.2 </CourseLevel>
            </ClassCard>

            <ClassCard/>

            <ClassCard/>

        </>

    );
}

export default HomeClassCard;

