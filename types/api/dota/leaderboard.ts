import { CountryCode } from "../../country.ts";

/** Represents the result of the getLeaderboard function. */
export interface DotaLeaderboard {
  /** The timestamp when the leaderboard was posted. */
  time_posted: number;
  /** The timestamp for the next scheduled leaderboard post. */
  next_scheduled_post_time: number;
  /** The server timestamp when the leaderboard data was retrieved. */
  server_time: number;
  /** An array of leaderboard entries. */

  leaderboard: DotaLeaderboardEntry[];
}

export interface DotaLeaderboardEntry {
  /** The rank of the player or team in the leaderboard. */
  rank: number;
  /** The name of the player or team. */
  name: string;
  /** The ID of the team (optional). */
  team_id?: number;
  /** The tag of the team (optional). */
  team_tag?: string;
  /** The country code of the player or team (optional). */
  country?: CountryCode;
  /** The sponsor of the player or team (optional). */
  sponsor?: string;
}
