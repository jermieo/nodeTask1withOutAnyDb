// Create a Room with
const Room = [
  {
    NumberOfSeatsAvailable: 100,
    AmenitiesInRome: "A/c or Non-A/c,Attached bathroom,tv,wifi",
    price_1_hour: 1000,
  },
];
// Booking a Romm with
const BookingRoomDetails = [
  {
    CustomerName: "Jermieo",
    Room_Id: 1,
    Room_Name: "A/C",
    Date: "28/09/23",
    start_Time: "10:Am",
    End_Time: "6:Pm",
    BookingStatus: true,
    Booking_Id: 1101,
    Customer_Id: 101,
  },
  {
    CustomerName: "Abi",
    Room_Id: 2,
    Room_Name: "Non-A/C",
    Date: "27/09/23",
    start_Time: "10:Am",
    End_Time: "6:Pm",
    BookingStatus: true,
    Booking_Id: 1102,
    Customer_Id: 102,
  },
  {
    CustomerName: "Jermieo",
    Room_Id: 3,
    Room_Name: "A/C",
    Date: "26/09/23",
    start_Time: "10:Am",
    End_Time: "6:Pm",
    BookingStatus: true,
    Booking_Id: 1103,
    Customer_Id: 101,
  },
  {
    CustomerName: "Yamuna",
    Room_Id: 4,
    Room_Name: "A/C",
    Date: "25/09/23",
    start_Time: "10:Am",
    End_Time: "6:Pm",
    BookingStatus: false,
    Booking_Id: 1104,
    Customer_Id: 103,
  },
  {
    CustomerName: "Yosuva",
    Room_Id: 5,
    Room_Name: "Non-A/C",
    Date: "24/09/23",
    start_Time: "10:Am",
    End_Time: "6:Pm",
    BookingStatus: true,
    Booking_Id: 1105,
    Customer_Id: 104,
  },
  {
    CustomerName: "Alex",
    Room_Id: 6,
    Room_Name: "A/C",
    Date: "23/09/23",
    start_Time: "10:Am",
    End_Time: "6:Pm",
    BookingStatus: false,
    Booking_Id: 1106,
    Customer_Id: 105,
  },
  {
    CustomerName: "Nishanth",
    Room_Id: 7,
    Room_Name: "A/C",
    Date: "22/09/23",
    start_Time: "10:Am",
    End_Time: "6:Pm",
    BookingStatus: false,
    Booking_Id: 1107,
    Customer_Id: 106,
  },
];
// 1) Create a Room with
export const GetCreateRomeData = async function (req, res) {
  await res.status(200).json({ message: "Room Available Details", data: Room });
};
// 3) List all Rooms With Booked Data with
export const GetListAllRoomsWithBooked = async function (req, res) {
  const BookedRoomsStatus = BookingRoomDetails.filter(
    (item) => item.BookingStatus == true
  );
  await res
    .status(200)
    .json({ message: "Booked Room Details", data: BookedRoomsStatus });
};
// 4) List all Customers data
export const GetListAllCustomersData = async function (req, res) {
  await res
    .status(200)
    .json({ message: "List All Customers Details", data: BookingRoomDetails });
};
// 5) List How Many time a Customers Booked
export const GetHowManyTimeCustomerBooked = async function (req, res) {
  let array = [];
  let unique_Id = [];
  for (let i = 0; i < BookingRoomDetails.length; i++) {
    let data = BookingRoomDetails[i].Customer_Id;
    if (!array.includes(data)) {
      array.push(data);
    } else {
      unique_Id.push(data);
    }
  }
  const unique_Customer = BookingRoomDetails.filter(
    (item) => item.Customer_Id == unique_Id
  );
  await res
    .status(200)
    .json({ message: "Booked Room Details", data: unique_Customer });
};
// 2) Booking a Room With
export const PostBookingRoomWith = async function (req, res) {
  const obj = {
    CustomerName: req.body.CustomerName,
    Date: req.body.Date,
    Start_time: req.body.Start_time,
    End_Time: req.body.End_Time,
    Room_Id: BookingRoomDetails.length + 1,
  };
  let finddata = BookingRoomDetails.find((item) => item.Date == obj.Date);

  if (!finddata) {
    BookingRoomDetails.push(obj);
    await res
      .status(200)
      .json({ message: "Customer Created ", data: BookingRoomDetails });
  } else {
    res.status(404).json({
      message:
        "Allready Customer Book Room this Data so pls Kindly book Some other Data thanyou",
    });
  }
};
