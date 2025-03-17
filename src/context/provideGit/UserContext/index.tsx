import { createContext } from "react";

export const GithubContext = createContext({
    user: {
      login: "",
      name: "",
      bio: "",
      html_url: "",
      company: "",
      followers: 0,
    },
    post: {
      id: "",
      title: "",
      body: "",
      html_url: "",
      created_at: "",
    }
  });