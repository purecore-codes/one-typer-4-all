import { Brand, STAMP } from "../../../semantic/shim";

export type UTCDate = Brand<Date, "time.utcDate">;
const f = STAMP<"time.utcDate">();

export function validateUTCDate(v: unknown): UTCDate {
  const d = v instanceof Date ? v : new Date(String(v));
  if (Number.isNaN(d.getTime())) throw new TypeError('invalid UTC date');
  return f.of(new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())));
}

export function unwrapUTCDate(v: UTCDate): Date {
  return f.un(v);
}

export const UTCDate = {
  of: validateUTCDate,
  un: unwrapUTCDate,
};
