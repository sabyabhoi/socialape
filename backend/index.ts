import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const app = new Application();

const env = config();

app.use(ctx => {
	ctx.response.body = "Welcome to social ape";
});

const port = Number(env.PORT) || 8000;
app.addEventListener('listen', () => {
	console.log(`Listening on http://localhost:${port}`);
});

await app.listen({ port });