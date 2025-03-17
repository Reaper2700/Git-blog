import { Header } from "../GlobalComponents/Header";
import { BodyPub } from "./components/bodyPublication";
import { HeaderPublication } from "./components/headerPublication";


export function PublicationPage(){
    return(
        <div>
            <Header/>
            <HeaderPublication/>
            <BodyPub/>
        </div>
    )
}