import type { Principal } from '@icp-sdk/core/principal';
import type { ActorMethod } from '@icp-sdk/core/agent';
import type { IDL } from '@icp-sdk/core/candid';

export interface Profile {
  'bio' : string,
  'title' : string,
  'background' : string,
  'projects' : Array<Project>,
  'owner' : Principal,
  'name' : string,
  'githubUrl' : string,
  'socialMediaLinks' : Array<SocialMediaLink>,
  'avatarUrl' : string,
}
export interface Project {
  'title' : string,
  'description' : string,
  'projectUrl' : string,
  'techStack' : Array<string>,
}
export interface SocialMediaLink { 'url' : string, 'platform' : string }
export interface _SERVICE {
  'getAllPortfolios' : ActorMethod<[], Array<Profile>>,
  'getPortfolio' : ActorMethod<[Principal], [] | [Profile]>,
  'setPortfolio' : ActorMethod<
    [
      string,
      string,
      string,
      string,
      string,
      string,
      Array<Project>,
      Array<SocialMediaLink>,
    ],
    undefined
  >,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
