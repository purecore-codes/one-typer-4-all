import { Brand, STAMP } from "../../../semantic/shim";

export type Duration = Brand<number, "time.duration">;

const f = STAMP<"time.duration">();

export function validateDuration(v: unknown): Duration {
  const n = Number(v);
  if (!Number.isFinite(n) || n < 0) throw new TypeError('invalid duration');
  return f.of(n);
}

export function unwrapDuration(v: Duration): number {
  return f.un(v);
}

export const Duration = {
  of: validateDuration,
  un: unwrapDuration,
};
