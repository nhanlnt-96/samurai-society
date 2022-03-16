const express = require("express");
const {
  body,
  validationResult
} = require("express-validator");
const {
  Explain,
  ExplainImg
} = require("../models");
const {
  ApiError,
  ApiSuccess
} = require("../shared/helper/helper");
const {validateToken} = require("../middleware/authentication");

const router = express.Router();

router.post("/general", validateToken, body("title").notEmpty().trim(), body("content").notEmpty().trim(), async (req, res) => {
  const errors = validationResult(req);
  const post = req.body;
  try {
    if (errors.isEmpty()) {
      await Explain.create(post);
      ApiSuccess(201, post, res);
    } else {
      ApiError(400, "Explain's content can not empty.", res);
    }
  } catch (error) {
    ApiError(400, error, res);
  }
});

router.post("/images", validateToken, body("imageName").notEmpty().trim(), body("imageUrl").notEmpty().trim(), async (req, res) => {
  const errors = validationResult(req);
  const post = req.body;
  try {
    if (errors.isEmpty()) {
      await ExplainImg.create(post);
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
    content,
  } = req.body;
  const contentId = req.params.id;
  const checkContentExist = await Explain.findByPk(contentId);
  
  try {
    if (checkContentExist) {
      await Explain.update({
        title,
        content
      }, {
        where: {id: contentId},
        returning: true,
        plain: true,
      });
      ApiSuccess(201, "Updated", res);
    } else {
      ApiError(400, "Content not found", res);
    }
  } catch (error) {
    ApiError(400, error, res);
  }
});

router.delete("/images/:id", validateToken, async (req, res) => {
  const contentId = req.params.id;
  const checkContentExist = await ExplainImg.findByPk(contentId);
  try {
    if (checkContentExist) {
      await ExplainImg.destroy({where: {id: contentId}});
      ApiSuccess(200, "Deleted", res);
    } else {
      ApiError(400, "Content not found", res);
    }
  } catch (error) {
    ApiError(400, error, res);
  }
});

router.get("/", async (req, res) => {
  await Explain.findAll({
    include: ExplainImg
  }).then((response) => {
    ApiSuccess(200, response, res);
  });
});

module.exports = router;
