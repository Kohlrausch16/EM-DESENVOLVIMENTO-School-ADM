import { StudentPicture, Line } from "./PictureSectionStyle";

type PictureProps = {
    picture: string;
}

function PictureSection({picture}: PictureProps){

    console.log(picture);
    
    return(
        <>
            <StudentPicture src={picture} />
            <Line />
        </>

    );
}

export default PictureSection;