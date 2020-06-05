const express = require("express");
const router = express.Router();

//CRUD=CREATE/READ/UPDATE/DELETE

router.get("/", (req, res) => {
  res.send("Hola desde el backend");
});

router.get("/note", (req, res) => {
  const notes = [
    {
      title: "note 1",
      body: "asdfasdfsad",
    },
    {
      title: "note 1",
      body: "asdfasdfsad",
    },
    {
      title: "note 1",
      body: "asdfasdfsad",
    },
    {
      title: "note 1",
      body: "asdfasdfsad",
    },
    {
      title: "note 1",
      body: "asdfasdfsad",
    },
    {
      title: "note 1",
      body: "asdfasdfsad",
    },
    {
      title: "note 1",
      body: "asdfasdfsad",
    },
    {
      title: "note 1",
      body: "asdfasdfsad",
    },
    {
      title: "note 1",
      body: "asdfasdfsad",
    },
  ];
  res.status(200).json({ notes });
});

router.post("/note", (req, res) => {
  console.log(req.body);
  // Ir a la base de datos y crear el recurso
  res.send("Nota creada");
});

router.get("/profile", (req, res) => {
  res.send("profile");
});

module.exports = router;
