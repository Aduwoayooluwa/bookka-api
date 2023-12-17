import { bookkeepingProtocolDefinition } from "../utils/protocolDefinition";


export async function bookkeepingProtocolConfig() {
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