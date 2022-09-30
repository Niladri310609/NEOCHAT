const express  =  require ("express");

const { createMessage, getMessages }  =  require ("../controllers/chatMessage.js");

const router = express.Router();

router.post("/", createMessage);
router.get("/:chatRoomId", getMessages);

export default router;
