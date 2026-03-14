import Order "mo:core/Order";
import Array "mo:base/Array";
import Principal "mo:core/Principal";
import Text "mo:core/Text";

persistent actor {
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
  stable var profiles : [(Principal, Profile)] = [];

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
    let existing = Array.find<(Principal, Profile)>(profiles, func ((p, _)) { p == caller });
    switch (existing) {
      case (?_) {
        // update
        profiles := Array.map<(Principal, Profile), (Principal, Profile)>(profiles, func ((p, prof)) {
          if (p == caller) { (caller, profile) } else { (p, prof) }
        });
      };
      case (null) {
        profiles := Array.append(profiles, [(caller, profile)]);
      };
    };
  };

  // Query functions
  public query ({ caller = _ }) func getPortfolio(user : Principal) : async ?Profile {
    switch (Array.find<(Principal, Profile)>(profiles, func ((p, _)) { p == user })) {
      case (?(_, prof)) { ?prof };
      case (null) { null };
    };
  };

  public query ({ caller = _ }) func getAllPortfolios() : async [Profile] {
    Array.map<(Principal, Profile), Profile>(profiles, func ((_, prof)) { prof });
  };
};
