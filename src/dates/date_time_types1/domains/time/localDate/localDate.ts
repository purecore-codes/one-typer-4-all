import { Brand, STAMP } from "../../../../../semantic/shim";

export type LocalDate = Brand<Date, "time.localDate">;

const f = STAMP<"time.localDate">();

export function validateLocalDate(v: unknown): LocalDate {
  const d = v instanceof Date ? v : new Date(String(v));
  if (Number.isNaN(d.getTime())) throw new TypeError('invalid local date');
  return f.of(new Date(d.getFullYear(), d.getMonth(), d.getDate()));
}

export function unwrapLocalDate(v: LocalDate): Date {
  return f.un(v);
}

export const LocalDate = {
  of: validateLocalDate,
  un: unwrapLocalDate,
};
