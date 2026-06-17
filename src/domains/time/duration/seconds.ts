import { AtomicType, BehaviorType } from "../../../forge";

export type Seconds = AtomicType<number, "time.duration.seconds">;

export const Seconds = (() => {
  const f = BehaviorType<"time.duration.seconds">();
  return {
    of: (v: unknown): Seconds => {
      const n = Number(v);
      if (!Number.isFinite(n) || n < 0)
        throw new TypeError(
          "duration must be a non-negative finite number (seconds)"
        );
      return f.of(n);
    },
    un: (v: Seconds) => f.un(v),
    forge: (value: number): Seconds => f.of(value),
  };
})();
