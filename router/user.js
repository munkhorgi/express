import express, { Router } from "express";
import { getAllUsers , createUser} from "../controller/user.js";


const router = express.Router();

router.get("/user", getAllUsers);
router.post("/users", createUser)

export default router;
