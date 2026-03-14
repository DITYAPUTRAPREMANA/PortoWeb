import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Principal "mo:core/Principal";

actor {
  // Data Types
  type Project = {
    title : Text;
    description : Text;
    techStack : [Text];
    projectUrl : Text;
  };

  module Project {
    public func compare(project1 : Project, project2 : Project) : Order.Order {
      project1.title.compare(project2.title);
    };
  };

  type SocialMediaLink = {
    platform : Text;
    url : Text;
  };

  module SocialMediaLink {
    public func compare(link1 : SocialMediaLink, link2 : SocialMediaLink) : Order.Order {
      link1.platform.compare(link2.platform);
    };
  };

  type Profile = {
    name : Text;
    title : Text;
    bio : Text;
    avatarUrl : Text;
    background : Text;
    githubUrl : Text;
    owner : Principal;
    projects : [Project];
    socialMediaLinks : [SocialMediaLink];
  };

  module Profile {
    public func compare(profile1 : Profile, profile2 : Profile) : Order.Order {
      profile1.name.compare(profile2.name);
    };
  };

  // Storage
  let profiles = Map.empty<Principal, Profile>();

  // Portfolio Management
  public shared ({ caller }) func setPortfolio(
    name : Text,
    title : Text,
    bio : Text,
    avatarUrl : Text,
    background : Text,
    githubUrl : Text,
    projects : [Project],
    links : [SocialMediaLink],
  ) : async () {
    let profile : Profile = {
      name;
      title;
      bio;
      avatarUrl;
      background;
      githubUrl;
      owner = caller;
      projects;
      socialMediaLinks = links;
    };
    profiles.add(caller, profile);
  };

  // Query functions
  public query ({ caller }) func getPortfolio(user : Principal) : async Profile {
    switch (profiles.get(user)) {
      case (?profile) { profile };
      case (null) { Runtime.trap("User does not exist") };
    };
  };

  public query ({ caller }) func getAllPortfolios() : async [Profile] {
    profiles.values().toArray().sort();
  };
};
