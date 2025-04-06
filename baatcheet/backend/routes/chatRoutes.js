const express=require("express");
const {protect} = require("../middleware/authMiddleware");
const { accessChat, fetchChats } = require("../controllers/chatControllers");

const router =express.Router();


router.route("/").post(protect, accessChat);
router.route("/").get(protect,fetchChats);
// router.route("/group").post(protest,createGroupChat);
// router.route("/rename").put(protest,renameGroup);
// router.route("/groupremove").put(protest,removeFromGroup);
// router.route("/groupadd").put(protest,addToGroup);

module.exports=router;