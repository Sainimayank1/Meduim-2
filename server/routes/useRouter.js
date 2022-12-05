import express from "express";
import { registeration , registerValidation} from "../controller/UserRegisteration.js";
import {loginValidation , login} from "../controller/UserLogin.js";
import UserCreatePost from "../controller/UserCreatePost.js";
import auth from "../utlis/auth.js";
import fetchPosts from "../controller/fetchPosts.js";
import fetchPost from "../controller/fetchPost.js";
import {updaetValidation, updatePost} from '../controller/updatePost.js'
import updateImage from "../controller/updateImage.js";
import postDelete from '../controller/postDelete.js'
import updateName from "../controller/updateName.js";
import {updatePassword ,updatePasswordValidation} from "../controller/updatePassword.js";
import homePosts from "../controller/homePosts.js";
import details from "../controller/details.js";

const router = express.Router();





//          REDIRECT TO USERRIGESTRATION CONTROLLER

router.get('/homePosts/:page',homePosts);

router.post("/register", registerValidation, registeration)
router.post("/login", loginValidation, login)



router.post('/create_post',auth,UserCreatePost)
router.get('/posts/:id/:page', auth, fetchPosts);

router.get('/post/:id',auth,fetchPost);

router.post('/update',[auth , updaetValidation],updatePost)
router.post('/updateImage',auth,updateImage);

router.get('/delete/:id',auth,postDelete);
router.post('/updateName',auth,updateName);
router.post('/updatePassword' ,[auth, updatePasswordValidation],updatePassword)

router.get('/details/:id',details)


export default router;

