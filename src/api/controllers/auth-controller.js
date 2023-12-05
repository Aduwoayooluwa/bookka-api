import { userDid, web5 } from "../../utils/connect-web5.js";
// create did
export const createDid = async (req, res) => {
    try {

        return res.json({ userDid });
    }
    catch (error) {
        return res.json({status: 500, message: error.message})
    }
}
// connect the did...
export const authDid = async (req, res) => {

    const { userDid } = req.body;

    // const signature = await web5.did.sign(userDid);

    if (!userDid) {
        return res.json({ status: 401, message: "No DID found" });
    }

    try {
        const did = await web5.did.resolve(userDid);


        if (did.didDocument.id) {

            return res.json({ status: 201, message: "DID confirmed" });

        }
        
    }
    catch (error) {
        return res.json({ status: 500, message: error.message });
    }
}