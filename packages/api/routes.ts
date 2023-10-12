import { Router } from "express";
import {
  getAllUsers,
  getProfile,
  getUserById,
  createNewUser,
  updateUserById,
  removeUser,
  getAdmin,
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
import authorizationAdmin from "./src/middleware/authorisation";

const router = Router();

router.get("/user", getProfile(userModel));
router.get("/users", authorizationAdmin, getAllUsers(userModel));
router.get("/getuserbyid", getUserById(userModel));
router.post("/create", createNewUser(userModel));
router.put("/update", authorizationAdmin, updateUserById(userModel));
router.delete("/delete", authorizationAdmin, removeUser(userModel));
router.get("/me", authorizationAdmin, getAdmin(userModel));

router.get("/bateaux", authorization, getALLBateaux(bateauModel));
router.get("/bateauxbytype", authorization, getBateauByTypeModel(bateauModel));

router.get("/reviews", authorization, getReviews(reviewModel));
router.get("/getreviewsbymodel", authorization, getReviewByModel(reviewModel));
router.post("/createreview", authorization, createNewReview(reviewModel));
router.delete("/deletereviw", authorization, removeReviewById(reviewModel));

export default router;
