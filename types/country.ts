import { Countries } from "../mod.ts";

export type CountryCode = typeof Countries[number]["cca2"];
export type CountryName = typeof Countries[number]["name"]["common"];
