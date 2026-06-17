import { AtomicType, BehaviorType } from "../../../forge";

export type Token = AtomicType<string, "auth.flow.token">;

export const Token = (() => {
  const f = BehaviorType<"auth.flow.token">();
  return {
    of: (v: unknown): Token => {
      const s = String(v).trim();
      if (!s) throw new TypeError("flow token cannot be empty");
      return f.of(s);
    },
    un: (v: Token) => f.un(v),
    forge: (value: string): Token => f.of(value),
  };
})();
