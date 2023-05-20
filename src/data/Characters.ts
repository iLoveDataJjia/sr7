import { Path, Element, Stat } from "./Utils";
import data from "./characters.json";

/**
 * Get character(s).
 *  - https://genshin.gg/star-rail/characters/clara/ (profil picture)
 *  - https://honkailab.com/characters/clara-build/ (skill picture)
 */
export function getCharacters(uids: string[]) {
  const out = (data as Character[]).filter((_) => uids.includes(_.nameUID));
  return out;
}

/**
 * Character.
 */
export interface Character {
  nameUID: string;
  static: {
    star: number;
    path: Path;
    element: Element;
    hp: number;
    def: number;
    atk: number;
    spd: number;
    taunt: number;
    skills: {
      typeUID: Skill;
      name: string;
      desc: string;
    }[];
    traces: {
      typeUID: Trace;
      name: string;
      desc: string;
    }[];
  };
  dynamic: {
    tier: string;
    playstyle: string;
    lightcones: string[];
    relics: string[];
    ornaments: string[];
    statPriority: {
      body: Stat[];
      feet: Stat[];
      sphere: Stat[];
      rope: Stat[];
      subStats: Stat[];
    };
    skillPriority: Skill[];
    tracePriority: Trace[];
    comp: {
      best: {
        char: string;
        role: Role;
      }[];
      f2p: {
        char: string;
        role: Role;
      }[];
    };
  };
}

/**
 * Tier.
 */
export enum Tier {
  "S+" = "S+",
  "S" = "S",
  "A" = "A",
  "B" = "B",
  "C" = "C",
  "D" = "D",
}

/**
 * Skill.
 */
export enum Skill {
  "Normal Atk" = "Normal Atk",
  "Skill" = "Skill",
  "Ultimate" = "Ultimate",
  "Talent" = "Talent",
}

/**
 * Trace.
 */
export enum Trace {
  "Ascension 2" = "Ascension 2",
  "Ascension 4" = "Ascension 4",
  "Ascension 6" = "Ascension 6",
}

/**
 * Role.
 */
export enum Role {
  "Main DPS" = "Main DPS",
  "Tank" = "Tank",
  "Support" = "Support",
  "Healer" = "Healer",
}
