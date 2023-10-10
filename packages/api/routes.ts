import { Router } from "express";
import {
  getAllUsers,
  getProfile,
  getUserById,
  createNewUser,
  updateUserById,
  removeUser,
} from "./src/controllers/user";
import * as userModel from "./src/models/user";
import { getALLBateaux, getBateauByTypeModel } from "./src/controllers/bateau";
import * as bateauModel from "./src/models/bateau";
import {
  getReviews,
  getReviewByModel,
  createNewReview,
  removeReviewById,
} from "./src/controllers/review";
import * as reviewModel from "./src/models/review";
import authorization from "./src/middleware/authorisation";

const router = Router();
// router.use(authorization);
router.get("/", (req, res) => {});

router.get("/user", getProfile(userModel));
router.get("/users", getAllUsers(userModel));
router.get("/getuserbyid", getUserById(userModel));
router.post("/create", createNewUser(userModel));
router.put("/update", updateUserById(userModel));
router.delete("/delete", removeUser(userModel));

router.get("/bateaux", getALLBateaux(bateauModel));
router.get("/bateauxbytype", getBateauByTypeModel(bateauModel));

router.get("/reviews", getReviews(reviewModel));
router.get("/getreviewsbyid", getReviewByModel(reviewModel));
router.post("/createreview", createNewReview(reviewModel));
router.delete("/deletereviw", removeReviewById(reviewModel));

export default router;
