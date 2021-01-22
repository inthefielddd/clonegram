import express from "express";
import { getJoin, postJoin, login, logout } from "../controllers/userController";
import { home, search } from "../controllers/pictureController";
import routes from "../routes";

export const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.search, search);

//join
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, login);

globalRouter.get(routes.logout, logout);
