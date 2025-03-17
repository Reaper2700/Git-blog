import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface User {
    avatar_url: string;
    name: string;
    bio: string;
    html_url: string;
    login: string;
    company: string;
    followers: string;
}

interface Post {
    id: number;
    title: string;
    body: string;
    html_url: string;
    created_at: string;
}

interface GithubContextType {
    user: User | null;  //interface definido por outo interface para juntar dois dados compostos em um só podendo ser vazio e retornar nada
    post: Post[];
}

export const GithubContext = createContext<GithubContextType | undefined>(undefined);

export function GithubProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [post, setPost] = useState<Post[]>([]);

    //const username = "Reaper2700";
    //const repo = "Api-de-transacoes";
    const username = "rocketseat-education";
    const repo = "reactjs-github-blog-challenge";

        const formatRelativeTime = (date: string | Date) => {
            const parsedDate = typeof date === "string" ? new Date(date) : date;
            return `Há ${formatDistanceToNow(parsedDate, { locale: ptBR })}`;
          };
          
    useEffect(() => {
        async function fetchData(){
           try{
            const userResponse = await axios.get(`https://api.github.com/users/${username}`)
            setUser({
                avatar_url: userResponse.data.avatar_url,
                name: userResponse.data.name,
                bio: userResponse.data.bio,
                html_url: userResponse.data.html_url,
                login: userResponse.data.login,
                company: userResponse.data.company,
                followers: userResponse.data.followers,
            });

            const postResponse = await axios.get(`https://api.github.com/repos/${username}/${repo}/issues`)
            const formattedPosts = postResponse.data.map((issue: any) => ({
                id: issue.id,
                title: issue.title,
                body: issue.body,
                html_url: issue.html_url,
                created_at: formatRelativeTime(issue.created_at)
            }));
            setPost(formattedPosts);
    
        }catch (error) {
            console.error("Erro ao buscar dados do GitHub:", error);
           } 
        }

        fetchData();
    }, []);
        


    return (
        <GithubContext.Provider value={{ user, post }}>
            {children}
        </GithubContext.Provider >
    )
}


export function useGithub() {
    const context = useContext(GithubContext);
    if (!context) {
        throw new Error("useGithub deve ser usado dentro de um GithubProvider");
    }
    return context
}

