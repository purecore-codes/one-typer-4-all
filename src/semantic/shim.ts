/** Shared branding shim for generated behavior/domain types. */
declare const __Brand: unique symbol;

export type Brand<T, Name extends string> = T & { readonly [__Brand]: Name };

export function STAMP<Name extends string>() {
  return {
    of: <T>(value: T) => value as Brand<T, Name>,
    un: <T>(value: Brand<T, Name>) => value as unknown as T,
  };
}
