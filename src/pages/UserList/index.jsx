import { DataGrid } from "@mui/x-data-grid";
import React from "react";

import "./userList.css";
import { userRows, userColumns } from "../../dummyData";

const UserList = () => {
  return (
    <div className="userList">
      <DataGrid
        className="userListDataGrid"
        disableSelectionOnClick
        rows={userRows}
        columns={userColumns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
