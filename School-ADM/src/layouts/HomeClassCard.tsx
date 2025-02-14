import { ClassCard, LenguageFlag, ClassName, CourseLevel, CardRow, Information, TextContent, ItemIcon, Link, ItemDescription, CardInfo } from "./HomeClassCardStyle";

type homeCardContent = {
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

type HomeCardContentProps = {
    content: homeCardContent;
}

function HomeClassCard({content}: HomeCardContentProps){

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

