import { useParams } from "react-router-dom";
import LateralMenu from "../layouts/LateralMenu";
import { ClassContainer, PriceColumnContainer, PersonalDataContainer, FinalPriceFee, FeeQuantity, GeneralPriceFee, PriceContainerSection, PriceRowContainer, ClassInfoSelection, ClassInfoSelectionOption, ClassInfoTime, ClassInfoNumber, ClassContainerSection, ClassInfoContainer, ClassContainerSectionTitle, ClassInfoInnerContainer, ClassFlag, ClassLevelSection, ContentArea, ContentContainer, HeaderContainer, NameContainer, ActiveSwitch, PageBody, IconContainer, ClassName } from "./classInfoStyle";
import UploadButton from "../components/UploadButton";
import FolderButton from "../components/FolderButton";
import SaveButton from "../components/SaveButton";
import DeleteButton from "../components/DeleteButton";

import TeacherCard from "../layouts/TeacherCard";

function ClassInfo(){

    const {id} = useParams();

    const foundClass = classContent.find((item) =>{
        return item.id === id;
    });

    const foundTeacher = teacherTest.find((item) =>{
        return item.id === foundClass?.teacher; 
    });

    console.log(foundTeacher);

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
                            <ClassInfoInnerContainer>
                                <ClassContainerSectionTitle> Dia </ClassContainerSectionTitle>
                                    <ClassInfoSelection required>
                                    {weekDays.map((item) => item === foundClass?.classInfo[0].content ? (<ClassInfoSelectionOption selected>
                                        {foundClass?.classInfo[0].content}
                                    </ClassInfoSelectionOption>) : (<ClassInfoSelectionOption>
                                        {item}
                                    </ClassInfoSelectionOption>))}
                                </ClassInfoSelection>
                            </ClassInfoInnerContainer>

                            <ClassInfoInnerContainer>
                                <ClassContainerSectionTitle> Horário </ClassContainerSectionTitle>
                                <ClassInfoTime type="time" value={`${foundClass?.classInfo[1].content}`}/>
                            </ClassInfoInnerContainer>

                            <ClassInfoInnerContainer>    
                                <ClassContainerSectionTitle> Sala </ClassContainerSectionTitle>
                                <ClassInfoNumber> {`${foundClass?.classInfo[3].content}`} </ClassInfoNumber>
                            </ClassInfoInnerContainer>
                        </ClassInfoContainer>

                        <PriceColumnContainer>
                            <PriceRowContainer>
                                <PriceContainerSection>
                                    <ClassContainerSectionTitle> Mensalidade </ClassContainerSectionTitle>
                                    <GeneralPriceFee type='text' defaultValue={new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',}).format(foundClass?.monthlyFee)} />
                                </PriceContainerSection>

                                <PriceContainerSection>
                                    <ClassContainerSectionTitle> Material </ClassContainerSectionTitle>
                                    <GeneralPriceFee type='text' defaultValue={new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',}).format(foundClass?.materialFee)} />
                                </PriceContainerSection>

                                <PriceContainerSection>
                                    <ClassContainerSectionTitle> N° parcelas </ClassContainerSectionTitle>
                                    <FeeQuantity type="number" defaultValue="2" />
                                </PriceContainerSection>

                            </PriceRowContainer>

                            <ClassContainerSectionTitle> Total:  </ClassContainerSectionTitle>
                            <FinalPriceFee>{new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',}).format((foundClass?.materialFee) * (foundClass?.materialFee) )}
                            </FinalPriceFee>
                        </PriceColumnContainer>         
                    </HeaderContainer>

                    <IconContainer>
                            <UploadButton />
                            <FolderButton />
                            <SaveButton />
                            <DeleteButton />
                        </IconContainer>

                        <PersonalDataContainer>
                            <TeacherCard teacher={foundTeacher} />

                        </PersonalDataContainer>
                    
                </PageBody>
            </ContentContainer>
        </ContentArea> 
        </>
    );
}

export default ClassInfo;
