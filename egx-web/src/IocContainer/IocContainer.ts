// src/inversify.config.ts
import { Container } from "inversify";
import { MyService } from "../services/myService";
import { TYPES } from "./types";
import { IHttpService } from "../HttpServices/IHttpService";
import { HttpService } from "../HttpServices/HttpService";
// Create the container
const container = new Container();

// Bind the MyService class to itself so that InversifyJS can resolve it.
//container.bind<MyService>(MyService).toSelf();
container.bind<MyService>(MyService).toSelf().inSingletonScope();
container
  .bind<IHttpService>(TYPES.IHttpService)
  .to(HttpService)
  .inSingletonScope();

//container.bind<MyService>(MyService).toSelf().inTransientScope();
//container.bind<MyService>(MyService).toSelf().inRequestScope();

export { container };
