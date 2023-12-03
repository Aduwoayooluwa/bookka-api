import { Web5 } from "@web5/api";


async function writeDid(data) {
    const { web5, did: userDid } = await Web5.connect({
        techPreview: {
            dwnEndpoints: ["https://localhost:8000/"]
        }
    });
    //console.log("did", userDid.create("ion"))
    //const did = await web5.did.resolve(`did:ion:EiCPts4GPRGP4A8DJryYszMboh539iz1_qF_Lj_jna5EOw:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJkd24tc2lnIiwicHVibGljS2V5SndrIjp7ImNydiI6IkVkMjU1MTkiLCJrdHkiOiJPS1AiLCJ4IjoibW5uUU5OcG1xZFR4aFctMXd3LVRkdURSRVRJVzJFemtSSGdJSE13NVNpdyJ9LCJwdXJwb3NlcyI6WyJhdXRoZW50aWNhdGlvbiJdLCJ0eXBlIjoiSnNvbldlYktleTIwMjAifSx7ImlkIjoiZHduLWVuYyIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJlWWd4d3dkbGdfQTg1VmtmenhOMXAtYXZxTXN1NVV0NjRfMm5xdTBIYXpZIiwieSI6InM4MFI0akc2OHNySkRuYXJ3ZEdVdFlYeTV4QjNHSmJEem5nLVlibHhidjAifSwicHVycG9zZXMiOlsia2V5QWdyZWVtZW50Il0sInR5cGUiOiJKc29uV2ViS2V5MjAyMCJ9XSwic2VydmljZXMiOlt7ImlkIjoiZHduIiwic2VydmljZUVuZHBvaW50Ijp7ImVuY3J5cHRpb25LZXlzIjpbIiNkd24tZW5jIl0sIm5vZGVzIjpbImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduMCIsImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduMSJdLCJzaWduaW5nS2V5cyI6WyIjZHduLXNpZyJdfSwidHlwZSI6IkRlY2VudHJhbGl6ZWRXZWJOb2RlIn1dfX1dLCJ1cGRhdGVDb21taXRtZW50IjoiRWlDb2Z0MWlhMlB2bGxJTVpaOHY2OG42TDIwcVZqRHREMlozYzdyQ1V5dmw3QSJ9LCJzdWZmaXhEYXRhIjp7ImRlbHRhSGFzaCI6IkVpQ0pkaFhvVG5peXo2WGxJVnZPRW5mWUVhQXlRWDhGQzNneXlKb1I0U3lqT3ciLCJyZWNvdmVyeUNvbW1pdG1lbnQiOiJFaUFqSzgtNHBTb2psYkdvMHpxYklBam9SLTNkUjFHM1o5dndJV3BWOFo2TkJ3In19`);
    
    // console.log(did)
    // if (did.didDocument.id) {
        
    // }

    const { record } = await web5.dwn.records.create({
        data: {
            name: "Aaa mmm",
            age: "23"
        },
         message: {
                recipient: 'did:example:alice',
                dataFormat: "application/json",
            }
    })

    //console.log(record)

    const _data = await web5.dwn.records.read({
        message: {
            filter: {
                recordId: record.id
            }
        }
    });
    // const { record } = await web5.dwn.records.create({
    //     data,
    //     message: {
    //         dataFormat: "application/json",
    //     }
    // })

    // // read the text,
    // const readText = await record.data.text();

    // return JSON.parse(readText)

    //return ("writeResult", record);
    return _data
}
const userData = {
    name: "Ayo",
    age: 20,
    likes: "Development"
}
// writeDid(JSON.stringify(userData)).then((response) => {
//     console.log(response)
//     console.log(response?.name)
// })

writeDid("hello").then((res) => console.log(res))