export interface IErrorResponseType {
  response: {
    data: { title: string; detail: string | string[]; code: number };
  };
}
