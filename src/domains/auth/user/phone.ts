import { AtomicType, BehaviorType } from "../../../forge";

export type Phone = AtomicType<string, "auth.user.phone">;

export const Phone = (() => {
  const f = BehaviorType<"auth.user.phone">();
  const phoneRx = /^\+\d{10,15}$/;
  return {
    of: (v: unknown): Phone => {
      const s = String(v).trim();
      if (!phoneRx.test(s))
        throw new TypeError(
          "invalid phone number: must be international format starting with +"
        );
      return f.of(s);
    },
    un: (v: Phone) => f.un(v),
    forge: (value: string): Phone => f.of(value),
  };
})();
