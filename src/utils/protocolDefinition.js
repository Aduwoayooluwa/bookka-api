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
    protocol: "https://codingpastor.dev/bookkeepingProtocol",
    published: true,
    types: {
        description: {
            dataFormats: ["application/json"],
            schema: "https://schema.org/items"
        },
        amount: {
            dataFormats: ["application/json"],
            schema: "https://schema.org/endDate"
        },
        date: {
            dataFormats: ["application/json"],
            schema: "https://schema.org/dateSent"
        },
        type: {
            dataFormats: ["application/json"],
            schema: "https://schema.org/PaymentStatusType"
        },
        category: {
            dataFormats: ["text/plain"],
            schema: "https://schema.org/legalName"
        }
    },
    structure: {
        description: {
            $actions: [
                { who: "anyone", can: "write" },    
                { who: "author", of: "message", can: "read" },    
                { who: "recipient", of: "message", can: "read" },  
            ]
        },
        amount: {
             $actions: [
                { who: "anyone", can: "write" },    
                { who: "author", of: "message", can: "read" },    
                { who: "recipient", of: "message", can: "read" },  
            ]
        },
        date: {
             $actions: [
                { who: "anyone", can: "write" },    
                { who: "author", of: "message", can: "read" },    
                { who: "recipient", of: "message", can: "read" },  
            ]
        },
        type: {
             $actions: [
                { who: "anyone", can: "write" },    
                { who: "author", of: "message", can: "read" },    
                { who: "recipient", of: "message", can: "read" },  
            ]
        },
        category: {
             $actions: [
                { who: "anyone", can: "write" },    
                { who: "author", of: "message", can: "read" },    
                { who: "recipient", of: "message", can: "read" },  
            ]
        },
      
    }
}