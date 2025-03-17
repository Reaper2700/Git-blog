import { BoxUser, CardUser, Icones, ProfileUser } from "./styles";
import Link from "../../../../assets/Vector.png"
import { Building, GithubLogo, Users } from "@phosphor-icons/react";

import { useGithub } from "../../../../context/provideGit";

export function User() {
    const { user } = useGithub()

    if (!user) return null;

    return (
        <BoxUser>
            <CardUser>
                <img src={user.avatar_url} />
                <div>
                    <ProfileUser>
                        <div className="Name">
                            <h2>{user.name}</h2>
                            <div>
                                <a href={user.html_url}>GITHUB</a>
                                <img src={Link} />
                            </div>
                        </div>
                        <div className="Bio">
                            <span>{user.bio}</span>
                        </div>
                        <Icones>
                            <div className="icone">
                                <GithubLogo size={18} weight="fill" color="#0B1B2B" style={{ backgroundColor: "#3A536B", borderRadius: "45%" }} />
                                <span>{user.login}</span>
                            </div>
                            <div className="icone">
                                <Building size={18} weight="fill" color="#3A536B" />
                                <span>{user.company}</span>
                            </div>
                            <div className="icone">
                                <Users size={18} weight="fill" color="#3A536B" />
                                <span>{user.followers} seguidores</span>
                            </div>
                        </Icones>
                    </ProfileUser>
                </div>
            </CardUser>
        </BoxUser>
    )
}