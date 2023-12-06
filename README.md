# Bookka Backend API Endpoint

### Booka is a Decentralized platform built on Web 5.0 Technology for Creating Invoices and Bookkeeping. 

[Backend API URL](bookka-api.onrender.com)

1. Verify DID

Request Body Sample
```
    {
        userDid: "did:ion:12hewiwiw193923920203i39393939230202ui"
    }
```

Response 
```
    {
        message:"DID Verified",
        verifiable_credentials: "",
        didDocument: ""
    }
```

2. Create invoice

Request Body Example
```
{
    customerName: "Anita Idemudia",
    items: [{
        name: "Toy 1",
        description: "Toy created by Anita Inc.",
        date: "22-10-2012",
        amount: 10000
    }],
    dueDate: "22-10-2023",
    issueDate:"21-08-2021",
    invoiceNumber: "INVCBOOKKA123",
    paid: false
}
```
