const express = require("express");
const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const PostsController = require("../controllers/posts");
const router = express.Router();



router.post(
  "",
  checkAuth,
  extractFile,
  PostsController.postsCreate
);

router.put(
  "/:id",
  checkAuth,
  extractFile,
  PostsController.postsUpdate
);

// This is a middleware
router.get("", PostsController.postsGetPosts);

router.get("/:id", PostsController.postsGet);

router.delete("/:id", checkAuth, PostsController.postsDelete);

module.exports = router;
