import { Path, Element, Stat } from "./Utils";
import data from "./characters.json";

/**
 * Get character(s).
 *  - https://genshin.gg/star-rail/characters/clara/ (profil picture)
 *  - https://honkailab.com/characters/clara-build/ (skill picture)
 */
export function getCharacters(nameUIDs?: string[]) {
  if (!nameUIDs) return data as Character[];
  else return (data as Character[]).filter((_) => nameUIDs.includes(_.nameUID));
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
    attributes: {
      typeUID: Attribute;
      value: number;
    }[];
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
    tier: Tier;
    playstyle: string;
    lightcones: string[];
    relics: string[];
    ornaments: string[];
    statPriority: {
      mainStats: { typeUID: Piece; stats: Stat[] }[];
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
 * Attribute.
 */
export enum Attribute {
  "HP" = "HP",
  "ATK" = "ATK",
  "DEF" = "DEF",
  "SPD" = "SPD",
  "TAUNT" = "TAUNT",
}

/**
 * Skill.
 */
export enum Skill {
  "Normal ATK" = "Normal ATK",
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
 * Piece.
 */
export enum Piece {
  "Body" = "Body",
  "Feet" = "Feet",
  "Sphere" = "Sphere",
  "Rope" = "Rope",
}

/**
 * Role.
 */
export enum Role {
  "Main DPS" = "Main DPS",
  "Sub DPS" = "Sub DPS",
  "Tank" = "Tank",
  "Support" = "Support",
  "Healer" = "Healer",
}
