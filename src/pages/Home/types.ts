export interface JAPIUserResponse {
  cache_expiry: number;
  cached: boolean;
  data: DiscordUserData;
  presence: UserPresence;
  connections: string[];
}

export interface DiscordUserData {
  id: string;
  username: string;
  avatar: string | null;
  discriminator: string;
  public_flags: number;
  flags: number;
  banner: string | null;
  accent_color: number | null;
  global_name: string | null;
  avatar_decoration_data: string | null;
  collectibles: Collectibles;
  clan: GuildIdentity;
  primary_guild: GuildIdentity;
  tag: string;
  createdAt: string;
  createdTimestamp: number;
  public_flags_array: string[];
  defaultAvatarURL: string;
  avatarURL: string | null;
  bannerURL: string | null;
}

export interface Collectibles {
  nameplate: Nameplate;
}

export interface Nameplate {
  sku_id: string;
  asset: string;
  label: string;
  palette: string;
  display_name_styles: string[] | null;
  banner_color: string;
}

export interface GuildIdentity {
  identity_guild_id: string | null;
  identity_enabled: boolean;
  tag: string | null;
  badge: string | null;
}

export interface UserPresence {
  status: "online" | "idle" | "dnd" | "offline";
  activities: string[];
  clientStatus: string[];
}

export interface GithubStats {
  followers: number;
  public_repos: number;
  total_stars: number;
}

export interface GitHubOwner {
  login: string;
  id: number;
  node_id: string;
  avatar_url?: string;
  gravatar_id?: string;
  url?: string;
  html_url?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  site_admin?: boolean;
}

export interface GithubLicense {
  key: string;
  name: string;
  spdx_id: string;
  url: string | null;
  node_id: string;
}

export interface GithubRepository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: GitHubOwner;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: string | null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: GithubLicense | null;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: "public" | "private" | "internal";
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}
