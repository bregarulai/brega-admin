import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";

import { productRows } from "../../dummyData";
import "./productListPage.css";

const ProductListPage = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const productColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListProduct">
            <img
              className="productListProductImg"
              src={params.row.img}
              alt="product"
            />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 130,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListAction">
            <Link to={`/product/${params.row.id}`}>
              <button className="productListActionBtn">Edit</button>
            </Link>
            <DeleteOutline
              className="productListActionIcon"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className="productListPage">
      <DataGrid
        className="productListDataGrid"
        disableSelectionOnClick
        rows={data}
        columns={productColumns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default ProductListPage;
