import express from "express";
import { createDid, authDid } from "../controllers/auth-controller.js";

const router = express.Router();

router.post("/create-did", createDid);
router.post("/auth-did", authDid);


export default router;