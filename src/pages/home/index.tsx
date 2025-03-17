import { Header } from "../GlobalComponents/Header";
import { PublicationsArea } from "./components/Publications";
import { User } from "./components/user";


export function HomePage() {
    return (
        <div>
            <Header />
            <User />
            <PublicationsArea />
        </div>
    )
}