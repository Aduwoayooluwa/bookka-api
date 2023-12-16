export function saveBookkeeping(req, res) {
    // type: expense, income
    const { recordDate, amount, description, type } = req.body;
    
    if (!recordDate || !amount || !description || !type) { 
        return res.status(400).json({ status: 400, message: "missing either record date or amount or description or type" });
    };

    try {

    }
    catch (error) {
        return res.status(400).json({ status: 400, message: error?.message });
    }
}