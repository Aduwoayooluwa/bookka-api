import { inVoiceProtocolDefinition } from "../utils/protocolDefinition.js"
import { userDid, web5 } from "../utils/connect-web5.js";

//const { web5, did: userDid } = await Web5.connect()

export async function invoiceProtocolConfig() {
    const { protocol, status } = await web5.dwn.protocols.configure({
        message: {
            definition: inVoiceProtocolDefinition
        }
    });
    
    protocol.send(userDid)
    return status;
}

export async function invoiceProtocolQuery() {
    const response = await web5.dwn.protocols.query({
        message: {
            filter: {
                dataFormat:"application/json"
            }
        }
    });
    console.log(response)
    // console.log(protocols[0].definition.protocol);

    return response;
}