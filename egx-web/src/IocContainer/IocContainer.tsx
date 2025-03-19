// src/inversify.config.ts
import { Container } from "inversify";
import { MyService } from "../services/myService";

// Create the container
const container = new Container();

// Bind the MyService class to itself so that InversifyJS can resolve it.
//container.bind<MyService>(MyService).toSelf();
container.bind<MyService>(MyService).toSelf().inSingletonScope();
//container.bind<MyService>(MyService).toSelf().inTransientScope();
//container.bind<MyService>(MyService).toSelf().inRequestScope();

export { container };
