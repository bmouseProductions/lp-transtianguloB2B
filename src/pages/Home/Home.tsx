import Header from "../../components/Header/Header";
import SectionOne from "./Sections/SectionOne/SectionOne";
import SectionTwo from "./Sections/SectionTwo/SectionTwo";
import SectionThree from "./Sections/SectionThree/SectionThree";
import SectionFour from "./Sections/SectionFour/SectionFour";
import SectionFive from "./Sections/SecionFive/SectionFive";


export default function Home() {
    return (
        <>
            <Header />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
        </>
    )
}