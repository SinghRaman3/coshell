import express from "express"
import { fetchAll } from "../controllers/productsController.js"

const router = express.Router()

router.get("/getAll", fetchAll)

export default router