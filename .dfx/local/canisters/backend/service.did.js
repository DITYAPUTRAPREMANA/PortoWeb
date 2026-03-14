export const idlFactory = ({ IDL }) => {
  const Project = IDL.Record({
    'title' : IDL.Text,
    'description' : IDL.Text,
    'projectUrl' : IDL.Text,
    'techStack' : IDL.Vec(IDL.Text),
  });
  const SocialMediaLink = IDL.Record({
    'url' : IDL.Text,
    'platform' : IDL.Text,
  });
  const Profile = IDL.Record({
    'bio' : IDL.Text,
    'title' : IDL.Text,
    'background' : IDL.Text,
    'projects' : IDL.Vec(Project),
    'owner' : IDL.Principal,
    'name' : IDL.Text,
    'githubUrl' : IDL.Text,
    'socialMediaLinks' : IDL.Vec(SocialMediaLink),
    'avatarUrl' : IDL.Text,
  });
  return IDL.Service({
    'getAllPortfolios' : IDL.Func([], [IDL.Vec(Profile)], ['query']),
    'getPortfolio' : IDL.Func([IDL.Principal], [IDL.Opt(Profile)], ['query']),
    'setPortfolio' : IDL.Func(
        [
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Vec(Project),
          IDL.Vec(SocialMediaLink),
        ],
        [],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
