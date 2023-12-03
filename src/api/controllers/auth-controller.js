import { Web5 } from "@web5/api";


// create did
export const createDid = async (req, res) => {
    const { did } = await Web5.connect();

    try {
        return res.json({ did });
    }
    catch (error) {
        return res.json({status: 500, message: "Internal Error"})
    }

}
// connect the did...
export const authDid = async (req, res) => {
    const { web5 } = await Web5.connect()

    const { userDid } = req.body;

    // const signature = await web5.did.sign(userDid);

    // const isAuthentic = await web5.did.verify(userDid, signature);
    

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
        return res.json({ status: 500, message: "Internal Error" });
    }
}