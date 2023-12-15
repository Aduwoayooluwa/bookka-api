import { DidIonMethod } from "@web5/dids";


export class BookkaApp {
    constructor(full_name, isUser) {
        this.full_name = full_name;
        this.isUser = isUser;
    }
}


export async function createVc(req, res) {
    const { issuerDid, userDid, full_name, name } = req.body;
    console.log("done", issuerDid, name)

    return res.json({
        name
    })

    // if (!userDid) {
    //     res.json({ status: 400, message: "Issuer Did must be present" });
    // }

        

    // try {
    //     const vc = await VerifiableCredential.create({
    //         type: "BookkaApp",
    //         issuer: issuerDid,
    //         subject: userDid,
    //         data: new BookkaApp("full_name", true)
    //     })

    //     console.log(vc);
    //     console.log("done", issuerDid, userDid)
    // }
    // catch (error) {
    //     res.json({status: 400, message: error.message})
    // }

}