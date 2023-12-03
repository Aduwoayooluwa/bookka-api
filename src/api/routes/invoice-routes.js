import express from "express";
import { createInvoice, GetInvoice } from "../controllers/invoice-controller.js";
import { configureInvoiceProtocol, queryInvoiceProtocol } from "../controllers/invoice-protocol-controller.js";

const router = express.Router();

router.post("/create-invoice", createInvoice);
router.get("/get-invoice", GetInvoice);
router.post("/configure-invoice", configureInvoiceProtocol)
router.get("/query-invoice-protocol", queryInvoiceProtocol)

export default router;