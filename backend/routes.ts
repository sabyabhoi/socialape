import { Router } from "https://deno.land/x/oak/mod.ts";

import db from "./database.ts";
import { UserSchema, PostSchema } from "./models.ts";

const router = new Router();

const userCollection = db.collection<UserSchema>('users');
const postCollection = db.collection<PostSchema>('posts');

router.get("/users", async (ctx) => {
	const users = await userCollection.find();
	ctx.response.body = users;
});

router.post("/users", async (ctx) => {
	const user = await ctx.request.body().value;
	const insertId = await userCollection.insertOne(user);
	ctx.response.body = insertId;
});

router.get("/posts", async (ctx) => {
	const posts = await postCollection.find();
	ctx.response.body = posts;
});

router.post("/posts", async (ctx) => {
	const post = await ctx.request.body().value;
	const insertId = await postCollection.insertOne(post);
	ctx.response.body = insertId;
});

export default router;