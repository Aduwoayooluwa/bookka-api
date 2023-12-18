import { web5 } from "../../utils/connect-web5.js";
import { bookkeepingProtocolDefinition } from "../../utils/protocolDefinition.js";

export async function saveBookkeeping(req, res) {
    // type: expense, income
    const { recordDate, amount, description, type, Did, category } = req.body;
    
    const bookkeeppingData = {
        recordDate,
        amount,
        description,
        type,
        Did,
        category
    }

    if (!Did) {
        return res.status(400).json({status: 400, message: "Missing Did"})
    }

    if (!recordDate || !amount || !description || !type) { 
        return res.status(400).json({ status: 400, message: "missing either record date or amount or description or type" });
    };

    try {
        const { record, status } = await web5.dwn.records.write({
            data: bookkeeppingData,
            message: {
                recipient: Did,
                dataFormat: "application/json",
                schema: bookkeepingProtocolDefinition.types.amount.schema,
                protocol: bookkeepingProtocolDefinition.protocol,
                protocolPath: "bookkeepping"
            }
        });

        return res.status(200).json({ status, record, Did });

    }
    catch (error) {
        return res.status(400).json({ status: 400, message: error?.message });
    }
}

export async function GetBookkeeping(req, res) {
    const { userDid } = req.query;

    if (!userDid) {
        return res.status(400).json({ status: 400, message: "Missing DID"})
    }

     try {
         const response = await web5.dwn.records.query({
            message: {
                filter: {
                    protocol: "https://codingpastor.dev/bookkeeppingProtocol",
                },
            },
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
        return res.json({ status: response?.status, data:  allRecords})
    }
    catch (error) {
        res.status(400).json({ status: 400, message: error?.message });
    }


}