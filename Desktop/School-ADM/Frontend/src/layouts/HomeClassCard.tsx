import { ClassCard, LenguageFlag, ClassName, CourseLevel, CardRow, Information, TextContent, ItemIcon, Link, ItemDescription, CardInfo } from "./HomeClassCardStyle";
import { ClassData } from "../models/ClassGroup";

type HomeCardContentProps = {
    classContent: ClassData;
}

function HomeClassCard({classContent}: HomeCardContentProps){

    return(
        <>
            <Link href={`/class/${content.id}`}>
                <ClassCard>
                    <LenguageFlag src={content.lenguageFlag} />
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

