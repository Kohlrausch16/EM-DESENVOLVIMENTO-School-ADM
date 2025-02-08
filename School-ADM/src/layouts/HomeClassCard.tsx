import { ClassCard, LenguageFlag, ClassName, CourseLevel, CardRow, Information, TextContent, ItemIcon, Link, ItemDescription, CardInfo } from "./HomeClassCardStyle";
import deutschland from '../assets/images/deutschland_flagge.png';
import frankreich from '../assets/images/frankreich_flagge.png';
import usa from '../assets/images/usa_flagge.png';
import spanien from '../assets/images/spanien_flagge.png';
import italien from '../assets/images/italien_flagge.png';

type homeCardContent = {
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

type HomeCardContentProps = {
    content: homeCardContent;
}

function HomeClassCard({content}: HomeCardContentProps){

    const flags = [deutschland, frankreich, usa, spanien, italien];

    return(
        <>
            <Link href={`/login/${content.id}`}>
                <ClassCard>
                    <LenguageFlag src={flags[content.lenguageFlag]} />
                    <CardRow>
                        <CardInfo>
                            <ClassName> {content.className}</ClassName>
                            <CourseLevel> {content.level} </CourseLevel>
                        </CardInfo>

                        <TextContent>
                            {content.classInfo.map((item) => 
                                <Information>
                                    <ItemIcon className={item.icon} />
                                    
                                    <ItemDescription> {item.content}</ItemDescription>
                                </Information>
                            )}
                        </TextContent>
                    </CardRow>
                </ClassCard>
            </Link>
        </>

    );
}

export default HomeClassCard;

/*

                
                
                


*/

