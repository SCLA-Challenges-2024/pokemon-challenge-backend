import express from "express";
import cors from "cors";

import pokemon from "./routes/pokemon.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use("/get-pokemon-by-name", pokemon);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});