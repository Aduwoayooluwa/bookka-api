import express from "express";
import { GetBookkeeping, saveBookkeeping } from "../controllers/bookkeeping-controller.js";
import { bookkeepingProtocolConfig } from "../../config/bookkeeping-protocol-config.js";


const router = express.Router();

router.get("/get-bookkeepping", GetBookkeeping);
router.post("/save-bookkeepping", saveBookkeeping);
router.post("/configure-bookkeepping", bookkeepingProtocolConfig)

export default router;