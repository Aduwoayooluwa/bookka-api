import { web5, userDid } from "../../utils/connect-web5.js"
import { inVoiceProtocolDefinition } from "../../utils/protocolDefinition.js";

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
        
        const allRecords = await Promise.all(
          response.records.map(async (record) => {
            const data = await record.data.json();
            console.log("dm", data)
            return {
              ...data, 
              recordId: record.id 
            };
          })
        );
        return res.json({ status: response.status, data:  allRecords})
    }
    catch (error) {
        res.json({ status: 400, message: error?.message });
    }

}

export async function createInvoice(req, res) {
    const {
        customerName,
        customerEmail,
        businessCity,
        businessCountry,
        totalPrice,
        items,
        businessName,
        country,
        city,
        businessPhoneNumber,
        businessEmail,
        customerAddress,
        businessAddress,
        customerPhonenumber,
        invoiceDate,
        dueDate,
        extraNote,
        termsAndConditions,
        customerCountry,
        invoiceNumber,
        paid,
    } = req.body;

    // Check for missing fields in the request body
    const requiredFields = [
        'customerName',
        'items',
        'invoiceDate',
        'dueDate',
        'invoiceNumber',
        // 'paid',
    ];

    const missingFields = requiredFields.filter((field) => !req.body[field]);

    if (missingFields.length > 0) {
        return res.status(400).json({ message: `Missing fields: ${missingFields.join(', ')}` });
    }

    const invoiceData = {
        customerName,
        customerEmail,
        businessCity,
        businessCountry,
        totalPrice,
        items,
        businessName,
        country,
        city,
        businessPhoneNumber,
        businessEmail,
        customerAddress,
        businessAddress,
        customerPhonenumber,
        invoiceDate,
        dueDate,
        extraNote,
        termsAndConditions,
        customerCountry,
        invoiceNumber,
        paid,
    };

    try {
        const { record, status } = await web5.dwn.records.write({
            data: invoiceData,
            message: {
                recipient: userDid, // You need to define 'userDid' somewhere
                dataFormat: 'application/json',
                schema: inVoiceProtocolDefinition.types.invoice.schema,
                protocol: inVoiceProtocolDefinition.protocol,
                protocolPath: 'invoice',
            },
        });

        const _data = await web5.dwn.records.read({
            message: {
                filter: {
                    recordId: record.id,
                },
            },
        });



        return res.status(200).json({ status, record, userDid });
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(400).json({ message: error.message });
    }
}


export const deleteInvoice = async (req, res) => {
    try {
        let delStatus; // status of deleted record


        const { records, status } = await web5.dwn.records.query({
            form: userDid,
            message: {
                filter: {
                    dataFormat: "application/json"
                }
            }
        });
        console.log(records)
        for (const record of records) { 
            console.log("a")
            const deletedRecords = await record.delete();

            delStatus = deletedRecords.status;
            console.log(delStatus)
        }

        return res.json({status, message: "Deleted Invoice", delStatus})
    }
    catch (error) {
        res.json({error})
    }
}