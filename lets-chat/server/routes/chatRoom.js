const express = require ("express");

const {
  createChatRoom,
  getChatRoomOfUser,
  getChatRoomOfUsers,
} = require ("../controllers/chatRoom.js");

const router = express.Router();

router.post("/", createChatRoom);
router.get("/:userId", getChatRoomOfUser);
router.get("/:firstUserId/:secondUserId", getChatRoomOfUsers);

export default router;
