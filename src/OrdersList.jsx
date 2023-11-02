import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import "./orderslist.css"

const OrdersList = () => {

  const ordercolumn = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'product', headerName: 'Product', width: 220,
    renderCell: (params) => {
        return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.product}
            </div>
        )
    } 
  },
    { field: 'customer', headerName:'Customer', width: 130},
    { field: 'date', headerName:'Date', width: 100},
    { field: 'amount', headerName:'Amount', width: 100},
    { field: 'method', headerName:'Method', width: 150},
    { field: 'status', headerName:'Status', width: 100},
  ]

    const orderrows =[
        {
            id : 1652655,
            product : "Acer Nitro 5",
            img :"https://s3b.cashify.in/gpro/uploads/2022/04/09151600/acer-nitro-5-an515-58-nhqfhsi001-core-i5-12th-gen-8-gb-512-gb-ssd-windows-11-4-gb-front-display.jpg",
            customer : "John Smith",
            date : "1 March",
            amount : 700,
            method : "Cash on Delivery",
            status : "Approved"
        },
        {
            id : 6846551,
            product : "Playstation 5",
            img : "https://cairosales.com/58252-thickbox_default/sony-playstation-5-standard-edition-dual-sense-charging-and-dual-sense-wireless-cfi-1016a01-mee.jpg",
            customer : "Michael Doe",
            date : "1 March",
            amount : 900,
            method : "Online Payment",
            status : "Pending"
        },
        {
            id : 6154984,
            product : "Redragon S101",
            img : "https://cdn.shopify.com/s/files/1/0012/4957/4961/files/redragon_s101.jpg?v=1620291576",
            customer : "John Smith",
            date : "1 March",
            amount : 35,
            method : "Cash on Delivery",
            status : "Pending"
        },
        {
            id : 7945615,
            product : "Razer Blade 15",
            img : "https://images.selfridges.com/is/image/selfridges/R03927046_M?$PDP_M_ZOOM$",
            customer : "Jane Smith",
            date : "1 March",
            amount : 920,
            method : "Online",
            status : "Approved"
        },
        {
            id : 9915122,
            product : "ASUS ROG Strix",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrb48uDGtbTAvr8HyGAodE861kw90IvZXAzNytjmp5gvwGUHkSJlKjgUgmNGeNa7KsQdo&usqp=CAU",
            customer : "Harold Carol",
            date : "1 March",
            amount : 2000,
            method : "Online",
            status : "Pending"
        }
    ]

    return(
      <div className="ordersTable">
      <DataGrid className="datagrid"
      rows={orderrows}
      columns={ordercolumn}

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

export default OrdersList;