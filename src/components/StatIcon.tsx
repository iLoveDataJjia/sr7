import { ReactComponent as ATK } from "../assets/stats/ATK.svg";
import { ReactComponent as Break_Effect } from "../assets/stats/Break Effect.svg";
import { ReactComponent as CRIT_DMG } from "../assets/stats/CRIT DMG.svg";
import { ReactComponent as CRIT_Rate } from "../assets/stats/CRIT Rate.svg";
import { ReactComponent as DEF } from "../assets/stats/DEF.svg";
import { ReactComponent as Effect_HIT_Rate } from "../assets/stats/Effect HIT Rate.svg";
import { ReactComponent as Effect_RES } from "../assets/stats/Effect RES.svg";
import { ReactComponent as Energy_Regen_Rate } from "../assets/stats/Energy Regen Rate.svg";
import { ReactComponent as Fire_DMG } from "../assets/stats/Fire DMG.svg";
import { ReactComponent as HP } from "../assets/stats/HP.svg";
import { ReactComponent as Ice_DMG } from "../assets/stats/Ice DMG.svg";
import { ReactComponent as Imaginary_DMG } from "../assets/stats/Imaginary DMG.svg";
import { ReactComponent as Lightning_DMG } from "../assets/stats/Lightning DMG.svg";
import { ReactComponent as Outgoing_Healing } from "../assets/stats/Outgoing Healing.svg";
import { ReactComponent as Physical_DMG } from "../assets/stats/Physical DMG.svg";
import { ReactComponent as Quantum_DMG } from "../assets/stats/Quantum DMG.svg";
import { ReactComponent as SPD } from "../assets/stats/SPD.svg";
import { ReactComponent as TAUNT } from "../assets/stats/TAUNT.svg";
import { ReactComponent as Wind_DMG } from "../assets/stats/Wind DMG.svg";
import { Stat } from "../data/Utils";

/**
 * Attribute icon.
 */
export default function StatIcon({ stat, className }: { stat: Stat; className?: string }) {
  switch (stat) {
    case Stat["HP"]:
      return <HP className={"fill-rose-500" + (className ? ` ${className}` : "")} />;
    case Stat["ATK"]:
      return <ATK className={"fill-indigo-500" + (className ? ` ${className}` : "")} />;
    case Stat["DEF"]:
      return <DEF className={"fill-sky-500" + (className ? ` ${className}` : "")} />;
    case Stat["SPD"]:
      return <SPD className={"fill-emerald-500" + (className ? ` ${className}` : "")} />;
    case Stat["TAUNT"]:
      return <TAUNT className={"fill-amber-500" + (className ? ` ${className}` : "")} />;
    case Stat["HP%"]:
      return <HP className={"fill-rose-500" + (className ? ` ${className}` : "")} />;
    case Stat["ATK%"]:
      return <ATK className={"fill-indigo-500" + (className ? ` ${className}` : "")} />;
    case Stat["DEF%"]:
      return <DEF className={"fill-sky-500" + (className ? ` ${className}` : "")} />;
    case Stat["CRIT Rate"]:
      return <CRIT_Rate className={"fill-indigo-500" + (className ? ` ${className}` : "")} />;
    case Stat["CRIT DMG"]:
      return <CRIT_DMG className={"fill-indigo-500" + (className ? ` ${className}` : "")} />;
    case Stat["Outgoing Healing"]:
      return <Outgoing_Healing className={"fill-rose-500" + (className ? ` ${className}` : "")} />;
    case Stat["Energy Regen Rate"]:
      return <Energy_Regen_Rate className={"fill-emerald-500" + (className ? ` ${className}` : "")} />;
    case Stat["Break Effect"]:
      return <Break_Effect className={"fill-sky-500" + (className ? ` ${className}` : "")} />;
    case Stat["Effect HIT Rate"]:
      return <Effect_HIT_Rate className={"fill-amber-500" + (className ? ` ${className}` : "")} />;
    case Stat["Effect RES"]:
      return <Effect_RES className={"fill-amber-500" + (className ? ` ${className}` : "")} />;
    case Stat["Physical DMG"]:
      return <Physical_DMG className={"fill-neutral-500" + (className ? ` ${className}` : "")} />;
    case Stat["Fire DMG"]:
      return <Fire_DMG className={"fill-red-500" + (className ? ` ${className}` : "")} />;
    case Stat["Ice DMG"]:
      return <Ice_DMG className={"fill-blue-500" + (className ? ` ${className}` : "")} />;
    case Stat["Lightning DMG"]:
      return <Lightning_DMG className={"fill-purple-500" + (className ? ` ${className}` : "")} />;
    case Stat["Wind DMG"]:
      return <Wind_DMG className={"fill-green-500" + (className ? ` ${className}` : "")} />;
    case Stat["Quantum DMG"]:
      return <Quantum_DMG className={"fill-indigo-500" + (className ? ` ${className}` : "")} />;
    case Stat["Imaginary DMG"]:
      return <Imaginary_DMG className={"fill-yellow-500" + (className ? ` ${className}` : "")} />;
    default:
      return <span className={className ? className : ""} />;
  }
}
