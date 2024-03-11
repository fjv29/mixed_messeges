const ingredients = ['banana', 'blueberry', 'apple', 'strawberry', 'pineapple', 'orange', 'kiwi',  ];

const getIngredients = () =>{
    let ingredient1 = ingredients[Math.floor(Math.random()* ingredients.length)];
    let ingredient2 = ingredients[Math.floor(Math.random()* ingredients.length)];
    let ingredient3 = ingredients[Math.floor(Math.random()* ingredients.length)];
    console.log(ingredient1, ingredient2, ingredient3);
}

getIngredients();
