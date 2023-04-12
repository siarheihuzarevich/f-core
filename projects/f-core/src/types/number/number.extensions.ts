export type NumberInput = string | number | null | undefined;

export class NumberExtensions {

  public static castToNumber(value: NumberInput, fallbackValue = 0): number {
    return NumberExtensions.isNumberValue(value) ? Number(value) : fallbackValue;
  }

  public static isNumberValue(value: NumberInput): boolean {
    return !isNaN(parseFloat(value as any)) && !isNaN(Number(value));
  }
}
