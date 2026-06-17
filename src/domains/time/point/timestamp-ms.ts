import { AtomicType, BehaviorType } from "../../../forge";

export type TimestampMS = AtomicType<number, "time.point.timestamp.ms">;

export const TimestampMS = (() => {
  const f = BehaviorType<"time.point.timestamp.ms">();
  return {
    of: (v: unknown): TimestampMS => {
      const n = Number(v);
      if (!Number.isFinite(n) || n < 0)
        throw new TypeError("timestamp must be a non-negative finite number");
      return f.of(n);
    },
    un: (v: TimestampMS) => f.un(v),
    forge: (value: number): TimestampMS => f.of(value),
  };
})();
