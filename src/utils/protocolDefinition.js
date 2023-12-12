export const inVoiceProtocolDefinition = {
    protocol: "https://codingpastor.dev/invoiceProtocol",
    published: true,
    types: {
        items: {
            dataFormats: ["application/json"],
            schema: "https://schema.org/items"
        },
        dueDate: {
            dataFormats: ["application/json"],
            schema: "https://schema.org/endDate"
        },
        issueDate: {
            dataFormats: ["application/json"],
            schema: "https://schema.org/dateSent"
        },
        paid: {
            dataFormats: ["application/json"],
            schema: "https://schema.org/PaymentStatusType"
        },
        invoice: {
            dataFormats: ["application/json"],
            schema: "https://schema.org/invoice"
        },
        customerName: {
            dataFormats: ["text/plain"],
            schema: "https://schema.org/legalName"
        }
    },
    structure: {
        items: {
            $actions: [
                { who: "anyone", can: "write" },    
                { who: "author", of: "message", can: "read" },    
                { who: "recipient", of: "message", can: "read" },  
            ]
        },
        customerName: {
             $actions: [
                { who: "anyone", can: "write" },    
                { who: "author", of: "message", can: "read" },    
                { who: "recipient", of: "message", can: "read" },  
            ]
        },
        issueDate: {
             $actions: [
                { who: "anyone", can: "write" },    
                { who: "author", of: "message", can: "read" },    
                { who: "recipient", of: "message", can: "read" },  
            ]
        },
        paid: {
             $actions: [
                { who: "anyone", can: "write" },    
                { who: "author", of: "message", can: "read" },    
                { who: "recipient", of: "message", can: "read" },  
            ]
        },
        dueDate: {
             $actions: [
                { who: "anyone", can: "write" },    
                { who: "author", of: "message", can: "read" },    
                { who: "recipient", of: "message", can: "read" },  
            ]
        },
        invoice: {
             $actions: [
                { who: "anyone", can: "write" },    
                { who: "author", of: "message", can: "read" },    
                { who: "recipient", of: "message", can: "read" },  
            ]
        }
    }
}

export const bookkeepingProtocolDefinition = {
    
}