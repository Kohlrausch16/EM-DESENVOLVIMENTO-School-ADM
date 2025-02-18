import { CourseFee, FeeValue, CourseTotalFee } from "./PaymentFeeSectionStyle";
import { classContent } from "../axios";


function PaymentFeeSection({fees}: string[]){

    const classes = [];

    for(let i = 0; i < fees.length; i++){
        const foundClass = classContent.find((item) => {
            return item.id === fees[i].id;
        });
        classes.push(foundClass);
    }

    const totalMonthlyFee = classes.reduce((sum, item) => sum + (item?.monthlyFee || 0), 0);
    const totalMaterialFee = classes.reduce((sum, item) => sum + (item?.materialFee || 0), 0);
    const totalFee = parseFloat(totalMonthlyFee) + parseFloat(totalMaterialFee);

    
    return(
    <>
        <CourseFee>
            <div> Total mensalidades: </div>
            <FeeValue> 
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',}).format(totalMonthlyFee)} 
            </FeeValue>
        </CourseFee>
    
        <CourseFee>
            <div> Total materiais: </div>
            <FeeValue> 
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',}).format(totalMaterialFee)} 
            
            </FeeValue>
        </CourseFee>
        
        <CourseTotalFee>
            <div> Total: </div>
            <FeeValue>   
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',}).format(totalFee)}  
            </FeeValue>
        </CourseTotalFee>
    </>
    );

}

export default PaymentFeeSection;