import { AtomicType, BehaviorType } from "../../../forge";

export type IssuedAt = AtomicType<string, "time.event.issuedAt">;

export const IssuedAt = (() => {
  const f = BehaviorType<"time.event.issuedAt">();
  return {
    of: (v: unknown): IssuedAt => {
      const s = String(v).trim();
      if (Number.isNaN(Date.parse(s)))
        throw new TypeError("invalid date format for issuedAt");
      return f.of(s);
    },
    un: (v: IssuedAt) => f.un(v),
    forge: (value: string): IssuedAt => f.of(value),
  };
})();
