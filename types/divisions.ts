export const Divisions = {
  "americas": "Americas",
  "europe": "Europe",
  "se_asia": "Southeast Asia",
  "china": "China",
} as const;

export type Division = keyof typeof Divisions;
