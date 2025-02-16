import { CourseFee, FeeValue, CourseTotalFee } from "./PaymentFeeSectionStyle";

function PaymentFeeSection(){
    return(
    <>
        <CourseFee>
            <div> Total Mensalidades: </div>
            <FeeValue> R$55555 </FeeValue>
        </CourseFee>
    
        <CourseFee>
            <div> Total Mensalidades: </div>
            <FeeValue> R$55555 </FeeValue>
        </CourseFee>
        
        <CourseTotalFee>
            <div> Total Mensalidades: </div>
            <FeeValue> R$55555 </FeeValue>
        </CourseTotalFee>
    </>
    );

}

export default PaymentFeeSection;