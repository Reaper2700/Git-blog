import { useNavigate } from "react-router-dom";
import { useGithub } from "../../../../context/provideGit";
import { BoxPublications, Publications, PublicationsBox, SearchBar } from "./styles";


export function PublicationsArea() {
    const { post } = useGithub();
    const navigate = useNavigate();
    
    return (
        <BoxPublications>
            <div className="Header">
                <h3>Publicações</h3>
                <span>{post.length} publicações</span>
            </div>
            <SearchBar>
                <input placeholder="Buscar conteúdo" />
            </SearchBar>
            <PublicationsBox>
                {post.map((post) => (
                    <Publications 
                    key={post.id}
                    onClick={() => navigate(`/publication/${post.id}`)}
                    style={{cursor: "pointer"}}
                    >
                        <div className="HeaderPublication">
                            <h2>{post.title}</h2>
                            <span>{post.created_at}</span>
                        </div>
                        <div className="TextPublication">
                            <span>{post.body}</span>
                        </div>
                    </Publications>
                ))}

            </PublicationsBox>
        </BoxPublications>
    )
}