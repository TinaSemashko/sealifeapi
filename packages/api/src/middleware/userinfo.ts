// import Express from "express";
// import getUserInfo from "../api/userInfo";
// import * as userModel from "../models/user";
// import { User } from "../models/types/user";

// export interface UserResponse extends Express.Request {
//   user?: User;
// }

// const userInfo = async (
//   req: UserResponse,
//   res: Express.Response,
//   next: Express.NextFunction
// ) => {
//   try {
//     if (
//       req.user &&
//       req.auth?.payload?.sub &&
//       req.auth.payload.sub === req.user.id
//     ) {
//       next();
//     }

//     const profileAuth = await getUserInfo(req.auth?.token as string);
//     const profileUser = await userModel.findByEmail(profileAuth.data.email);
//     if (!profileUser) {
//       req.user = {
//         id: profileAuth.data.sub,
//         name: profileAuth.data.name,
//         email: profileAuth.data.email,
//         image: profileAuth.data.picture,
//       };
//       const user = await userModel.create(req.user as CreateUser);
//       if (!user) {
//         return res.status(403).send({ message: "A user has not been created" });
//       }
//     } else {
//       req.user = {
//         id: profileUser.id,
//         name: profileUser.name,
//         email: profileUser.email,
//         image: profileUser.image,
//       };
//     }
//     next();
//   } catch (error) {
//     console.log(error);
//     res.status(401);
//   }
// };

// export default attachUser;
