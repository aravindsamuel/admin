import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { ProductColumn } from "./datatablesource";
import "./productslist.css"
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";


const ProductsList = () =>{
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleChange = (id) => {
    const userConfirmed = window.confirm('Are you sure want to delete?');
    if (userConfirmed) {
      setData(data.filter((item) => item.id !== id));
    }
  };

  const actionColumn = [{ field: 'action', headerName: '', width: 130,
  renderCell: (params) => {
    const product = params.row.id
    return (
      <div className="cellAction">
        <Link to={`/products/${product}`} style={{textDecoration:"none"}}>
        <div className="viewbutton">View</div>
        </Link>
        <div className="deletebutton" onClick={() => handleChange(product)}>Delete</div>
      </div>
    )
  }},
  ]

    return(
        <div className="productTable">
        <DataGrid className="datagrid"
        rows={data}
        columns={ProductColumn.concat(actionColumn)}

        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8},
          },
        }}
        pageSizeOptions={[8]}
      />
        </div>
    );
}

export default ProductsList;