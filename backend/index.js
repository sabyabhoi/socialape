const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('short'));
app.use(express.json());

app.get('/', (req, res) => {
	res.json({ message: "Hello there" });
});

const port = process.env.PORT || 8080;
app.listen({ port }, () => {
	console.log(`Listening on localhost:${port}`);
});