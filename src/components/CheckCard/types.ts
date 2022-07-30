export interface CheckedCardType {
  value: string;
  count: number;
  label: string;
  city: string;
  color?: {
    dark: string;
    light: string;
  };
}
