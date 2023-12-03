import express from "express"
import AuthRoutes from "./api/routes/auth-routes.js";
import InvoiceRoutes from "./api/routes/invoice-routes.js";
const app = express();


app.use(express.json());

const PORT = process.env.PORT || 8000

app.use("/api/auth", AuthRoutes);
app.use("/api", InvoiceRoutes)

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
})