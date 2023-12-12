import express from "express";
import { createInvoice, deleteInvoice, GetInvoice } from "../controllers/invoice-controller.js";
import { configureInvoiceProtocol, queryInvoiceProtocol } from "../controllers/invoice-protocol-controller.js";

const router = express.Router();

router.post("/create-invoice", createInvoice);
router.get("/get-invoice/", GetInvoice);
router.post("/configure-invoice", configureInvoiceProtocol)
router.get("/query-invoice-protocol", queryInvoiceProtocol)
router.delete("/delete-all-invoice", deleteInvoice)
export default router;