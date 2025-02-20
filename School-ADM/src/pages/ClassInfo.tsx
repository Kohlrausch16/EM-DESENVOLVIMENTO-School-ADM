import { useParams } from "react-router-dom";
import { classContent } from "../axios";
import LateralMenu from "../layouts/LateralMenu";
import { ClassContainer, ClassInfoSelection, ClassInfoSelectionOption, ClassInfoTime, ClassInfoNumber, ClassContainerSection, ClassInfoContainer, ClassContainerSectionTitle, ClassFlag, ClassLevelSection, ContentArea, ContentContainer, HeaderContainer, NameContainer, ActiveSwitch, PageBody, IconContainer, ClassName } from "./classInfoStyle";
import UploadButton from "../components/UploadButton";
import FolderButton from "../components/FolderButton";
import SaveButton from "../components/SaveButton";
import DeleteButton from "../components/DeleteButton";

function ClassInfo(){

    const {id} = useParams();

    const foundClass = classContent.find((item) =>{
        return item.id === id;
    });

    const weekDays = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado' ];

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


                        <ClassInfoContainer>
                            <ClassContainerSectionTitle> Dia </ClassContainerSectionTitle>

                            <ClassInfoSelection required>

                                {weekDays.map((item) => item === foundClass?.classInfo[0].content ? (<ClassInfoSelectionOption selected>
                                    {foundClass?.classInfo[0].content}
                                </ClassInfoSelectionOption>) : (<ClassInfoSelectionOption>
                                    {item}
                                </ClassInfoSelectionOption>))}

                            </ClassInfoSelection>

                            <ClassContainerSectionTitle> Horário </ClassContainerSectionTitle>
                            <ClassInfoTime type="time"/>

                            <ClassContainerSectionTitle> Sala </ClassContainerSectionTitle>
                            <ClassInfoNumber type="number" />
                        </ClassInfoContainer>

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