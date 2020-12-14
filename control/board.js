const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const db = require("../model");
