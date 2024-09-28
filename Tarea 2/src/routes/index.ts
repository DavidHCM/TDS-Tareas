import express from "express";
import userRoutes from "./users.routes";
import registerRoutes from "./register.routes";
const router = express.Router();

router.use(express.json());

router.use("/users", userRoutes);
router.use("/register", registerRoutes);



export default router;