import { AtomicType, BehaviorType } from "../../../forge";

export type RefreshToken = AtomicType<string, "oauth.token.refresh">;

export const RefreshToken = (() => {
  const f = BehaviorType<"oauth.token.refresh">();
  return {
    of: (v: unknown): RefreshToken => {
      const s = String(v).trim();
      if (!s) throw new TypeError("refresh token cannot be empty");
      return f.of(s);
    },
    un: (v: RefreshToken) => f.un(v),
    forge: (value: string): RefreshToken => f.of(value),
  };
})();
