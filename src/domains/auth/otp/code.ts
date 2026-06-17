import { AtomicType, BehaviorType } from "../../../forge";

export type Code = AtomicType<string, "auth.otp.code">;

export const Code = (() => {
  const f = BehaviorType<"auth.otp.code">();
  const codeRx = /^\d{6}$/;
  return {
    of: (v: unknown): Code => {
      const s = String(v).trim();
      if (!codeRx.test(s))
        throw new TypeError("invalid OTP code: must be exactly 6 digits");
      return f.of(s);
    },
    un: (v: Code) => f.un(v),
    forge: (value: string): Code => f.of(value),
  };
})();
