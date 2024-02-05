import { Service, Container } from "typedi";
import Fastify, { FastifyInstance } from "fastify";
import { readdirSync } from "fs";
import { join } from "path";
import { FASTIFY_CONFIG } from "./config/fastify";

@Service()
export default class Server {
  private server: FastifyInstance;

  constructor() {
    this.server = Fastify(FASTIFY_CONFIG);
    this.registerRoutes();
  }

  private registerRoutes(): void {
    const routesPath = join(__dirname, "route");
    readdirSync(routesPath).forEach((file) => {
      if (file.endsWith(".ts") || file.endsWith(".js")) {
        const route = require(join(routesPath, file));
        route.default(this.server);
      }
    });
  }

  public async start(port: number): Promise<void> {
    try {
      await this.server.listen({ port });
    } catch (e) {
      console.error(e);
      process.exit(1);
    }
  }
}
