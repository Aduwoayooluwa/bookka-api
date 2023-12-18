import express from "express";
import { createDid, authDid, validateUser } from "../controllers/auth-controller.js";

const router = express.Router();

router.post("/create-did", createDid);
router.post("/auth-did", authDid);
router.post("/validate-user", validateUser)


export default router;