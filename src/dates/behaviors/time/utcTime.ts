import { Brand, STAMP } from "../../../semantic/shim";

export type UTCTime = Brand<Date, "time.utcTime">;
const f = STAMP<"time.utcTime">();

export function validateUTCTime(v: unknown): UTCTime {
  const d = v instanceof Date ? v : new Date(String(v));
  if (Number.isNaN(d.getTime())) throw new TypeError('invalid UTC time');
  return f.of(d);
}

export function unwrapUTCTime(v: UTCTime): Date {
  return f.un(v);
}

export const UTCTime = {
  of: validateUTCTime,
  un: unwrapUTCTime,
};
