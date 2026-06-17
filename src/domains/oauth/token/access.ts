import { AtomicType, BehaviorType } from "../../../forge";

export type AccessToken = AtomicType<string, "oauth.token.access">;

export const AccessToken = (() => {
  const f = BehaviorType<"oauth.token.access">();
  return {
    of: (v: unknown): AccessToken => {
      const s = String(v).trim();
      if (!s) throw new TypeError("access token cannot be empty");
      return f.of(s);
    },
    un: (v: AccessToken) => f.un(v),
    forge: (value: string): AccessToken => f.of(value),
  };
})();
