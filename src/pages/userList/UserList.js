import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./userList.css";

export default function UserList() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {field: 'avatar', headerName:'Avatar', width:70, type: 'image',},
    { field: "username", headerName: "username", width: 200 },
    { field: "email", type: "email", headerName: "email", width: 200 },
    {
      field: "Status",
      headerName: "Status",
      width: 90,
    },
    {
      field: "Payment",
      headerName: "Payment",
      width: 160,
    },
    {
      field: "Action",
      headerName: "Action",
      width: 160,
    },
  ];

  const rows = [
    {
      id: 1,
      username: "Bardi Abraham",
      avatar: "images/bard.jpg",
      email: "ab.bard139@gmail.com",
      Status: "active",
      Payment: "$345.78",
    },
    {
      id: 2,
      username: "Bardi Abraham",
      avatar: "images/bard.jpg",
      email: "ab.bard139@gmail.com",
      Status: "active",
      Payment: "$345.78",
    },
    {
      id: 3,
      username: "Bardi Abraham",
      avatar: "images/bard.jpg",
      email: "ab.bard139@gmail.com",
      Status: "active",
      Payment: "$345.78",
    },
    {
      id: 4,
      username: "Bardi Abraham",
      avatar: "images/bard.jpg",
      email: "ab.bard139@gmail.com",
      Status: "active",
      Payment: "$345.78",
    },
    {
      id: 5,
      username: "Bardi Abraham",
      avatar: "images/bard.jpg",
      email: "ab.bard139@gmail.com",
      Status: "active",
      Payment: "$345.78",
    },
  ];
  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
