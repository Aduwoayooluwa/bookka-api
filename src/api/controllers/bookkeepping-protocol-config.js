import { bookkeepingProtocolConfig, bookkeepingProtocolQuery } from "../../config/bookkeeping-protocol-config.js"

export async function configureInvoiceProtocol(req, res) {
    try {
        bookkeepingProtocolConfig()
        return res.status(202).json({ status:202, message: "Bookkeepping protocol Configured Successfully."})
    }
    catch (error) {
        return res.status(500).json({ status: 500, error: "Internal Error"})
    }
}

export async function queryInvoiceProtocol(req, res) {
    try {
        bookkeepingProtocolQuery();
        return res.status(202).json({ status:202, message: "Bookkeepping protocol queried Successfully."})
    }
    catch (error) {
         return res.status(500).json({ status: 500, error: "Internal Error"})
    }
}