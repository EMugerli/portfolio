import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {About} from "@/components/about";
import {WorkExperience} from "@/components/work-experience";
import {Projects} from "@/components/projects";

export default function Home() {

    return (
        <>
            <Header/>
            <main>
                <About/>
                <WorkExperience/>
                <Projects/>

            </main>
            <Footer/>
        </>
    );
}