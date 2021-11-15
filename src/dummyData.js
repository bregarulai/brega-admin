import { DeleteOutline } from "@mui/icons-material";

export const userData = [
  {
    name: "Jan",
    "Active User": 4000,
  },
  {
    name: "Feb",
    "Active User": 3000,
  },
  {
    name: "Mar",
    "Active User": 2000,
  },
  {
    name: "Apr",
    "Active User": 2780,
  },
  {
    name: "May",
    "Active User": 1890,
  },
  {
    name: "Jun",
    "Active User": 2390,
  },
  {
    name: "Jul",
    "Active User": 3490,
  },
  {
    name: "Aug",
    "Active User": 4490,
  },
  {
    name: "Sep",
    "Active User": 1490,
  },
  {
    name: "Oct",
    "Active User": 2490,
  },
  {
    name: "Nov",
    "Active User": 5490,
  },
  {
    name: "Dec",
    "Active User": 2490,
  },
];

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          <img className="userListUserImg" src={params.row.avatar} alt="user" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "status",
    headerName: "Status",
    width: 130,
  },
  {
    field: "transaction",
    headerName: "Transaction Volume",
    width: 160,
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="userListAction">
          <button className="userListActionBtn">Edit</button>
          <DeleteOutline className="userListActionIcon" />
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "sam bowie",
    avatar:
      "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?cs=srgb&dl=pexels-craig-mckay-842980.jpg&fm=jpg",
    email: "john@gmail.com",
    status: "active",
    transaction: "$512.35",
  },
  {
    id: 2,
    username: "mockey blaylock",
    avatar:
      "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?cs=srgb&dl=pexels-craig-mckay-842980.jpg&fm=jpg",
    email: "john@gmail.com",
    status: "active",
    transaction: "$512.35",
  },
  {
    id: 3,
    username: "dan marjerle",
    avatar:
      "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?cs=srgb&dl=pexels-craig-mckay-842980.jpg&fm=jpg",
    email: "john@gmail.com",
    status: "active",
    transaction: "$512.35",
  },
  {
    id: 4,
    username: "luc lonley",
    avatar:
      "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?cs=srgb&dl=pexels-craig-mckay-842980.jpg&fm=jpg",
    email: "john@gmail.com",
    status: "active",
    transaction: "$512.35",
  },
  {
    id: 5,
    username: "bowie johnson",
    avatar:
      "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?cs=srgb&dl=pexels-craig-mckay-842980.jpg&fm=jpg",
    email: "john@gmail.com",
    status: "active",
    transaction: "$512.35",
  },
  {
    id: 6,
    username: "greg nice",
    avatar:
      "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?cs=srgb&dl=pexels-craig-mckay-842980.jpg&fm=jpg",
    email: "john@gmail.com",
    status: "active",
    transaction: "$512.35",
  },
  {
    id: 7,
    username: "sam perking",
    avatar:
      "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?cs=srgb&dl=pexels-craig-mckay-842980.jpg&fm=jpg",
    email: "john@gmail.com",
    status: "active",
    transaction: "$512.35",
  },
  {
    id: 8,
    username: "henry smith",
    avatar:
      "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?cs=srgb&dl=pexels-craig-mckay-842980.jpg&fm=jpg",
    email: "john@gmail.com",
    status: "active",
    transaction: "$242.35",
  },
  {
    id: 9,
    username: "marco polo",
    avatar:
      "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?cs=srgb&dl=pexels-craig-mckay-842980.jpg&fm=jpg",
    email: "john@gmail.com",
    status: "active",
    transaction: "$112.00",
  },
  {
    id: 10,
    username: "james harden",
    avatar:
      "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?cs=srgb&dl=pexels-craig-mckay-842980.jpg&fm=jpg",
    email: "john@gmail.com",
    status: "active",
    transaction: "$312.90",
  },
];
