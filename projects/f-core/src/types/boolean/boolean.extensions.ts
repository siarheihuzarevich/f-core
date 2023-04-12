export type BooleanInput = string | boolean | null | undefined;

export class BooleanExtensions {

  public static castToBoolean(value: BooleanInput): boolean {
    return value != null && `${ value }` !== 'false';
  }
}
