export interface IExpireInProvider {
  generate: (value: number) => number;
  isAfter: (value: number) => boolean;
}
