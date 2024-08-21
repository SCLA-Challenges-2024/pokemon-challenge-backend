import express from "express";

const router = express.Router();

router.get("/:name", async (req, res) => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${req.params.name}`).then(response => response.json())
    .then(data => {
         res.send(data);
    }).catch(error => {
        console.log(error);
    })
 
  });

export default router;