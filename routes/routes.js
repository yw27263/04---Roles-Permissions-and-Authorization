import express from 'express'
import * as messageController from '../controllers/messageController.js';
import * as userController from '../controllers/userController.js';
export const router = express.Router();

// HOME PAGE
router.get("/", messageController.homePage);

// CREATE MESSAGE
router.post("/messages", messageController.createMessage);

// EDIT MESSAGE
router.post("/messages/edit/:id", messageController.editMessage)
router.post("/messages/update/:id", messageController.updateMessage)
router.get("/messages/cancelEdit", messageController.cancelEdit)

// DELETE MESSAGE
router.post("/messages/delete/:id", messageController.deleteMessage);

// SELECT USER
router.post("/users/select", userController.selectUser);

// CREATE USER
router.post("/users/add", userController.createUser);

// DELETE USER
router.post("/users/delete/:id", userController.deleteUser);