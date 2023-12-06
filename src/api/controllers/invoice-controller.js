import { web5, userDid } from "../../utils/connect-web5.js"

export async function GetInvoice(req, res) {

    const { userDid } = req.query;


    if (!userDid) {
        return res.json({ status: 400, message: "Missing DID"})
    }

    try {
        const response = await web5.dwn.records.query({
            from: userDid,
            message: {
                filter: {             
                   dataFormat:"application/json"
                }
            }
        });
        return res.json({ status: response.status, data: response.records })
    }
    catch (error) {
        res.json({ status: 400, message: error?.message });
    }

}

export async function createInvoice(req, res) {
    //  invoice data contains
    //  customerName,
    // items: [{ description: String, amount: Number }],
    // issueDate,
    // dueDate,
    // paid: Boolean

    const { customerName, items, issueDate, dueDate, paid, invoiceNumber } = req.body;

    const invoiceData = {
        customerName, items, issueDate, dueDate, paid, invoiceNumber
    };
    console.log(invoiceData)
    if (!customerName || !items || !issueDate || !paid || !dueDate || !invoiceNumber) {
        return res.json({ message: "Missing some invoice fields.", status: 400 });
    }


    try {
        const { record } = await web5.dwn.records.create({
            data: invoiceData,
            message: {
                recipient: 'did:example:alice',
                dataFormat: "application/json",
                schema: "https://schema.org/Invoice",
                //  protocol: 'http://codingpastor.dev/test',
                // protocolPath: 'invoice-test',
                published: true,
            }
        });
        const _data = await web5.dwn.records.read({
            message: {
                filter: {
                    recordId: record.id
                }
            }
        });
       const { status: initialstatus } = await record.send(userDid)
        
        return res.json({ status: 201, message: "Invoice created Successfully", creationStatus: initialstatus });
    }
    catch (error) {
        return res.json({ status: 500, message: error?.message });
    }
}