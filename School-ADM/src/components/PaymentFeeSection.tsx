import { CourseFee, FeeValue, CourseTotalFee } from "./PaymentFeeSectionStyle";
import { classContent } from "../axios";


function PaymentFeeSection({fees}: string[]){

    let monthlyFees: number[] = [];
    let materialFees: number[] = [];

    for(let i = 0; i < fees.lenght; i++){
        let foundClass = classContent.find((item) => {
            return item.id === fees[i].id
        });

        if(foundClass){
            monthlyFees.push(foundClass?.monthlyFee);
            materialFees.push(foundClass?.materialFee);
        }
    
    }

    console.log(monthlyFees, materialFees);

    const totalMonthlyFee = monthlyFees.reduce((sum, item) => {
        sum = sum + item;
    }, 0);


    return(
    <>
        <CourseFee>
            <div> Total mensalidades: </div>
            <FeeValue> {totalMonthlyFee} </FeeValue>
        </CourseFee>
    
        <CourseFee>
            <div> Total materiais: </div>
            <FeeValue> R$55555 </FeeValue>
        </CourseFee>
        
        <CourseTotalFee>
            <div> Total: </div>
            <FeeValue> {totalMonthlyFee} </FeeValue>
        </CourseTotalFee>
    </>
    );

}

export default PaymentFeeSection;