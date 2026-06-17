import { Brand, STAMP } from "../../../semantic/shim";

export type Timestamp = Brand<Date, "time.timestamp">;
const f = STAMP<"time.timestamp">();

export function validateTimestamp(v: unknown): Timestamp {
  const d = v instanceof Date ? v : new Date(String(v));
  if (Number.isNaN(d.getTime())) throw new TypeError('invalid timestamp');
  return f.of(d);
}

export function unwrapTimestamp(v: Timestamp): Date {
  return f.un(v);
}

export const Timestamp = {
  of: validateTimestamp,
  un: unwrapTimestamp,
};
