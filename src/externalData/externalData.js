const categories = [
  {
    id: 0,
    title: "Tasty Beef Burrito with Freshly Pressed Orange Juice",
    image: require("../assets/Images/Tasty-Beef-Burrito.jpg"),
    price: 15.50,
    rating: 4.7,
    distance: '3.2km',
    approximateTime: '10-20 Min',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum ornare erat a convallis. Nam pharetra nisl nec risus malesuada, eget ultrices justo vestibulum. Ut sagittis venenatis mi ac mollis. Aliquam porta dolor lectus, a pulvinar mi porta ut. Cras posuere ut mauris sed consectetur. Nunc nec lobortis sapien, eget varius nisi. Sed tincidunt eros a leo pulvinar, nec hendrerit dui commodo.',
    },
  {
    id: 1,
    title: "Seafood Linguine",
    image: require("../assets/Images/Seafood-Linguine.jpg"),
    price: 25,
    rating: 3.7,
    distance: '4.2km',
    approximateTime: '20-30 Min',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum ornare erat a convallis. Nam pharetra nisl nec risus malesuada, eget ultrices justo vestibulum. Ut sagittis venenatis mi ac mollis. Aliquam porta dolor lectus, a pulvinar mi porta ut. Cras posuere ut mauris sed consectetur. Nunc nec lobortis sapien, eget varius nisi. Sed tincidunt eros a leo pulvinar, nec hendrerit dui commodo.',
    },
  {
    id: 2,
    title: "Steamed Vegetables and Beef",
    image: require("../assets/Images/Steamed-Veggies.jpg"),
    price: 15,
    rating: 4.3,
    distance: '1.2km',
    approximateTime: '5-20 Min',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum ornare erat a convallis. Nam pharetra nisl nec risus malesuada, eget ultrices justo vestibulum. Ut sagittis venenatis mi ac mollis. Aliquam porta dolor lectus, a pulvinar mi porta ut. Cras posuere ut mauris sed consectetur. Nunc nec lobortis sapien, eget varius nisi. Sed tincidunt eros a leo pulvinar, nec hendrerit dui commodo.',
    },
  {
    id: 3,
    title: "Protein Soup",
    image: require("../assets/Images/Protein-Soup.jpg"),
    price: 30,
    rating: 5.0,
    distance: '0.5km',
    approximateTime: '1-10 Min',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum ornare erat a convallis. Nam pharetra nisl nec risus malesuada, eget ultrices justo vestibulum. Ut sagittis venenatis mi ac mollis. Aliquam porta dolor lectus, a pulvinar mi porta ut. Cras posuere ut mauris sed consectetur. Nunc nec lobortis sapien, eget varius nisi. Sed tincidunt eros a leo pulvinar, nec hendrerit dui commodo.',
    },
];


const nearFoods = [
  {
    id: 0,
    title: "Jollof Rice",
    image: require("../assets/Images/jollof-rice.jpeg"),
    price: 10.50,
    rating: 4.7,
    location: 'Dutse • 1km',
  },
  {
    id: 1,
    title: "Fufu and Afang Soup",
    image: require("../assets/Images/afang-soup.jpeg"),
    price: 20,
    rating: 5.0,
    location: 'Kubwa • 2km',
  },
  {
    id: 2,
    title: "Yam and Egg Sauce",
    image: require("../assets/Images/yam.jpeg"),
    price: 10.00,
    rating: 4.0,
    location: 'Wuse • 0.5km',
  },
  {
    id: 3,
    title: "Small Chops Platter ",
    image: require("../assets/Images/small-chops.jpeg"),
    price: 17.00,
    rating: 4.1,
    location: 'Gwarimpa • 1.5km',
  },
];


export { categories, nearFoods };