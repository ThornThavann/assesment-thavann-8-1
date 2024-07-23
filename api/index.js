import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import summaryRoutes from "./routes/summary.js";
import farmerRoutes from "./routes/farmer.js"
import farmlandRoutes from "./routes/farmland.js"
import provinceRoutes from "./routes/province.js"
import districtRoutes from "./routes/district.js"
import accountRoutes from "./routes/account.js"
import cropCycleRoutes from "./routes/cropCycle.js"
import cropRoute from "./routes/crop.js";
import cropTypeRoute from "./routes/cropType.js"

config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(json());

app.use("/api/crops", cropRoute);
app.use("/api/crop-types", cropTypeRoute);
app.use("/api/accounts", accountRoutes);
app.use("/api/provinces", provinceRoutes);
app.use("/api/districts", districtRoutes);
app.use("/api/farmers", farmerRoutes);
app.use("/api/farmlands", farmlandRoutes);
app.use("/api/crop-cycles", cropCycleRoutes);
app.use("/api/summary", summaryRoutes);

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () =>
    console.log("Server running on http://localhost:" + PORT)
  );
}

export default app;
