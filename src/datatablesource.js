
export const UserColumn = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 230,
    renderCell: (params) => {
        return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
            </div>
        )
    } 
},
    { field: 'email', headerName:'Email', width: 205},
]

export const UserRows = [
    {
      id: 1,
      username: 'Leanne Graham',
      img: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/e38e6d46-5fc4-4828-7bae-560e64795c00/width=450/00114-2733780885.jpeg',
      email: 'grahamlea@gmail.com',
      address: '123 Main St',
      country: 'United States',
      phone: "+101 52367661",
      chartdata: [
        {name:'Jan', Total:2200},
        {name:'Feb', Total:3000},
        {name:'Mar', Total:500},
        {name:'Apr', Total:500},
        {name:'May', Total:900},
        {name:'Jun', Total:3700},
        {name:'Jul', Total:1000},
        {name:'Aug', Total:2000},
        {name:'Sep', Total:7700},
        {name:'Oct', Total:2000},
        {name:'Nov', Total:2000},
        {name:'Dec', Total:5000}
      ]     
    },
    {
      id: 2,
      username: 'Ervin Howell',
      img: 'https://avatars.githubusercontent.com/u/50024881?v=4',
      email: 'ervin1023@gmail.com',
      address: '456 Elm St',
      country: 'Canada',
      phone: "+111 2367661",
      chartdata: [
        {name:'Jan', Total:700},
        {name:'Feb', Total:2500},
        {name:'Mar', Total:7000},
        {name:'Apr', Total:5000},
        {name:'May', Total:900},
        {name:'Jun', Total:5700},
        {name:'Jul', Total:900},
        {name:'Aug', Total:7000},
        {name:'Sep', Total:7770},
        {name:'Oct', Total:1000},
        {name:'Nov', Total:500},
        {name:'Dec', Total:700}
      ]
    },
    {
      id: 3,
      username: 'Clementine Bauch',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQqQVtMvT91V34_k8QXuhgOOYNc7lskIqeVQ8um34jFgF6Rv9clYNWu4yKhECPfKntzw&usqp=CAU',
      email: 'clement2035@gmail.com',
      address: '789 Oak St',
      country: 'Australia',
      phone: "+45 52367661",
      chartdata: [
        {name:'Jan', Total:200},
        {name:'Feb', Total:1000},
        {name:'Mar', Total:500},
        {name:'Apr', Total:500},
        {name:'May', Total:1000},
        {name:'Jun', Total:5700},
        {name:'Jul', Total:3500},
        {name:'Aug', Total:6000},
        {name:'Sep', Total:700},
        {name:'Oct', Total:200},
        {name:'Nov', Total:2500},
        {name:'Dec', Total:7000}
      ]
    },
    {
      id: 4,
      username: 'Patricia Lebsack',
      img: 'https://i.pinimg.com/1200x/1a/fc/d2/1afcd276beba84c680006c388f169c8c.jpg',
      email: 'patrici05@gmail.com',
      address: '101 Pine St',
      country: 'United Kingdom',
      phone: "+81 052367661",
      chartdata: [
        {name:'Jan', Total:7200},
        {name:'Feb', Total:5000},
        {name:'Mar', Total:500},
        {name:'Apr', Total:700},
        {name:'May', Total:900},
        {name:'Jun', Total:5700},
        {name:'Jul', Total:1500},
        {name:'Aug', Total:2050},
        {name:'Sep', Total:700},
        {name:'Oct', Total:2300},
        {name:'Nov', Total:500},
        {name:'Dec', Total:500}
      ]
    },
    {
      id: 5,
      username: 'Chelsey Dietrich',
      img: 'https://favim.com/pd/s8/orig/151213/beauty-blonde-eyes-fashion-Favim.com-3762638.jpg',
      email: 'dietrich502@gmail.com',
      address: '555 Cedar St',
      country: 'France',
      phone: "+55 52367661",
      chartdata: [
        {name:'Jan', Total:5200},
        {name:'Feb', Total:3020},
        {name:'Mar', Total:800},
        {name:'Apr', Total:5700},
        {name:'May', Total:9000},
        {name:'Jun', Total:3700},
        {name:'Jul', Total:1700},
        {name:'Aug', Total:2070},
        {name:'Sep', Total:7500},
        {name:'Oct', Total:1000},
        {name:'Nov', Total:200},
        {name:'Dec', Total:500}
      ]
    },
    {
      id: 6,
      username: 'Mrs. Dennis Schulist',
      img: 'https://i.pinimg.com/564x/34/19/bb/3419bb177d5675b8708b091372c2932d.jpg',
      email: 'dennis1206@gmail.com',
      address: '999 Maple St',
      country: 'Germany',
      phone: "+23 2367661",
      chartdata: [
        {name:'Jan', Total:200},
        {name:'Feb', Total:300},
        {name:'Mar', Total:500},
        {name:'Apr', Total:500},
        {name:'May', Total:900},
        {name:'Jun', Total:3700},
        {name:'Jul', Total:1000},
        {name:'Aug', Total:2000},
        {name:'Sep', Total:7700},
        {name:'Oct', Total:2500},
        {name:'Nov', Total:2050},
        {name:'Dec', Total:8000}
      ]
    },
    {
      id: 7,
      username: 'Kurtis Weissnat',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHVN6MuwVq8BhL_Wv3gkZ3XTcodjncXoJdWeG_NAd8xYippH03cBlD2mSi6OW3AWvQu8&usqp=CAU',
      email: 'kurtis529@gmail.com',
      address: '111 Birch St',
      country: 'Spain',
      phone: "+65 952367661",
      chartdata: [
        {name:'Jan', Total:2600},
        {name:'Feb', Total:3800},
        {name:'Mar', Total:550},
        {name:'Apr', Total:850},
        {name:'May', Total:900},
        {name:'Jun', Total:3800},
        {name:'Jul', Total:3070},
        {name:'Aug', Total:200},
        {name:'Sep', Total:700},
        {name:'Oct', Total:1000},
        {name:'Nov', Total:2000},
        {name:'Dec', Total:5700}
      ]
    },
    {
      id: 8,
      username: 'Nicholas Runolfsdottir V',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Y01dT7h6AWqOLrDVKFawzJZLRFhmFmKF4WlC4x6L5FQiyEOTs7jvoIZR3K5pnB78vSU&usqp=CAU',
      email: 'nicholas657@gmail.com',
      address: '777 Oak St',
      country: 'Italy',
      phone: "+77 056766154",
      chartdata: [
        {name:'Jan', Total:250},
        {name:'Feb', Total:3700},
        {name:'Mar', Total:500},
        {name:'Apr', Total:500},
        {name:'May', Total:900},
        {name:'Jun', Total:3710},
        {name:'Jul', Total:1700},
        {name:'Aug', Total:2050},
        {name:'Sep', Total:7770},
        {name:'Oct', Total:1000},
        {name:'Nov', Total:500},
        {name:'Dec', Total:4000}
      ]
    },
    {
      id: 9,
      username: 'Glenna Reichert',
      img: 'https://i.pinimg.com/originals/55/ec/2a/55ec2a6231573fc642e3a7e6c7355a00.jpg',
      email: 'glenna037@gmail.com',
      address: '222 Elm St',
      country: 'Russia',
      phone: "+101 5052367661",
      chartdata: [
        {name:'Jan', Total:4200},
        {name:'Feb', Total:3000},
        {name:'Mar', Total:8500},
        {name:'Apr', Total:500},
        {name:'May', Total:9600},
        {name:'Jun', Total:6300},
        {name:'Jul', Total:7000},
        {name:'Aug', Total:1000},
        {name:'Sep', Total:700},
        {name:'Oct', Total:4000},
        {name:'Nov', Total:4040},
        {name:'Dec', Total:5700}
      ]
    },
    {
      id: 10,
      username: 'Clementina DuBuque',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2upnOt5MwEpN3ZlfcKtokX5ahQG9J6nhXQTmh6MWONavmYRDZmmjBt6gfnZZ3tlMJZRE&usqp=CAU',
      email: 'clementina778@gmail.com',
      address: '333 Pine St',
      country: 'Brazil',
      phone: "+02 352367661",
      chartdata: [
        {name:'Jan', Total:6200},
        {name:'Feb', Total:3700},
        {name:'Mar', Total:5000},
        {name:'Apr', Total:400},
        {name:'May', Total:900},
        {name:'Jun', Total:3600},
        {name:'Jul', Total:4050},
        {name:'Aug', Total:1000},
        {name:'Sep', Total:700},
        {name:'Oct', Total:8000},
        {name:'Nov', Total:1000},
        {name:'Dec', Total:6000}
      ]
    },
  ];
  



  export const ProductColumn = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Product', width: 470,
    renderCell: (params) => {
        return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.image} alt="avatar" />
                {params.row.title}
            </div>
        )
    } 
},
    { field: 'price', headerName:'Price', width: 100},
]


  



