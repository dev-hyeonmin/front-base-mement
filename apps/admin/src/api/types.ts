export interface ICommonResponseDto<T = Record<string, any>> {
  result: boolean;
  statusCode: number;
  request: string;
  timestamp: string;
  message: T;
}