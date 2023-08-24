import data from "./characters.json";
import { Path, Element, Stat } from "./utils";

/**
 * Tier order.
 */
export function tierOrder(tier: Tier) {
  switch (tier) {
    case Tier["S+"]:
      return 6;
    case Tier["S"]:
      return 5;
    case Tier["A"]:
      return 4;
    case Tier["B"]:
      return 3;
    case Tier["C"]:
      return 2;
    case Tier["D"]:
      return 1;
  }
}

/**
 * Tier CSS border and text color.
 */
export function tierCSS(tier: Tier) {
  switch (tier) {
    case Tier["S+"]:
      return { border: "border-amber-500", text: "text-amber-500" };
    case Tier["S"]:
      return { border: "border-blue-500", text: "text-blue-500" };
    case Tier["A"]:
      return { border: "border-blue-300", text: "text-blue-300" };
    case Tier["B"]:
      return { border: "border-white-500", text: "text-white-500" };
    case Tier["C"]:
      return { border: "border-red-300", text: "text-red-300" };
    case Tier["D"]:
      return { border: "border-red-500", text: "text-red-500" };
  }
}

/**
 * Regex to fix "Trailblazer (?)" into "Trailblazer".
 */
export function displayable(nameUID: string) {
  return nameUID.replace(/(\w+) \(.*\)/, "$1");
}

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
    star: 5 | 4;
    path: Path;
    element: Element;
    attributes: {
      typeUID: Stat;
      value: number;
    }[];
    skills: {
      typeUID: Skill;
      name: string;
      source: SkillSource;
      cost: string | null;
      desc: string;
      enhanced: {
        nameUID: string;
        source: SkillSource;
        cost: string | null;
        desc: string;
      }[];
    }[];
    traces: {
      typeUID: Trace;
      name: string;
      desc: string;
      minors: {
        stat: Stat;
        value: string;
        unlock: string;
      }[];
    }[];
    eidolons: {
      typeUID: Eidolon;
      name: string;
      desc: string;
    }[];
    ascensionMats: {
      total: { materials: { name: string; quantity: number }[] };
      perLevel: {
        level: number;
        materials: {
          name: string;
          quantity: number;
        }[];
      }[];
    };
    traceMats: {
      normalAtk: {
        total: { materials: { name: string; quantity: number }[] };
        perLevel: {
          level: number;
          materials: {
            name: string;
            quantity: number;
          }[];
        }[];
      };
    };
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
    eidolonPriority: Eidolon[];
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
 * Skill.
 */
export enum Skill {
  "Normal ATK" = "Normal ATK",
  "Skill" = "Skill",
  "Ultimate" = "Ultimate",
  "Talent" = "Talent",
}

/**
 * Skill source.
 */
export enum SkillSource {
  "Single Target" = "Single Target",
  "Blast" = "Blast",
  "Enhance" = "Enhance",
  "Bounce" = "Bounce",
  "Support" = "Support",
  "Restore" = "Restore",
  "AoE ATK" = "AoE ATK",
  "Impair" = "Impair",
  "Defense" = "Defense",
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
 * Eidolon.
 */
export enum Eidolon {
  "Eidolon 1" = "Eidolon 1",
  "Eidolon 2" = "Eidolon 2",
  "Eidolon 3" = "Eidolon 3",
  "Eidolon 4" = "Eidolon 4",
  "Eidolon 5" = "Eidolon 5",
  "Eidolon 6" = "Eidolon 6",
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
