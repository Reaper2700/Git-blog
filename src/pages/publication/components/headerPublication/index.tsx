import { Calendar, CaretLeft, ChatCircle, GithubLogo } from "@phosphor-icons/react";
import { HeaderPublicationContainer, Links, Post, PostName } from "./styles";
import { Icones } from "../../../home/components/user/styles";
import { useGithub } from "../../../../context/provideGit";
import Link from "../../../../assets/Vector.png"
import { useParams } from "react-router-dom";


export function HeaderPublication() {
    const { user } = useGithub();
    const { post } = useGithub();
    const { id} = useParams();

    if (!user) return null;
    if (!post) return null;
    
    const selectedPost = post.find((p) => String(p.id) === id);

    if (!selectedPost) {
        return <h2>Post não encontrado</h2>;
    }

    return (
        <Post>
            <HeaderPublicationContainer>
                <div>
                    <Links>
                        <div className="homeLink">
                            
                            <a href={'/'} > <CaretLeft size={20} color="#3294F8"/>voltar</a>
                        </div>
                        <div>
                            <a href={user.html_url}>ver no github <img src={Link} /></a> 
                        </div>
                    </Links>
                    <PostName>
                        <h1>{selectedPost.title}</h1>
                    </PostName>
                    <Icones>
                        <div className="icone">
                            <GithubLogo size={18} weight="fill" color="#0B1B2B" style={{ backgroundColor: "#3A536B", borderRadius: "45%" }} />
                            <span>{user.login}</span>
                        </div>
                        <div className="icone">
                            <Calendar size={18} weight="fill" color="#3A536B" />
                            <span>{selectedPost.created_at}</span>
                        </div>
                        <div className="icone">
                            <ChatCircle size={18} weight="fill" color="#3A536B" />
                            <span>{user.followers} seguidores</span>
                        </div>
                    </Icones>
                </div>
            </HeaderPublicationContainer>
        </Post>
    )
}