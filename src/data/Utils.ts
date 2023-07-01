/**
 * Star CSS fill and text color.
 */
export function starCSS(star: 5 | 4 | 3 | 2) {
  switch (star) {
    case 5:
      return {
        fill: "fill-amber-500",
        text: "text-amber-500",
        gradient: "from-amber-700 via-amber-500 via-60% to-amber-200",
      };
    case 4:
      return {
        fill: "fill-purple-700",
        text: "text-purple-700",
        gradient: "from-purple-950 via-purple-700 via-60% to-purple-400",
      };
    case 3:
      return {
        fill: "fill-blue-800",
        text: "text-blue-800",
        gradient: "from-blue-950 via-blue-800 via-60% to-blue-500",
      };
    case 2:
      return {
        fill: "fill-green-800",
        text: "text-green-800",
        gradient: "from-green-950 via-green-800 via-60% to-green-500",
      };
  }
}

/**
 * Path.
 */
export enum Path {
  "The Abundance" = "The Abundance",
  "The Destruction" = "The Destruction",
  "The Erudition" = "The Erudition",
  "The Harmony" = "The Harmony",
  "The Hunt" = "The Hunt",
  "The Nihility" = "The Nihility",
  "The Preservation" = "The Preservation",
}

/**
 * Element.
 */
export enum Element {
  Fire = "Fire",
  Ice = "Ice",
  Imaginary = "Imaginary",
  Lightning = "Lightning",
  Physical = "Physical",
  Quantum = "Quantum",
  Wind = "Wind",
}

/**
 * Stat. (https://www.prydwen.gg/star-rail/guides/relic-stats/)
 */
export enum Stat {
  "HP" = "HP",
  "ATK" = "ATK",
  "DEF" = "DEF",
  "SPD" = "SPD",
  "TAUNT" = "TAUNT",
  "HP%" = "HP%",
  "ATK%" = "ATK%",
  "DEF%" = "DEF%",
  "CRIT Rate" = "CRIT Rate",
  "CRIT DMG" = "CRIT DMG",
  "Outgoing Healing" = "Outgoing Healing",
  "Energy Regen Rate" = "Energy Regen Rate",
  "Break Effect" = "Break Effect",
  "Effect HIT Rate" = "Effect HIT Rate",
  "Effect RES" = "Effect RES",
  "Physical DMG" = "Physical DMG",
  "Fire DMG" = "Fire DMG",
  "Ice DMG" = "Ice DMG",
  "Lightning DMG" = "Lightning DMG",
  "Wind DMG" = "Wind DMG",
  "Quantum DMG" = "Quantum DMG",
  "Imaginary DMG" = "Imaginary DMG",
}
