const { Router } = require("express");
const flowerModel = require("../schemas/flower.schema");

const router = Router();

router.get("/flower/:type", async (req, res) => {
  try {
    return res.status(200).json({
      message: "success",
      data: await flowerModel[req.params.type].find(),
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Oops something has been occured while trying to get data!",
    });
  }
});

router.post("/flower/:type", async (req, res) => {
  const { image, title, description, type } = req.body;

  try {
    await flowerModel[req.params.type].create({
      image,
      title,
      description,
      type,
    });

    return res.status(201).json({
      message: "success",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Oops something has been occured while trying to get data!",
    });
  }
});

module.exports = router;

var user = {
  name: "Husan",
  surname: "Bo'tayev",
};

console.log(user["name"]); // Husan
