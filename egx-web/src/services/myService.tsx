// src/services/MyService.ts
import { injectable } from "inversify";

@injectable()
export class MyService {
  public sayHello(): string {
    return "Hello from MyService!";
  }
}
