import { useParams } from "react-router-dom";
import { classContent } from "../axios";
import LateralMenu from "../layouts/LateralMenu";
import { ClassContainer, ClassContainerSection, ClassContainerSectionTitle, ClassFlag, ClassLevelSection, ContentArea, ContentContainer, HeaderContainer, NameContainer, ActiveSwitch, PageBody, IconContainer, ClassName } from "./classInfoStyle";
import UploadButton from "../components/UploadButton";
import FolderButton from "../components/FolderButton";
import SaveButton from "../components/SaveButton";
import DeleteButton from "../components/DeleteButton";

function ClassInfo(){

    const {id} = useParams();

    const foundClass = classContent.find((item) =>{
        return item.id === id;
    });

    return(
        <>
        <ContentArea>
            <LateralMenu />
            <ContentContainer>
                <PageBody>
                    <HeaderContainer>
                        <NameContainer>
                            <ClassName type='text' defaultValue={foundClass?.className}/>
                            <ActiveSwitch type='radio' />
                        </NameContainer>


                        <ClassContainer>
                            <ClassContainerSection>
                                <ClassContainerSectionTitle> Idioma </ClassContainerSectionTitle>
                                <ClassFlag src={foundClass?.roundFlag} />
                            </ClassContainerSection>

                            <ClassContainerSection>
                                <ClassContainerSectionTitle> Nível </ClassContainerSectionTitle>
                                        <ClassLevelSection> {foundClass?.level} </ClassLevelSection>
                            </ClassContainerSection>
                        </ClassContainer>






                    </HeaderContainer>
                    <IconContainer>
                        <UploadButton />
                        <FolderButton />
                        <SaveButton />
                        <DeleteButton />
                    </IconContainer>
                </PageBody>
            </ContentContainer>
        </ContentArea> 
        </>
    );
}

export default ClassInfo;