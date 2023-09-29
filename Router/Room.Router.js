import express from "express";
import {
  GetCreateRomeData,
  GetListAllRoomsWithBooked,
  GetListAllCustomersData,
  GetHowManyTimeCustomerBooked,
  PostBookingRoomWith,
} from "../Controller/Room.controller.js";

const router = express.Router();
router.get("/data", GetCreateRomeData);
router.get("/booked", GetListAllRoomsWithBooked);
router.get("/all/customer/details", GetListAllCustomersData);
router.get("/customer/booked", GetHowManyTimeCustomerBooked);
router.post("/creat/customer", PostBookingRoomWith);

export default router;
