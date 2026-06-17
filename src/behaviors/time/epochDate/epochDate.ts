import { Brand, STAMP } from "../../../semantic/shim";

export type EpochDate = Brand<number, "time.epochDate">;

const f = STAMP<"time.epochDate">();

export function validateEpochDate(v: unknown): EpochDate {
  const n = Number(v);
  if (!Number.isFinite(n) || n < 0) throw new TypeError('invalid epoch date');
  return f.of(n);
}

export function unwrapEpochDate(v: EpochDate): number {
  return f.un(v);
}

export const EpochDate = {
  of: validateEpochDate,
  un: unwrapEpochDate,
};
