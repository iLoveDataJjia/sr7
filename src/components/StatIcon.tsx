import { ReactComponent as ATK } from "../assets/atk.svg";
import { ReactComponent as DEF } from "../assets/def.svg";
import { ReactComponent as HP } from "../assets/hp.svg";
import { ReactComponent as SPD } from "../assets/spd.svg";
import { ReactComponent as TAUNT } from "../assets/taunt.svg";
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
    default:
      return <span className={className ? className : ""} />;
  }
}
