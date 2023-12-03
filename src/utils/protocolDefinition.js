export const inVoiceProtocolDefinition = {
    protocol: "https://codingpastor.dev/invoice-protocol",
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
            schema: "https://schema.org/issueNumber"
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
        invoiceNumber: {
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