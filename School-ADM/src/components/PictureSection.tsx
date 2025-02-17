import { StudentPicture, Line } from "./PictureSectionStyle";

type PictureProps = {
    picture: string;
}

function PictureSection({picture}: PictureProps){
    
    return(
        <>
            <StudentPicture src={picture} />
            <Line />
        </>

    );
}

export default PictureSection;