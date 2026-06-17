import { Brand, STAMP } from "../../../../../semantic/shim";

export type LocalTime = Brand<string, "time.localTime">;

const f = STAMP<"time.localTime">();

export function validateLocalTime(v: unknown): LocalTime {
  const s = String(v);
  const rx = /^([01]\\d|2[0-3]):([0-5]\\d):([0-5]\\d)$/;
  if (!rx.test(s)) throw new TypeError('invalid local time (expected HH:mm:ss)');
  return f.of(s);
}

export function unwrapLocalTime(v: LocalTime): string {
  return f.un(v);
}

export const LocalTime = {
  of: validateLocalTime,
  un: unwrapLocalTime,
};
