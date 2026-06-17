import { Brand, STAMP } from "../../../semantic/shim";

export type EpochTime = Brand<number, "time.epochTime">;

const f = STAMP<"time.epochTime">();

export function validateEpochTime(v: unknown): EpochTime {
  const n = Number(v);
  if (!Number.isFinite(n) || n < 0) throw new TypeError('invalid epoch time');
  return f.of(n);
}

export function unwrapEpochTime(v: EpochTime): number {
  return f.un(v);
}

export const EpochTime = {
  of: validateEpochTime,
  un: unwrapEpochTime,
};
