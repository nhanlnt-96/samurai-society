const express = require("express");
const {
  body,
  validationResult
} = require("express-validator");
const {
  Welcome
} = require("../models");
const {
  ApiError,
  ApiSuccess
} = require("../shared/helper/helper");
const {validateToken} = require("../middleware/authentication");

const router = express.Router();

router.post("/", validateToken, body("title").notEmpty().trim(), async (req, res) => {
  const errors = validationResult(req);
  const post = req.body;
  try {
    if (errors.isEmpty()) {
      await Welcome.create(post);
      ApiSuccess(201, post, res);
    } else {
      ApiError(400, errors.array(), res);
    }
  } catch (error) {
    ApiError(400, error, res);
  }
});

router.patch("/update/:id", validateToken, async (req, res) => {
  const {
    title,
    subTitle,
  } = req.body;
  const contentId = req.params.id;
  const checkContentExist = await Welcome.findByPk(contentId);
  try {
    if (checkContentExist) {
      await Welcome.update({
        title,
        subTitle,
      }, {
        where: {id: contentId},
        returning: true,
        plain: true,
      }).then((result) => {
        ApiSuccess(201, result, res);
      });
    } else {
      ApiError(400, "Content not found", res);
    }
  } catch (error) {
    ApiError(400, error, res);
  }
});

router.get("/", async (req, res) => {
  const welcomeContent = await Welcome.findAll();
  ApiSuccess(200, welcomeContent, res);
});

module.exports = router;
