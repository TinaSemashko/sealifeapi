import { Router } from "express";
import {
  getAllUsers,
  getProfile,
  getUserById,
  createNewUser,
} from "./src/controllers/user";
import * as userModel from "./src/models/user";
import { getALLBateaux } from "./src/controllers/bateau";
import * as bateauModel from "./src/models/bateau";
import authorization from "./src/middleware/authorisation";

const router = Router();
// router.use(authorization);
router.get("/", (req, res) => {});

router.get("/user", getProfile(userModel));
router.get("/users", getAllUsers(userModel));
router.get("/getuserbyid", getUserById(userModel));
router.post("/create", createNewUser(userModel));

router.get("/bateaux", getALLBateaux(bateauModel));

export default router;
