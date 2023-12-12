import { userDid, web5 } from "../../utils/connect-web5.js";

// create did
export const createDid = async (req, res) => {
    try {

        return res.json({ userDid });
    }
    catch (error) {
        return res.json({status: 400, message: error.message})
    }
}
// connect the did...
export const authDid = async (req, res) => {
    // get the did and equivalent did from the user
    const { userDid, equivalentId } = req.body;

    if (!userDid) {
        return res.json({ status: 401, message: "No DID found" });
    }
    else if (!equivalentId) {
         return res.json({ status: 401, message: "No Equivalent ID found" });
    }

    try {
        // resolve did. Validate if it exist
        const did = await web5.did.resolve(userDid);
        const _equivalentId = did.didDocumentMetadata?.equivalentId[0];
        console.log(did.didDocumentMetadata?.equivalentId[0]);


        if (did.message == "DID confirmed" && equivalentId === _equivalentId) {

            return res.json({ status: 201, message: "DID confirmed", did });

        }
        else {
            return res.json({
                status: 400, messsage: "Error validating Did"
            });
        }
        
    }
    catch (error) {
        return res.json({ status: 400, message: error.message });
    }
}