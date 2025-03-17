import { useParams } from "react-router-dom";
import { useGithub } from "../../../../context/provideGit";
import { BodyPublication, Code, TextPublication } from "./styles";

export function BodyPub() {
    const { post } = useGithub();
    const { id} = useParams();

    if (!post) return null;
    
    const selectedPost = post.find((p) => String(p.id) === id);

    if (!selectedPost) {
        return <h2>Post não encontrado</h2>;
    }
    return (
        <div>
            <BodyPublication>
                <TextPublication>
                    <span>
                        {selectedPost.body}
                    </span>
                </TextPublication>
                <Code>
                    <span>
                        let foo = 42;   // foo is now a number
                        foo = ‘bar’;    // foo is now a string
                        foo = true;     // foo is now a boolean
                    </span>
                </Code>
            </BodyPublication>
        </div>
    )
}