const categories = [
    {
      id: 0,
      title: "Grilled Cheese Salad With Cream",
      image: require("../assets/Images/food4.jpg"),
      price: 15.50,
      rating: 4.7,
    },
    {
      id: 1,
      title: "Seafood Linguine",
      image: require("../assets/Images/food3.jpg"),
      price: 25,
      rating: 3.7
    },
    {
      id: 2,
      title: "Steamed Vegetables",
      image: require("../assets/Images/food2.jpg"),
      price: 15,
      rating: 4.3
    },
    {
      id: 3,
      title: "Protein Soup",
      image: require("../assets/Images/food1.jpg"),
      price: 30,
      rating: 5.0
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

  
  export  {categories, nearFoods} ;