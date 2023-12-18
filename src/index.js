import express from "express"
import AuthRoutes from "./api/routes/auth-routes.js";
import InvoiceRoutes from "./api/routes/invoice-routes.js";
import BookkeepingRoutes from "./api/routes/bookkeepping-routes.js";

import cors from "cors";

const app = express();


app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000


app.use("/api/auth", AuthRoutes);
app.use("/api", InvoiceRoutes);
app.use("/api", BookkeepingRoutes);
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
})