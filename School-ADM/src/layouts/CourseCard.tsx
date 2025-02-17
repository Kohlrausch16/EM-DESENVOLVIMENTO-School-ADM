import { ClassCard, LenguageFlag, ClassName, CourseLevel, PriceContainer, CardRow, FeeSection, Information, TextContent, ItemIcon, Link, ItemDescription, CardInfo } from "./CourseCardStyle";
import { classContent } from "../axios";

type classContent = {
    id: string;
        lenguageFlag: string;
        className: string;
        level: string;
        classInfo: [
            {
                icon: string;
                content: string;
            }
        ],
        active: boolean;
        monthlyFee: number;
        materialFee: number;
}

type Classes = {
    content: string;
}

function CourseCard({content}: Classes){
    console.log(content);

    const foundClass = classContent.find((item) => item.id === content);


    return(
        <>
            <Link href={`/class/${foundClass?.id}`}>
                <ClassCard>
                    <LenguageFlag src={foundClass?.lenguageFlag} />
                    <CardRow>
                        <CardInfo>
                            <ClassName> {foundClass?.className}</ClassName>
                            <CourseLevel> {foundClass?.level} </CourseLevel>
                        </CardInfo>

                        <TextContent>
                            {foundClass.classInfo.map((item) => 
                                <Information>
                                    <ItemIcon className={item.icon} />
                                    
                                    <ItemDescription> {item.content}</ItemDescription>
                                </Information>
                            )}
                        </TextContent>
                    </CardRow>
                    <PriceContainer>

                        <FeeSection>
                            <div> Mensalidade</div>
                            <div> {foundClass?.monthlyFee} </div>
                        </FeeSection>

                        <FeeSection>
                            <div> Materiais </div>
                            <div> {foundClass?.materialFee}  </div>
                        </FeeSection>

                        <FeeSection>
                            <div> Total </div>
                            <div> {foundClass?.monthlyFee + foundClass?.materialFee}  </div>
                        </FeeSection>

                    </PriceContainer>
                </ClassCard>
            </Link>
        </>

    );
}

export default CourseCard;

/*

                
                
                


*/

