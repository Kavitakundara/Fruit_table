"use strict"
let fruits=[
    {
        id:1,
        Fruit: "Kiwi",
        Location: "Delhi",
        Price: 250,
    },
    {
        id:2,
        Fruit: "Peach",
        Location: "Uk",
        Price: 100,
    },
    {
        id:3,
        Fruit: "Pineapple",
        Location: "UtterPradesh",
        Price: 70,
    },
    {
        id:4,
        Fruit: "Papaya",
        Location: "Haryana",
        Price: 60,
    },
    {
        id:5,
        Fruit: "Watermelon",
        Location: "Delhi",
        Price: 70,
    },
    {
        id:6,
        Fruit: "Apple",
        Location: "Jammu",
        Price: 100,
    },
    {
        id:7,
        Fruit: "Peach",
        Location: "Kashmir",
        Price: 250,
    },
    {
        id:8,
        Fruit: "Sapota",
        Location: "Madhya Pradesh",
        Price: 150,
    },
    {
        id:9,
        Fruit: "Raspberries",
        Location: "Punjab",
        Price: 56,
    },
    {
        id:10,
        Fruit: "Watermelon",
        Location: "Kerala",
        Price: 150,
    },
];



let sbmt = document.querySelector(".btn");
let container = document.getElementsByClassName("container")[0]; // Select the first element with class "container"

sbmt.addEventListener("click", function () {
  const fruitName = document.querySelector('input').value;
  const res = fruits.find(function (value) {
    return value.Fruit === fruitName;
  });

  if (res) {
    let html = `<table>
        <thead>
          <tr>
            <th>Fruit Name</th>
            <th>Price</th>
            <th>Store</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${res.Fruit}</td>
            <td>${res.Price}</td>
            <td>${res.Location}</td>
          </tr>
        </tbody>
      </table>`;

    container.innerHTML = html;
  } else {
    alert("This fruit is not in our list or type the first letter capital of your fruit name.");
  }
});
