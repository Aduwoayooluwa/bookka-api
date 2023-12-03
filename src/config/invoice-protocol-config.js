import { Web5 } from "@web5/api"
import { inVoiceProtocolDefinition } from "../utils/protocolDefinition"
import { userDid, web5 } from "../utils/connect-web5";

//const { web5, did: userDid } = await Web5.connect()

export function invoiceProtocolConfig() {
    const { protocol, status } = web5.dwn.protocols.configure({
        message: {
            definition: inVoiceProtocolDefinition
        }
    });
    
    protocol.send(userDid)

    return status;
}

export function invoiceProtocolQuery() {
    const { protocols } = web5.dwn.protocols.query({
        message: {
            filter: {
                protocols: "invoice-protocol"
            }
        }
    });
    console.log(protocols);

    return protocols[0].definition.protocol;
}