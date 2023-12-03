import { invoiceProtocolConfig, invoiceProtocolQuery } from "../../config/invoice-protocol-config.js"

export async function configureInvoiceProtocol(req, res) {
    try {
        invoiceProtocolConfig()
        return res.json({ status:202, message: "Invoice protocol Configured Successfully."})
    }
    catch (error) {
        return res.json({ status: 500, error: "Internal Error"})
    }
}

export async function queryInvoiceProtocol(req, res) {
    try {
        invoiceProtocolQuery();
        return res.json({ status:202, message: "Invoice protocol queried Successfully."})
    }
    catch (error) {
         return res.json({ status: 500, error: "Internal Error"})
    }
}