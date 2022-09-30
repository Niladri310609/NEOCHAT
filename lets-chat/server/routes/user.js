const express  = require ( "express");

const { getAllUsers, getUser }  = require ( "../controllers/user.js");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:userId", getUser);

export default router;
