const router = require("express").Router();

const Theme = require("../models/Theme");

router.post("/", async (req, res) => {
  const { name, topFive, newTheme, tag, mainImg, imgs } = req.body;

  if (
    name.length <= 0 ||
    tag.length <= 0 ||
    mainImg.length <= 0 ||
    !Array.isArray(imgs) ||
    imgs.length === 0 ||
    !imgs.every((img) => img.url && typeof img.url === "string")
  ) {
    res.status(422).json({
      message:
        "name, tag, mainImg, and imgs fields are required and have to follow the specified data format",
    });
  }

  const theme = {
    name,
    topFive,
    newTheme,
    tag,
    mainImg,
    imgs,
  };

  try {
    const result = await Theme.create(theme);
    res
      .status(201)
      .json({ message: "Record created successfully", data: result });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "Error: Couldn't create the record. Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const docs = await Theme.find();
    res.status(200).json(docs);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "Error: Couldn't retrieve the records. Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  const themeId = req.params.id;

  try {
    const docs = await Theme.find();
    const doc = docs.find((doc) => doc._id == themeId);

    if (!doc) {
      res.status(404).json({ error: "Error: Couldn't find the record." });
    }
    res.status(200).json(doc);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "Error: Couldn't retrieve the record. Internal Server Error" });
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const { name, topFive, newTheme, tag, mainImg, imgs } = req.body;
  const theme = {
    name,
    topFive,
    newTheme,
    tag,
    mainImg,
    imgs,
  };

  try {
    const updatedDoc = await Theme.updateOne({ _id: id }, theme);

    if (updatedDoc.matchedCount === 0 || !updatedDoc) {
      res.status(404).json({ error: "Error: Couldn't find the record." });
    }

    res.status(200).json({ message: "The record has been updated successfully" });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "Error: Couldn't update the record. Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const result = await Theme.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      res.status(404).json({ message: "Resource not found" });
    }

    res.status(204).end();
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "Error: Couldn't delete the record. Internal Server Error" });
    }
    });
    
    module.exports = router;