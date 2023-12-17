import express from "express";
import { GetBookkeeping, saveBookkeeping } from "../controllers/bookkeeping-controller";


const router = express.Router();

router.get("/get-bookkeepping", GetBookkeeping);
router.post("/save-bookkeepping", saveBookkeeping);

export default router;