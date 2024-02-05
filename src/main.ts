import "reflect-metadata";
import { Container } from "typedi";
import Server from "./server";
import { APP_PORT } from "./config/app";

(async function main() {
  const server = Container.get(Server);
  await server.start(APP_PORT);
})();
