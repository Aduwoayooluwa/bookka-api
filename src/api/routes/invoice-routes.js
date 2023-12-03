import express from "express";
import { createInvoice, GetInvoice } from "../controllers/invoice-controller.js";

const router = express.Router();

router.post("/create-invoice", createInvoice);
router.get("/get-invoice", GetInvoice);

export default router;