export interface IHttpService {
  hgetAll(key: string): Promise<any>;
  // you can add more methods if needed
}
