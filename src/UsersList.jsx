import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { UserColumn, UserRows} from "./datatablesource.js";
import "./userslist.css"
import { Link } from "react-router-dom";
import { useState} from "react";


const UsersList = () =>{
  const [data, setData] = useState(UserRows);

  const handleChange = (id) => {
    const userConfirmed = window.confirm('Are you sure want to delete?');
    if (userConfirmed) {
      setData(data.filter((item) => item.id !== id));
    }
  };

  const actionColumn = [{ field: 'action', headerName: '', width: 130,
  renderCell: (params) => {
    const user = params.row.id
    return (
      <div className="cellAction">
        <Link to={`/users/${user}`} style={{textDecoration:"none"}}>
        <div className="viewbutton">View</div>
        </Link>
        <div className="deletebutton" onClick={() => handleChange(user)}>Delete</div>
      </div>
    )
  }},
  ]

    return(
        <div className="userTable">
        <DataGrid className="datagrid"
        rows={data}
        columns={UserColumn.concat(actionColumn)}

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

export default UsersList;