import { userDid, web5 } from "../../utils/connect-web5.js";
import { DidIonMethod } from "@web5/dids";
import { VerifiableCredential } from "@web5/credentials";
import { BookkaApp } from "./vc/index.js";


// create did
export const createDid = async (req, res) => {
    try {
        const didIon = await DidIonMethod.create({
            publish: true,
        });

        return res.json({ userDid: didIon });
    }
    catch (error) {
        return res.json({status: 400, message: error.message})
    }
}
// connect the did and create an account ...
export const authDid = async (req, res) => {
    // get the did and private key from the user
    const { userDid, fullName } = req.body;
    console.log(fullName);
    if (!userDid) {
        return res.json({ status: 401, message: "Missing Did" });
    }
    try {
        const issuerDid = await DidIonMethod.create();
        // resolve did. Validate if it exist
        const did = await web5.did.resolve(userDid);

        
   
        if (did) {
            const vc = await VerifiableCredential.create({
                type: "BookkaApp",
                issuer: issuerDid.did,
                subject: userDid,
                data: new BookkaApp(fullName, true)
            })

     
            // sign the credentials
            const signedVcJwt = await vc.sign({ did: issuerDid });
            return res.json({ status: 201, message: "You are confirmed", signedVcJwt });

        }
        
    }
    catch (error) {
        console.log(error)
        return res.json({ status: 400, message: error.message });
    }
}

export const validateUser = async (req, res) => {
    const { signedVcJwt } = req.body

    try {
        await VerifiableCredential.verify({ vcJwt: signedVcJwt });
        res.json({message: "Verification successful", status: 201})
    } 
    catch (error) {
        return res.json({
            message: error.message,status: 400
        })
    }
}