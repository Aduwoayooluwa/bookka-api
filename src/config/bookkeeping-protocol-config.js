import { bookkeepingProtocolDefinition } from "../utils/protocolDefinition.js";
import { web5 } from "../utils/connect-web5.js";

export async function bookkeepingProtocolConfig(req, res) {
    const { userDid } = req.body;

    if (!userDid) { 
        return res.status(400).json({message: "Missing Did"})
    }

    const { protocol, status } = await web5.dwn.protocols.configure({
        message: {
            definition: bookkeepingProtocolDefinition
        }
    });
    console.log(status)
    return protocol.send(userDid)

}

export async function bookkeepingProtocolQuery() {
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