export interface OpendotaPlayerOverview {
  solo_competitive_rank: number | null;
  competitive_rank: number | null;
  rank_tier: number | null;
  leaderboard_rank: number | null;
  mmr_estimate: {
    estimate: number | null;
  };
  profile: {
    account_id: number;
    personaname: string | null;
    name: string | null;
    plus: boolean;
    cheese: number | null;
    steamid: string | null;
    avatar: string | null;
    avatarmedium: string | null;
    avatarfull: string | null;
    profileurl: string | null;
    last_login: string | null;
    loccountrycode: string | null;
    is_contributor: boolean;
    is_subscriber: boolean;
  };
}
