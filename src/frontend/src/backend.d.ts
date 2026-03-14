import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface SocialMediaLink {
    url: string;
    platform: string;
}
export interface Profile {
    bio: string;
    title: string;
    background: string;
    projects: Array<Project>;
    owner: Principal;
    name: string;
    githubUrl: string;
    socialMediaLinks: Array<SocialMediaLink>;
    avatarUrl: string;
}
export interface Project {
    title: string;
    description: string;
    projectUrl: string;
    techStack: Array<string>;
}
export interface backendInterface {
    getAllPortfolios(): Promise<Array<Profile>>;
    getPortfolio(user: Principal): Promise<Profile>;
    setPortfolio(name: string, title: string, bio: string, avatarUrl: string, background: string, githubUrl: string, projects: Array<Project>, links: Array<SocialMediaLink>): Promise<void>;
}
