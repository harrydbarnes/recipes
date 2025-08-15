const recipes = [
  {
    id: 1,
    title: "Tony's Original Secret Vegan Curry Recipe",
    subtitle: "Una ricetta segreta della tradizione vegana italiana",
    prepTime: "30 minutes",
    cookTime: "2 hours 15 minutes",
    servings: 8,
    tags: ["vegan", "curry", "Indian", "Italian"],
    ingredients: [
      { name: "red lentils", amount: 200, unit: "g" },
      { name: "red bell peppers", amount: 3, unit: "" },
      { name: "white onions", amount: 4, unit: "" },
      { name: "garlic", amount: 4, unit: "cloves" },
      { name: "cauliflower", amount: 1, unit: "head" },
      { name: "chickpeas", amount: 1, unit: "tin" },
      { name: "chopped tomatoes", amount: 1, unit: "tin" },
      { name: "baby spinach", amount: 100, unit: "g" },
      { name: "tomato puree", amount: 200, unit: "g" },
      { name: "fresh ginger", amount: 1, unit: "inch" },
      { name: "Madras powder", amount: 2, unit: "tsp" },
      { name: "ground coriander", amount: 1, unit: "tsp" },
      { name: "ground cumin", amount: 1, unit: "tsp" },
      { name: "garam masala powder", amount: 1, unit: "tsp" },
      { name: "chili powder", amount: 1, unit: "pinch" },
      { name: "cinnamon sticks", amount: 4, unit: "" },
      { name: "bay leaf", amount: 1, unit: "" },
      { name: "sugar", amount: 2, unit: "tsp" },
      { name: "salt", amount: 0.75, unit: "tsp" },
      { name: "rapeseed oil", amount: 95, unit: "ml" },
      { name: "fresh coriander", amount: 1, unit: "bunch" }
    ],
    instructions: [
      "Soak {amount:200:g} of red lentils in {amount:200:ml} of water overnight.",
      "Dice the red bell peppers into 2cm squares and chop the cauliflower into florets smaller than 3cm. Toss the diced peppers in a little oil and roast them in an oven preheated to 200°C for 15-20 minutes until roasted.",
      "Finely chop the onions and chop the {amount:4} cloves of garlic. Grate a 1-inch piece of ginger.",
      "Heat {amount:95:ml} of oil in a pan and fry the garlic until brown, for approximately 1 minute. Add the onions, {amount:0.75:tsp} of salt, {amount:4} cinnamon sticks, and the bay leaf, and cook until the onions are soft.",
      "Once the onions are soft, add the grated ginger, {amount:2:tsp} of Madras powder, 1 tsp turmeric, {amount:1:tsp} ground cumin, {amount:1:tsp} ground coriander, {amount:0.5:tsp} garam masala, and a pinch of chili powder. Cook for about 30 minutes on a medium to low heat.",
      "Add a tin of chopped tomatoes and cook on medium/low heat for 30 minutes until the oil rises to the top, stirring regularly to prevent sticking.",
      "Add {amount:650:ml} of water, {amount:200:g} of tomato puree, and {amount:2:tsp} of sugar to the curry base.",
      "Add the soaked lentils and the cauliflower florets. Simmer for 15 minutes until the lentils have a slight bite.",
      "Finally, add the chickpeas, the roasted peppers, and the baby spinach. Bring back to a simmer.",
      "Garnish with fresh coriander if desired and serve hot."
    ]
  },
  {
    id: 2,
    title: "Harry's Broccoli Tagliatelle",
    subtitle: "A quick and healthy Italian pasta dish",
    prepTime: "10 minutes",
    cookTime: "15 minutes",
    servings: 4,
    tags: ["pasta", "vegetarian", "Italian", "broccoli"],
    ingredients: [
      { name: "tagliatelle", amount: 300, unit: "g" },
      { name: "broccoli", amount: 1, unit: "head" },
      { name: "garlic", amount: 2, unit: "cloves" },
      { name: "red chili", amount: 1, unit: "" },
      { name: "parmesan cheese", amount: 50, unit: "g" },
      { name: "olive oil", amount: 4, unit: "tbsp" },
      { name: "lemon", amount: 1, unit: "" },
      { name: "pine nuts", amount: 25, unit: "g" },
      { name: "salt", amount: 1, unit: "tsp" },
      { name: "black pepper", amount: 0.5, unit: "tsp" }
    ],
    instructions: [
      "Bring a large pot of salted water to a boil. Cook the tagliatelle according to package directions.",
      "While the pasta is cooking, chop the broccoli into small florets. Finely slice the garlic and red chili.",
      "In a large pan, heat the olive oil over a medium heat. Add the garlic and chili and cook for 1-2 minutes until fragrant.",
      "Add the broccoli to the pan with a splash of water. Cover and cook for 5-7 minutes until the broccoli is tender-crisp.",
      "Drain the pasta, reserving a cup of the pasta water. Add the pasta to the pan with the broccoli.",
      "Add the grated parmesan cheese, the juice of half a lemon, and a splash of the reserved pasta water. Toss everything together until the pasta is well coated.",
      "Toast the pine nuts in a dry pan until golden brown.",
      "Serve the pasta with a sprinkle of toasted pine nuts, a drizzle of olive oil, and extra parmesan cheese. Season with salt and black pepper to taste."
    ]
  },
  {
    id: 3,
    title: "Veggie Stir-Fry",
    subtitle: "Quick, healthy, and versatile",
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    servings: 2,
    tags: ["vegan", "vegetarian", "asian", "healthy"],
    ingredients: [
        { name: "peppers", amount: 2, unit: "" },
        { name: "carrots", amount: 2, unit: "" },
        { name: "baby corn", amount: 100, unit: "g" },
        { name: "mangetout", amount: 100, unit: "g" },
        { name: "soy sauce", amount: 3, unit: "tbsp" },
        { name: "sesame oil", amount: 1, unit: "tbsp" },
        { name: "rice or noodles", amount: 200, unit: "g" }
    ],
    instructions: [
        "Prepare all vegetables by slicing them into thin strips.",
        "Cook rice or noodles according to package instructions.",
        "In a large wok or frying pan, heat sesame oil over high heat.",
        "Add the carrots and peppers and stir-fry for 3 minutes.",
        "Add the baby corn and mangetout and stir-fry for another 2 minutes.",
        "Pour in the soy sauce and toss everything to combine.",
        "Serve the stir-fried vegetables over the cooked rice or noodles."
    ],
    meatOption: ["sliced beef", "chicken", "prawns", "salmon"]
  },
  {
    id: 4,
    title: "Chickpea & Spinach Curry",
    subtitle: "A hearty and flavorful vegetarian curry",
    prepTime: "10 minutes",
    cookTime: "20 minutes",
    servings: 4,
    tags: ["vegetarian", "curry", "indian", "healthy", "vegan"],
    ingredients: [
        { name: "chickpeas", amount: 1, unit: "tin" },
        { name: "spinach", amount: 200, unit: "g" },
        { name: "onion", amount: 1, unit: "" },
        { name: "garlic", amount: 2, unit: "cloves" },
        { name: "curry paste", amount: 2, unit: "tbsp" },
        { name: "coconut milk", amount: 1, unit: "tin" }
    ],
    instructions: [
        "Finely chop the onion and garlic.",
        "In a large pan, sauté the onion and garlic until soft.",
        "Stir in the curry paste and cook for 1 minute until fragrant.",
        "Add the coconut milk and chickpeas. Bring to a simmer and cook for 10 minutes.",
        "Stir in the spinach and cook until wilted.",
        "Serve hot with rice or naan bread."
    ],
    meatOption: ["chicken", "lamb"]
  },
  {
    id: 5,
    title: "Lentil Bolognese",
    subtitle: "A rich and satisfying vegetarian bolognese",
    prepTime: "15 minutes",
    cookTime: "45 minutes",
    servings: 6,
    tags: ["vegetarian", "italian", "pasta", "healthy", "vegan"],
    ingredients: [
        { name: "lentils", amount: 250, unit: "g" },
        { name: "chopped tomatoes", amount: 2, unit: "tins" },
        { name: "onions", amount: 2, unit: "" },
        { name: "garlic", amount: 3, unit: "cloves" },
        { name: "herbs", amount: 1, unit: "tbsp" }
    ],
    instructions: [
        "Finely chop the onions and garlic.",
        "In a large pot, sauté the onions and garlic until soft.",
        "Add the lentils, chopped tomatoes, and herbs.",
        "Bring to a simmer and cook for 45 minutes, or until the lentils are tender.",
        "Serve with your favorite pasta."
    ],
    meatOption: ["minced beef", "minced turkey"]
  },
  {
    id: 6,
    title: "Mushroom Risotto",
    subtitle: "Creamy and comforting Italian classic",
    prepTime: "10 minutes",
    cookTime: "30 minutes",
    servings: 4,
    tags: ["vegetarian", "italian", "rice"],
    ingredients: [
        { name: "Arborio rice", amount: 300, unit: "g" },
        { name: "mushrooms", amount: 250, unit: "g" },
        { name: "garlic", amount: 2, unit: "cloves" },
        { name: "parmesan", amount: 50, unit: "g" },
        { name: "veggie stock", amount: 1, unit: "L" }
    ],
    instructions: [
        "Slice the mushrooms and finely chop the garlic.",
        "In a large pan, sauté the mushrooms and garlic until golden.",
        "Add the Arborio rice and toast for 1 minute.",
        "Gradually add the veggie stock, one ladle at a time, stirring continuously until the rice is cooked and creamy.",
        "Stir in the parmesan cheese and serve immediately."
    ],
    meatOption: ["crispy pancetta", "chicken"]
  },
  {
    id: 7,
    title: "Sweet Potato & Black Bean Burritos",
    subtitle: "A delicious and filling vegetarian meal",
    prepTime: "20 minutes",
    cookTime: "30 minutes",
    servings: 4,
    tags: ["vegetarian", "mexican", "healthy"],
    ingredients: [
        { name: "sweet potato", amount: 2, unit: "" },
        { name: "black beans", amount: 1, unit: "tin" },
        { name: "salsa", amount: 200, unit: "g" },
        { name: "cheese", amount: 100, unit: "g" },
        { name: "tortillas", amount: 4, unit: "" }
    ],
    instructions: [
        "Peel and dice the sweet potatoes. Roast in the oven until tender.",
        "In a bowl, mix the roasted sweet potatoes, black beans, and salsa.",
        "Warm the tortillas. Fill with the sweet potato mixture and sprinkle with cheese.",
        "Roll up the burritos and serve."
    ],
    meatOption: ["shredded beef", "chicken"]
  },
  {
    id: 8,
    title: "Caprese Pesto Pasta",
    subtitle: "A simple and fresh Italian pasta dish",
    prepTime: "10 minutes",
    cookTime: "15 minutes",
    servings: 2,
    tags: ["vegetarian", "italian", "pasta", "quick"],
    ingredients: [
        { name: "pasta", amount: 200, unit: "g" },
        { name: "cherry tomatoes", amount: 250, unit: "g" },
        { name: "mozzarella", amount: 125, unit: "g" },
        { name: "basil pesto", amount: 4, unit: "tbsp" }
    ],
    instructions: [
        "Cook the pasta according to package directions.",
        "Halve the cherry tomatoes and tear the mozzarella.",
        "Drain the pasta and toss with the pesto, tomatoes, and mozzarella.",
        "Serve immediately."
    ],
    meatOption: ["chicken", "prosciutto"]
  },
  {
    id: 9,
    title: "Vegetable Lasagne",
    subtitle: "A classic comfort food, packed with veggies",
    prepTime: "30 minutes",
    cookTime: "45 minutes",
    servings: 6,
    tags: ["vegetarian", "italian", "pasta", "comfort food"],
    ingredients: [
        { name: "courgette", amount: 1, unit: "" },
        { name: "peppers", amount: 2, unit: "" },
        { name: "spinach", amount: 200, unit: "g" },
        { name: "tomato sauce", amount: 500, unit: "g" },
        { name: "béchamel", amount: 500, unit: "g" }
    ],
    instructions: [
        "Slice the courgette and peppers.",
        "In a pan, cook the vegetables until soft.",
        "Layer the vegetables, tomato sauce, béchamel, and lasagne sheets in a baking dish.",
        "Bake in the oven until golden and bubbly."
    ],
    meatOption: ["minced beef", "sausage"]
  },
  {
    id: 10,
    title: "Thai Green Vegetable Curry",
    subtitle: "A fragrant and spicy Thai curry",
    prepTime: "15 minutes",
    cookTime: "20 minutes",
    servings: 4,
    tags: ["vegetarian", "thai", "curry", "spicy", "vegan"],
    ingredients: [
        { name: "aubergine", amount: 1, unit: "" },
        { name: "courgette", amount: 1, unit: "" },
        { name: "baby corn", amount: 100, unit: "g" },
        { name: "coconut milk", amount: 1, unit: "tin" },
        { name: "green curry paste", amount: 2, unit: "tbsp" }
    ],
    instructions: [
        "Chop the aubergine and courgette.",
        "In a large pan, fry the curry paste until fragrant.",
        "Add the coconut milk and bring to a simmer.",
        "Add the vegetables and cook until tender.",
        "Serve with rice."
    ],
    meatOption: ["chicken", "prawns", "tofu"]
  },
  {
    id: 11,
    title: "Halloumi & Roasted Veg Couscous",
    subtitle: "A light and flavorful Mediterranean dish",
    prepTime: "15 minutes",
    cookTime: "25 minutes",
    servings: 2,
    tags: ["vegetarian", "mediterranean", "healthy"],
    ingredients: [
        { name: "halloumi", amount: 250, unit: "g" },
        { name: "courgette", amount: 1, unit: "" },
        { name: "peppers", amount: 1, unit: "" },
        { name: "red onion", amount: 1, unit: "" },
        { name: "couscous", amount: 150, unit: "g" }
    ],
    instructions: [
        "Chop the vegetables and roast in the oven until tender.",
        "Prepare the couscous according to package directions.",
        "Slice and grill the halloumi until golden.",
        "Mix the roasted vegetables with the couscous and top with the grilled halloumi."
    ],
    meatOption: ["spiced chicken", "lamb strips"]
  },
  {
    id: 12,
    title: "Margherita Pizza with Extras",
    subtitle: "Classic pizza that everyone loves",
    prepTime: "20 minutes",
    cookTime: "15 minutes",
    servings: 2,
    tags: ["vegetarian", "italian", "pizza"],
    ingredients: [
        { name: "pizza base", amount: 1, unit: "" },
        { name: "tomato base", amount: 150, unit: "g" },
        { name: "mozzarella", amount: 125, unit: "g" },
        { name: "basil", amount: 1, unit: "handful" }
    ],
    instructions: [
        "Preheat the oven to its highest setting.",
        "Spread the tomato base over the pizza base.",
        "Top with mozzarella and fresh basil.",
        "Bake for 10-15 minutes until the crust is golden and the cheese is bubbly."
    ],
    meatOption: ["pepperoni", "ham", "chicken"]
  },
  {
    id: 13,
    title: "Butternut Squash & Sage Gnocchi",
    subtitle: "A comforting and autumnal dish",
    prepTime: "15 minutes",
    cookTime: "30 minutes",
    servings: 2,
    tags: ["vegetarian", "italian", "pasta", "comfort food"],
    ingredients: [
        { name: "gnocchi", amount: 500, unit: "g" },
        { name: "butternut squash", amount: 1, unit: "" },
        { name: "sage", amount: 1, unit: "handful" },
        { name: "butter", amount: 50, unit: "g" }
    ],
    instructions: [
        "Peel and dice the butternut squash. Roast in the oven until tender.",
        "Cook the gnocchi according to package directions.",
        "In a pan, melt the butter and fry the sage leaves until crispy.",
        "Toss the gnocchi with the roasted butternut squash and sage butter."
    ],
    meatOption: ["bacon", "pancetta"]
  },
  {
    id: 14,
    title: "Creamy Spinach & Ricotta Cannelloni",
    subtitle: "A rich and creamy baked pasta dish",
    prepTime: "30 minutes",
    cookTime: "30 minutes",
    servings: 4,
    tags: ["vegetarian", "italian", "pasta"],
    ingredients: [
        { name: "ricotta", amount: 500, unit: "g" },
        { name: "spinach", amount: 200, unit: "g" },
        { name: "tomato sauce", amount: 500, unit: "g" },
        { name: "béchamel", amount: 300, unit: "g" },
        { name: "cannelloni tubes", amount: 12, unit: "" }
    ],
    instructions: [
        "Cook the spinach and squeeze out any excess water. Mix with the ricotta.",
        "Fill the cannelloni tubes with the ricotta and spinach mixture.",
        "Spread a layer of tomato sauce in a baking dish. Arrange the cannelloni on top.",
        "Pour over the remaining tomato sauce and the béchamel.",
        "Bake until golden and bubbling."
    ],
    meatOption: ["minced beef", "chicken in sauce"]
  },
  {
    id: 15,
    title: "Falafel & Roasted Veg Bowls",
    subtitle: "A healthy and satisfying Middle Eastern-inspired meal",
    prepTime: "20 minutes",
    cookTime: "30 minutes",
    servings: 2,
    tags: ["vegetarian", "middle eastern", "healthy", "vegan"],
    ingredients: [
        { name: "falafel", amount: 12, unit: "" },
        { name: "roasted veg", amount: 300, unit: "g" },
        { name: "hummus", amount: 100, unit: "g" },
        { name: "couscous or quinoa", amount: 150, unit: "g" }
    ],
    instructions: [
        "Roast your favorite vegetables until tender.",
        "Cook the falafel according to package directions.",
        "Prepare the couscous or quinoa.",
        "Assemble the bowls with a base of couscous/quinoa, topped with roasted veg, falafel, and a dollop of hummus."
    ],
    meatOption: ["chicken", "lamb kofta"]
  },
  {
    id: 16,
    title: "Tofu & Veg Pad Thai",
    subtitle: "A classic Thai noodle dish",
    prepTime: "20 minutes",
    cookTime: "15 minutes",
    servings: 2,
    tags: ["vegetarian", "thai", "noodles", "vegan"],
    ingredients: [
        { name: "rice noodles", amount: 200, unit: "g" },
        { name: "tofu", amount: 200, unit: "g" },
        { name: "beansprouts", amount: 100, unit: "g" },
        { name: "peanuts", amount: 50, unit: "g" },
        { name: "tamarind sauce", amount: 3, unit: "tbsp" }
    ],
    instructions: [
        "Soak the rice noodles in hot water until soft.",
        "Press and cube the tofu. Pan-fry until golden.",
        "In a wok, stir-fry the tofu with the beansprouts.",
        "Add the drained noodles and tamarind sauce. Toss to combine.",
        "Serve topped with crushed peanuts."
    ],
    meatOption: ["prawns", "chicken"]
  },
  {
    id: 17,
    title: "Vegetable & Bean Chilli",
    subtitle: "A hearty and warming vegetarian chilli",
    prepTime: "15 minutes",
    cookTime: "1 hour",
    servings: 6,
    tags: ["vegetarian", "mexican", "spicy", "vegan"],
    ingredients: [
        { name: "mixed beans", amount: 2, unit: "tins" },
        { name: "peppers", amount: 2, unit: "" },
        { name: "onions", amount: 2, unit: "" },
        { name: "tomatoes", amount: 2, unit: "tins" },
        { name: "spices", amount: 2, unit: "tbsp" }
    ],
    instructions: [
        "Chop the peppers and onions.",
        "In a large pot, sauté the onions and peppers until soft.",
        "Add the spices and cook for 1 minute.",
        "Add the beans and tomatoes. Simmer for at least 45 minutes.",
        "Serve with rice, sour cream, and cheese."
    ],
    meatOption: ["minced beef", "turkey"]
  },
  {
    id: 18,
    title: "Aubergine Parmigiana",
    subtitle: "A classic Italian baked dish",
    prepTime: "30 minutes",
    cookTime: "45 minutes",
    servings: 4,
    tags: ["vegetarian", "italian", "comfort food"],
    ingredients: [
        { name: "aubergine", amount: 2, unit: "" },
        { name: "tomato sauce", amount: 500, unit: "g" },
        { name: "mozzarella", amount: 150, unit: "g" },
        { name: "parmesan", amount: 50, unit: "g" }
    ],
    instructions: [
        "Slice the aubergine and grill or fry until golden.",
        "Layer the aubergine, tomato sauce, mozzarella, and parmesan in a baking dish.",
        "Bake until golden and bubbling."
    ],
    meatOption: ["layer with chicken breast"]
  },
  {
    id: 19,
    title: "Mediterranean Vegetable Tray Bake",
    subtitle: "An easy and healthy one-pan meal",
    prepTime: "15 minutes",
    cookTime: "40 minutes",
    servings: 4,
    tags: ["vegetarian", "mediterranean", "healthy", "one-pan", "vegan"],
    ingredients: [
        { name: "courgette", amount: 2, unit: "" },
        { name: "peppers", amount: 2, unit: "" },
        { name: "red onion", amount: 1, unit: "" },
        { name: "tomatoes", amount: 250, unit: "g" },
        { name: "olive oil", amount: 3, unit: "tbsp" },
        { name: "herbs", amount: 1, unit: "tbsp" }
    ],
    instructions: [
        "Chop all the vegetables into large chunks.",
        "Toss with olive oil and herbs in a large roasting tin.",
        "Roast in the oven for 40 minutes, or until tender and slightly charred."
    ],
    fishOption: ["add salmon fillets", "chicken thighs"]
  },
  {
    id: 20,
    title: "Creamy Leek & Potato Soup",
    subtitle: "A simple and comforting soup",
    prepTime: "15 minutes",
    cookTime: "30 minutes",
    servings: 4,
    tags: ["vegetarian", "soup", "comfort food"],
    ingredients: [
        { name: "leeks", amount: 3, unit: "" },
        { name: "potatoes", amount: 500, unit: "g" },
        { name: "onion", amount: 1, unit: "" },
        { name: "cream or milk", amount: 100, unit: "ml" },
        { name: "stock", amount: 1, unit: "L" }
    ],
    instructions: [
        "Chop the leeks, potatoes, and onion.",
        "In a large pot, sauté the onion until soft.",
        "Add the leeks and potatoes and cook for a few minutes.",
        "Add the stock and bring to a simmer. Cook until the vegetables are tender.",
        "Blend the soup until smooth. Stir in the cream or milk and season to taste."
    ],
    meatOption: ["stir in ham", "bacon"]
  },
  {
    id: 21,
    title: "Teriyaki Salmon with Stir-Fried Veg",
    subtitle: "A quick and healthy Japanese-inspired dish",
    prepTime: "10 minutes",
    cookTime: "15 minutes",
    servings: 2,
    tags: ["fish", "japanese", "healthy", "quick"],
    ingredients: [
        { name: "salmon fillet", amount: 2, unit: "" },
        { name: "teriyaki sauce", amount: 4, unit: "tbsp" },
        { name: "stir-fried veg", amount: 300, unit: "g" }
    ],
    instructions: [
        "Marinate the salmon fillets in teriyaki sauce.",
        "Pan-fry or bake the salmon until cooked through.",
        "Stir-fry your favorite vegetables.",
        "Serve the teriyaki salmon with the stir-fried veg."
    ],
    veggieAlternative: "teriyaki tofu"
  },
  {
    id: 22,
    title: "Fresh Avocado & Radish Salad",
    subtitle: "A light and refreshing salad",
    prepTime: "10 minutes",
    cookTime: "0 minutes",
    servings: 2,
    tags: ["vegetarian", "salad", "healthy", "quick", "vegan"],
    ingredients: [
        { name: "cucumber", amount: 1, unit: "" },
        { name: "radish", amount: 100, unit: "g" },
        { name: "tomatoes", amount: 200, unit: "g" },
        { name: "red onion", amount: 0.5, unit: "" },
        { name: "avocado", amount: 1, unit: "" },
        { name: "olive oil", amount: 2, unit: "tbsp" },
        { name: "lemon juice", amount: 1, unit: "tbsp" },
        { name: "herbs", amount: 1, unit: "handful" }
    ],
    instructions: [
        "Chop all the vegetables and herbs.",
        "In a large bowl, combine all the ingredients.",
        "Toss with olive oil and lemon juice. Season to taste."
    ],
    meatOption: ["flaked salmon", "prawns", "grilled chicken"]
  },
  {
    id: 23,
    title: "Greek Salad with Grilled Chicken",
    subtitle: "A light and refreshing salad, perfect for summer",
    prepTime: "20 minutes",
    cookTime: "15 minutes",
    servings: 4,
    tags: ["healthy", "quick", "chicken", "mediterranean", "salad", "gluten-free"],
    ingredients: [
        { name: "chicken breast", amount: 4, unit: "" },
        { name: "romaine lettuce", amount: 1, unit: "head" },
        { name: "cucumber", amount: 1, unit: "" },
        { name: "cherry tomatoes", amount: 250, unit: "g" },
        { name: "red onion", amount: 0.5, unit: "" },
        { name: "kalamata olives", amount: 100, unit: "g" },
        { name: "feta cheese", amount: 150, unit: "g" },
        { name: "olive oil", amount: 4, unit: "tbsp" },
        { name: "lemon juice", amount: 2, unit: "tbsp" },
        { name: "dried oregano", amount: 1, unit: "tsp" }
    ],
    instructions: [
        "Season chicken breasts with salt, pepper, and oregano. Grill until cooked through, then slice.",
        "Chop lettuce, cucumber, tomatoes, and red onion. Combine in a large bowl.",
        "Add olives and crumbled feta cheese to the salad.",
        "In a small bowl, whisk together olive oil and lemon juice for the dressing.",
        "Pour dressing over the salad and toss to combine. Top with grilled chicken slices."
    ]
  },
  {
    id: 24,
    title: "Beef and Broccoli",
    subtitle: "A classic Asian-inspired stir-fry, better than takeout",
    prepTime: "15 minutes",
    cookTime: "15 minutes",
    servings: 4,
    tags: ["beef", "asian", "quick", "stir-fry"],
    ingredients: [
        { name: "flank steak", amount: 500, unit: "g" },
        { name: "broccoli florets", amount: 500, unit: "g" },
        { name: "soy sauce", amount: 60, unit: "ml" },
        { name: "beef broth", amount: 120, unit: "ml" },
        { name: "cornstarch", amount: 1, unit: "tbsp" },
        { name: "sesame oil", amount: 1, unit: "tsp" },
        { name: "garlic", amount: 3, unit: "cloves" },
        { name: "ginger", amount: 1, unit: "tbsp" }
    ],
    instructions: [
        "Slice the flank steak thinly against the grain.",
        "In a small bowl, whisk together soy sauce, beef broth, and cornstarch. Set aside.",
        "Heat a large wok or skillet over high heat. Add oil and stir-fry the beef until browned. Remove from skillet.",
        "Add broccoli to the skillet with a splash of water. Cover and steam for 3-4 minutes.",
        "Return beef to the skillet. Add minced garlic and ginger and cook for 1 minute.",
        "Pour the sauce mixture over the beef and broccoli. Cook, stirring, until the sauce has thickened.",
        "Drizzle with sesame oil and serve immediately with rice."
    ]
  },
  {
    id: 25,
    title: "Spicy Shrimp Tacos",
    subtitle: "Quick and easy tacos with a spicy kick",
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    servings: 4,
    tags: ["fish", "mexican", "spicy", "quick", "tacos"],
    ingredients: [
        { name: "shrimp", amount: 500, unit: "g" },
        { name: "chili powder", amount: 1, unit: "tbsp" },
        { name: "cumin", amount: 1, unit: "tsp" },
        { name: "garlic powder", amount: 1, unit: "tsp" },
        { name: "corn tortillas", amount: 8, unit: "" },
        { name: "avocado", amount: 1, unit: "" },
        { name: "lime", amount: 1, unit: "" },
        { name: "cilantro", amount: 1, unit: "bunch" }
    ],
    instructions: [
        "Peel and devein the shrimp.",
        "In a bowl, toss the shrimp with chili powder, cumin, and garlic powder.",
        "Heat a skillet over medium-high heat. Cook shrimp for 2-3 minutes per side, until pink and cooked through.",
        "Warm the corn tortillas.",
        "Assemble tacos with shrimp, sliced avocado, a squeeze of lime juice, and fresh cilantro."
    ]
  },
  {
    id: 26,
    title: "Black Bean Burgers",
    subtitle: "Hearty and flavorful homemade vegetarian burgers",
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    servings: 4,
    tags: ["vegetarian", "vegan", "healthy", "burger"],
    ingredients: [
        { name: "black beans", amount: 1, unit: "tin" },
        { name: "breadcrumbs", amount: 100, unit: "g" },
        { name: "onion", amount: 0.5, unit: "" },
        { name: "garlic", amount: 2, unit: "cloves" },
        { name: "cumin", amount: 1, unit: "tsp" },
        { name: "chili powder", amount: 0.5, unit: "tsp" },
        { name: "burger buns", amount: 4, unit: "" }
    ],
    instructions: [
        "Rinse and drain the black beans. Mash them in a large bowl, leaving some texture.",
        "Finely chop the onion and garlic.",
        "Add breadcrumbs, onion, garlic, cumin, and chili powder to the mashed beans. Mix well.",
        "Form the mixture into 4 patties.",
        "Pan-fry the patties for 5 minutes per side, until heated through and crispy on the outside.",
        "Serve on burger buns with your favorite toppings."
    ]
  },
  {
    id: 27,
    title: "Lemon Herb Baked Salmon",
    subtitle: "A simple, elegant, and healthy fish dinner",
    prepTime: "10 minutes",
    cookTime: "15 minutes",
    servings: 2,
    tags: ["fish", "healthy", "gluten-free", "quick"],
    ingredients: [
        { name: "salmon fillets", amount: 2, unit: "" },
        { name: "lemon", amount: 1, unit: "" },
        { name: "fresh dill", amount: 2, unit: "tbsp" },
        { name: "fresh parsley", amount: 2, unit: "tbsp" },
        { name: "olive oil", amount: 1, unit: "tbsp" },
        { name: "garlic", amount: 2, unit: "cloves" }
    ],
    instructions: [
        "Preheat oven to 200°C (400°F).",
        "Place salmon fillets on a baking sheet lined with parchment paper.",
        "In a small bowl, mix together chopped dill, parsley, olive oil, and minced garlic.",
        "Spread the herb mixture over the salmon fillets.",
        "Slice the lemon and place a few slices on top of each fillet.",
        "Bake for 12-15 minutes, or until the salmon is cooked through.",
        "Serve with a side of roasted vegetables or a salad."
    ]
  },
  {
    id: 28,
    title: "Chicken Noodle Soup",
    subtitle: "The ultimate comfort food for a chilly day",
    prepTime: "15 minutes",
    cookTime: "30 minutes",
    servings: 6,
    tags: ["soup", "comfort food", "chicken"],
    ingredients: [
        { name: "chicken broth", amount: 2, unit: "L" },
        { name: "cooked chicken", amount: 300, unit: "g" },
        { name: "egg noodles", amount: 200, unit: "g" },
        { name: "carrots", amount: 2, unit: "" },
        { name: "celery", amount: 2, unit: "stalks" },
        { name: "onion", amount: 1, unit: "" },
        { name: "parsley", amount: 1, unit: "bunch" }
    ],
    instructions: [
        "Chop the carrots, celery, and onion.",
        "In a large pot, bring the chicken broth to a simmer.",
        "Add the carrots, celery, and onion to the pot and cook for 10 minutes until softened.",
        "Stir in the cooked chicken and egg noodles. Cook for another 8-10 minutes, or until the noodles are tender.",
        "Season with salt and pepper to taste. Stir in fresh parsley before serving."
    ]
  },
  {
    id: 29,
    title: "Quinoa Salad with Roasted Vegetables",
    subtitle: "A nutritious and filling vegan and gluten-free salad",
    prepTime: "15 minutes",
    cookTime: "25 minutes",
    servings: 4,
    tags: ["vegetarian", "vegan", "gluten-free", "healthy", "salad"],
    ingredients: [
        { name: "quinoa", amount: 200, unit: "g" },
        { name: "bell pepper", amount: 1, unit: "" },
        { name: "courgette", amount: 1, unit: "" },
        { name: "red onion", amount: 1, unit: "" },
        { name: "chickpeas", amount: 1, unit: "tin" },
        { name: "lemon juice", amount: 3, unit: "tbsp" },
        { name: "olive oil", amount: 2, unit: "tbsp" }
    ],
    instructions: [
        "Cook quinoa according to package directions. Let cool.",
        "Chop the bell pepper, courgette, and red onion into bite-sized pieces.",
        "Toss vegetables with olive oil and roast at 200°C (400°F) for 20-25 minutes until tender.",
        "In a large bowl, combine the cooked quinoa, roasted vegetables, and chickpeas.",
        "Drizzle with lemon juice and olive oil. Season with salt and pepper and toss to combine."
    ]
  },
  {
    id: 30,
    title: "Shepherd's Pie",
    subtitle: "A classic British comfort food with a rich meat filling and potato topping",
    prepTime: "25 minutes",
    cookTime: "40 minutes",
    servings: 6,
    tags: ["beef", "comfort food", "british"],
    ingredients: [
        { name: "minced lamb or beef", amount: 500, unit: "g" },
        { name: "onion", amount: 1, unit: "" },
        { name: "carrots", amount: 2, unit: "" },
        { name: "beef stock", amount: 400, unit: "ml" },
        { name: "tomato puree", amount: 2, unit: "tbsp" },
        { name: "Worcestershire sauce", amount: 1, unit: "tbsp" },
        { name: "potatoes", amount: 1, unit: "kg" },
        { name: "butter", amount: 50, unit: "g" },
        { name: "milk", amount: 50, unit: "ml" }
    ],
    instructions: [
        "Preheat oven to 200°C (400°F).",
        "Brown the mince in a large pan. Drain off any fat. Add chopped onion and carrots and cook until softened.",
        "Stir in the beef stock, tomato puree, and Worcestershire sauce. Simmer for 15-20 minutes until the sauce has thickened.",
        "Meanwhile, peel and chop the potatoes. Boil until tender, then drain and mash with butter and milk.",
        "Pour the meat filling into an ovenproof dish. Top with the mashed potatoes and rough up the surface with a fork.",
        "Bake for 20-25 minutes, or until the potato topping is golden brown."
    ]
  },
  {
    id: 31,
    title: "Classic Beef Tacos",
    subtitle: "A fun and easy meal for the whole family",
    prepTime: "10 minutes",
    cookTime: "15 minutes",
    servings: 4,
    tags: ["beef", "mexican", "tacos"],
    ingredients: [
        { name: "minced beef", amount: 500, unit: "g" },
        { name: "taco seasoning", amount: 1, unit: "sachet" },
        { name: "hard taco shells", amount: 12, unit: "" },
        { name: "lettuce", amount: 1, unit: "head" },
        { name: "tomatoes", amount: 2, unit: "" },
        { name: "cheddar cheese", amount: 150, unit: "g" },
        { name: "salsa", amount: 1, unit: "jar" },
        { name: "sour cream", amount: 1, unit: "tub" }
    ],
    instructions: [
        "In a skillet, cook the minced beef until browned. Drain the fat.",
        "Stir in the taco seasoning and a little water. Simmer for 5 minutes.",
        "Warm the taco shells according to package directions.",
        "Chop the lettuce and tomatoes. Grate the cheese.",
        "Let everyone build their own tacos with the beef, lettuce, tomatoes, cheese, salsa, and sour cream."
    ]
  },
  {
    id: 32,
    title: "Creamy Tomato Soup",
    subtitle: "A simple and classic soup, perfect with grilled cheese",
    prepTime: "10 minutes",
    cookTime: "25 minutes",
    servings: 4,
    tags: ["vegetarian", "soup", "comfort food", "quick"],
    ingredients: [
        { name: "canned tomatoes", amount: 2, unit: "tins" },
        { name: "vegetable broth", amount: 500, unit: "ml" },
        { name: "onion", amount: 1, unit: "" },
        { name: "garlic", amount: 2, unit: "cloves" },
        { name: "heavy cream", amount: 120, unit: "ml" },
        { name: "butter", amount: 2, unit: "tbsp" }
    ],
    instructions: [
        "In a large pot, melt the butter over medium heat. Add chopped onion and garlic and cook until soft.",
        "Add the canned tomatoes and vegetable broth. Bring to a simmer and cook for 15 minutes.",
        "Use an immersion blender to blend the soup until smooth.",
        "Stir in the heavy cream and heat through. Do not boil.",
        "Season with salt and pepper to taste and serve."
    ]
  },
  {
    id: 33,
    title: "Pesto Chicken Pasta",
    subtitle: "A quick and flavorful weeknight dinner",
    prepTime: "10 minutes",
    cookTime: "20 minutes",
    servings: 4,
    tags: ["chicken", "italian", "pasta", "quick"],
    ingredients: [
        { name: "chicken breast", amount: 2, unit: "" },
        { name: "pasta", amount: 400, unit: "g" },
        { name: "basil pesto", amount: 150, unit: "g" },
        { name: "cherry tomatoes", amount: 200, unit: "g" },
        { name: "parmesan cheese", amount: 50, unit: "g" }
    ],
    instructions: [
        "Cook the pasta according to package directions.",
        "Cut the chicken breast into bite-sized pieces and pan-fry until cooked through.",
        "Drain the pasta, reserving a small amount of pasta water.",
        "In a large bowl, combine the pasta, cooked chicken, pesto, and halved cherry tomatoes.",
        "Add a splash of pasta water to help the sauce coat the pasta. Stir in the grated parmesan cheese.",
        "Serve immediately."
    ]
  },
  {
    id: 34,
    title: "Vegan Mac and Cheese",
    subtitle: "A creamy and cheesy pasta bake, completely dairy-free",
    prepTime: "15 minutes",
    cookTime: "30 minutes",
    servings: 6,
    tags: ["vegan", "pasta", "comfort food"],
    ingredients: [
        { name: "macaroni", amount: 400, unit: "g" },
        { name: "cashews", amount: 150, unit: "g" },
        { name: "nutritional yeast", amount: 4, unit: "tbsp" },
        { name: "lemon juice", amount: 1, unit: "tbsp" },
        { name: "dijon mustard", amount: 1, unit: "tsp" },
        { name: "garlic powder", amount: 1, unit: "tsp" },
        { name: "plant-based milk", amount: 240, unit: "ml" }
    ],
    instructions: [
        "Boil the cashews for 10 minutes to soften them, then drain.",
        "Cook macaroni according to package directions.",
        "In a high-speed blender, combine the soaked cashews, nutritional yeast, lemon juice, mustard, garlic powder, and plant-based milk. Blend until very smooth.",
        "Drain the cooked macaroni and return it to the pot.",
        "Pour the cashew cheese sauce over the macaroni and stir to combine.",
        "Season with salt and pepper to taste. Serve immediately or bake in a dish with breadcrumbs on top."
    ]
  },
  {
    id: 35,
    title: "Honey Garlic Glazed Pork Chops",
    subtitle: "Tender pork chops in a sweet and savory glaze",
    prepTime: "5 minutes",
    cookTime: "15 minutes",
    servings: 4,
    tags: ["pork", "quick"],
    ingredients: [
        { name: "pork chops", amount: 4, unit: "" },
        { name: "honey", amount: 3, unit: "tbsp" },
        { name: "soy sauce", amount: 2, unit: "tbsp" },
        { name: "garlic", amount: 4, unit: "cloves" },
        { name: "apple cider vinegar", amount: 1, unit: "tbsp" }
    ],
    instructions: [
        "Season pork chops with salt and pepper.",
        "In a large skillet, sear the pork chops on both sides until golden brown.",
        "While the pork is cooking, whisk together honey, soy sauce, minced garlic, and vinegar.",
        "Pour the glaze over the pork chops in the skillet. Cook for another 3-5 minutes, spooning the glaze over the chops, until the pork is cooked through and the glaze has thickened.",
        "Let the pork chops rest for a few minutes before serving."
    ]
  },
  {
    id: 36,
    title: "Cauliflower Pizza",
    subtitle: "A delicious low-carb and gluten-free pizza alternative",
    prepTime: "20 minutes",
    cookTime: "30 minutes",
    servings: 2,
    tags: ["vegetarian", "gluten-free", "healthy", "pizza"],
    ingredients: [
        { name: "cauliflower", amount: 1, unit: "head" },
        { name: "egg", amount: 1, unit: "" },
        { name: "mozzarella cheese", amount: 100, unit: "g" },
        { name: "almond flour", amount: 50, unit: "g" },
        { name: "tomato sauce", amount: 100, unit: "ml" },
        { name: "pizza toppings", amount: 1, unit: "as desired" }
    ],
    instructions: [
        "Preheat oven to 220°C (425°F).",
        "Grate the cauliflower into rice-like pieces. Microwave for 8 minutes, then let cool and squeeze out as much moisture as possible using a clean towel.",
        "In a bowl, mix the dried cauliflower with the egg, half the mozzarella, almond flour, and a pinch of salt.",
        "Press the mixture into a pizza shape on a baking sheet lined with parchment paper.",
        "Bake for 15-20 minutes until golden and firm.",
        "Remove from oven, add tomato sauce, the remaining cheese, and your favorite toppings.",
        "Bake for another 10 minutes until the cheese is melted and bubbly."
    ]
  },
  {
    id: 37,
    title: "Chicken Parmesan",
    subtitle: "A classic Italian-American comfort food",
    prepTime: "20 minutes",
    cookTime: "25 minutes",
    servings: 4,
    tags: ["chicken", "italian", "comfort food", "pasta"],
    ingredients: [
        { name: "chicken breasts", amount: 4, unit: "" },
        { name: "breadcrumbs", amount: 150, unit: "g" },
        { name: "parmesan cheese", amount: 100, unit: "g" },
        { name: "egg", amount: 2, unit: "" },
        { name: "marinara sauce", amount: 500, unit: "ml" },
        { name: "mozzarella cheese", amount: 200, unit: "g" },
        { name: "spaghetti", amount: 400, unit: "g" }
    ],
    instructions: [
        "Preheat oven to 200°C (400°F).",
        "Pound chicken breasts to an even thickness.",
        "Set up a breading station with a bowl of beaten eggs and a plate of breadcrumbs mixed with parmesan cheese.",
        "Dip each chicken breast in egg, then dredge in the breadcrumb mixture.",
        "Pan-fry the chicken in a little oil for 2-3 minutes per side until golden.",
        "Place chicken in a baking dish, top with marinara sauce and mozzarella cheese.",
        "Bake for 15-20 minutes until the cheese is bubbly and the chicken is cooked through.",
        "Serve with cooked spaghetti."
    ]
  },
  {
    id: 38,
    title: "Beef Stew",
    subtitle: "A hearty and warming stew, perfect for a cold day",
    prepTime: "20 minutes",
    cookTime: "2 hours",
    servings: 8,
    tags: ["beef", "soup", "comfort food", "stew"],
    ingredients: [
        { name: "stewing beef", amount: 1, unit: "kg" },
        { name: "flour", amount: 50, unit: "g" },
        { name: "onion", amount: 2, unit: "" },
        { name: "carrots", amount: 4, unit: "" },
        { name: "celery", amount: 4, unit: "stalks" },
        { name: "potatoes", amount: 500, unit: "g" },
        { name: "beef broth", amount: 1.5, unit: "L" },
        { name: "red wine", amount: 250, unit: "ml" },
        { name: "bay leaves", amount: 2, unit: "" }
    ],
    instructions: [
        "Toss the beef in flour seasoned with salt and pepper.",
        "In a large pot, brown the beef in batches. Set aside.",
        "Add chopped onion, carrots, and celery to the pot and cook until softened.",
        "Pour in the red wine and deglaze the pot, scraping up any browned bits.",
        "Return the beef to the pot. Add the beef broth, bay leaves, and chopped potatoes.",
        "Bring to a simmer, then reduce heat, cover, and cook for at least 1.5 hours, or until the beef is tender."
    ]
  },
  {
    id: 39,
    title: "Fish and Chips",
    subtitle: "A British pub classic, made at home",
    prepTime: "15 minutes",
    cookTime: "20 minutes",
    servings: 4,
    tags: ["fish", "british", "comfort food"],
    ingredients: [
        { name: "cod fillets", amount: 4, unit: "" },
        { name: "flour", amount: 200, unit: "g" },
        { name: "beer", amount: 250, unit: "ml" },
        { name: "baking powder", amount: 1, unit: "tsp" },
        { name: "potatoes", amount: 1, unit: "kg" },
        { name: "vegetable oil", amount: 1, unit: "L" }
    ],
    instructions: [
        "Peel and chip the potatoes. Rinse and pat dry.",
        "Heat vegetable oil in a deep fryer or large pot to 160°C (320°F).",
        "Fry the chips in batches for 5-7 minutes until soft but not browned. Remove and drain.",
        "To make the batter, whisk together flour, baking powder, and a pinch of salt. Gradually whisk in the beer until you have a smooth batter.",
        "Increase oil temperature to 190°C (375°F).",
        "Dip the fish fillets in the batter, coating them completely.",
        "Carefully place the battered fish in the hot oil and fry for 5-8 minutes until golden and crispy.",
        "Return the chips to the fryer and cook for another 2-3 minutes until golden and crisp.",
        "Serve immediately with salt, vinegar, and mushy peas."
    ]
  },
  {
    id: 40,
    title: "Lentil Soup",
    subtitle: "A simple, hearty, and healthy soup",
    prepTime: "10 minutes",
    cookTime: "45 minutes",
    servings: 6,
    tags: ["vegetarian", "vegan", "soup", "healthy", "lentils"],
    ingredients: [
        { name: "brown or green lentils", amount: 400, unit: "g" },
        { name: "vegetable broth", amount: 1.5, unit: "L" },
        { name: "onion", amount: 1, unit: "" },
        { name: "carrots", amount: 2, unit: "" },
        { name: "celery", amount: 2, unit: "stalks" },
        { name: "garlic", amount: 3, unit: "cloves" },
        { name: "cumin", amount: 1, unit: "tsp" },
        { name: "smoked paprika", amount: 1, unit: "tsp" }
    ],
    instructions: [
        "Rinse the lentils.",
        "In a large pot, sauté chopped onion, carrots, and celery until soft.",
        "Add minced garlic, cumin, and paprika and cook for 1 minute until fragrant.",
        "Add the lentils and vegetable broth. Bring to a boil.",
        "Reduce heat, cover, and simmer for 40-45 minutes, or until the lentils are tender.",
        "Season with salt and pepper. For a creamier soup, you can blend a portion of it."
    ]
  },
  {
    id: 41,
    title: "Garlic Shrimp Scampi",
    subtitle: "A quick and elegant pasta dish",
    prepTime: "10 minutes",
    cookTime: "15 minutes",
    servings: 4,
    tags: ["fish", "italian", "pasta", "quick", "shrimp"],
    ingredients: [
        { name: "shrimp", amount: 500, unit: "g" },
        { name: "linguine", amount: 400, unit: "g" },
        { name: "butter", amount: 100, unit: "g" },
        { name: "garlic", amount: 6, unit: "cloves" },
        { name: "white wine", amount: 120, unit: "ml" },
        { name: "lemon juice", amount: 60, unit: "ml" },
        { name: "fresh parsley", amount: 1, unit: "bunch" },
        { name: "red pepper flakes", amount: 0.5, unit: "tsp" }
    ],
    instructions: [
        "Cook linguine according to package directions.",
        "In a large skillet, melt butter over medium heat. Add minced garlic and red pepper flakes and cook for 1 minute.",
        "Add shrimp and cook until pink. Remove shrimp from skillet.",
        "Pour in white wine and lemon juice. Bring to a simmer and cook for 2 minutes.",
        "Return shrimp to the skillet. Stir in chopped parsley.",
        "Drain the pasta and add it to the skillet. Toss everything to combine.",
        "Serve immediately."
    ]
  },
  {
    id: 42,
    title: "Pulled Pork Sandwiches",
    subtitle: "Slow-cooked, tender, and juicy pork",
    prepTime: "15 minutes",
    cookTime: "8 hours",
    servings: 8,
    tags: ["pork", "comfort food", "american", "sandwich"],
    ingredients: [
        { name: "pork shoulder", amount: 2, unit: "kg" },
        { name: "BBQ sauce", amount: 500, unit: "ml" },
        { name: "onion", amount: 1, unit: "" },
        { name: "brown sugar", amount: 50, unit: "g" },
        { name: "apple cider vinegar", amount: 60, unit: "ml" },
        { name: "smoked paprika", amount: 1, unit: "tbsp" },
        { name: "brioche buns", amount: 8, unit: "" }
    ],
    instructions: [
        "Place the sliced onion in the bottom of a slow cooker.",
        "Rub the pork shoulder with brown sugar, paprika, salt, and pepper. Place on top of the onions.",
        "In a bowl, mix together BBQ sauce and apple cider vinegar. Pour over the pork.",
        "Cover and cook on low for 8 hours, or until the pork is fork-tender.",
        "Remove the pork from the slow cooker and shred it using two forks.",
        "Return the shredded pork to the slow cooker and stir with the sauce.",
        "Serve the pulled pork on brioche buns, with coleslaw if desired."
    ]
  },
  {
    id: 43,
    title: "Ratatouille",
    subtitle: "A classic French vegetable stew",
    prepTime: "30 minutes",
    cookTime: "1 hour",
    servings: 6,
    tags: ["vegetarian", "vegan", "french", "healthy", "stew"],
    ingredients: [
        { name: "aubergine", amount: 1, unit: "" },
        { name: "courgette", amount: 2, unit: "" },
        { name: "bell peppers", amount: 2, unit: "" },
        { name: "tomatoes", amount: 4, unit: "" },
        { name: "onion", amount: 1, unit: "" },
        { name: "garlic", amount: 4, unit: "cloves" },
        { name: "herbes de Provence", amount: 1, unit: "tbsp" }
    ],
    instructions: [
        "Chop all vegetables into bite-sized pieces.",
        "In a large pot, heat olive oil and sauté the onion until soft.",
        "Add the garlic and cook for another minute.",
        "Add the bell peppers and aubergine and cook for 10 minutes.",
        "Stir in the courgette and tomatoes. Add the herbes de Provence, salt, and pepper.",
        "Bring to a simmer, then cover and cook for at least 40 minutes, stirring occasionally, until all vegetables are very tender."
    ]
  },
  {
    id: 44,
    title: "Chicken Alfredo",
    subtitle: "A rich and creamy pasta dish",
    prepTime: "10 minutes",
    cookTime: "20 minutes",
    servings: 4,
    tags: ["chicken", "italian", "pasta", "comfort food"],
    ingredients: [
        { name: "fettuccine", amount: 400, unit: "g" },
        { name: "chicken breast", amount: 2, unit: "" },
        { name: "heavy cream", amount: 250, unit: "ml" },
        { name: "butter", amount: 50, unit: "g" },
        { name: "parmesan cheese", amount: 100, unit: "g" },
        { name: "garlic", amount: 2, unit: "cloves" }
    ],
    instructions: [
        "Cook fettuccine according to package directions.",
        "Slice chicken breast and season with salt and pepper. Pan-fry until cooked through.",
        "In a saucepan, melt butter over medium heat. Add minced garlic and cook for 1 minute.",
        "Stir in the heavy cream and bring to a gentle simmer. Cook for 3-5 minutes until it starts to thicken.",
        "Reduce heat and stir in the grated parmesan cheese until the sauce is smooth.",
        "Drain the pasta and combine with the Alfredo sauce and cooked chicken. Toss to coat."
    ]
  },
  {
    id: 45,
    title: "Stuffed Bell Peppers",
    subtitle: "A healthy and customizable meal",
    prepTime: "20 minutes",
    cookTime: "45 minutes",
    servings: 4,
    tags: ["vegetarian", "healthy", "gluten-free"],
    ingredients: [
        { name: "bell peppers", amount: 4, unit: "" },
        { name: "quinoa or rice, cooked", amount: 200, unit: "g" },
        { name: "black beans", amount: 1, unit: "tin" },
        { name: "corn", amount: 150, unit: "g" },
        { name: "onion", amount: 1, unit: "" },
        { name: "tomato sauce", amount: 250, unit: "ml" },
        { name: "cheddar cheese", amount: 100, unit: "g" }
    ],
    instructions: [
        "Preheat oven to 190°C (375°F).",
        "Cut the tops off the bell peppers and remove the seeds.",
        "In a bowl, mix together the cooked quinoa/rice, black beans, corn, chopped onion, and half of the tomato sauce.",
        "Spoon the mixture into the bell peppers.",
        "Place the stuffed peppers in a baking dish. Pour the remaining tomato sauce over the top and sprinkle with cheese.",
        "Bake for 35-45 minutes, until the peppers are tender and the filling is heated through."
    ]
  },
  {
    id: 46,
    title: "Beef Chili",
    subtitle: "A classic, hearty chili that's perfect for a crowd",
    prepTime: "15 minutes",
    cookTime: "1.5 hours",
    servings: 8,
    tags: ["beef", "mexican", "spicy", "comfort food", "soup", "stew"],
    ingredients: [
        { name: "minced beef", amount: 1, unit: "kg" },
        { name: "kidney beans", amount: 2, unit: "tins" },
        { name: "chopped tomatoes", amount: 2, unit: "tins" },
        { name: "onion", amount: 2, unit: "" },
        { name: "bell pepper", amount: 1, unit: "" },
        { name: "garlic", amount: 4, unit: "cloves" },
        { name: "chili powder", amount: 3, unit: "tbsp" },
        { name: "cumin", amount: 1, unit: "tbsp" }
    ],
    instructions: [
        "In a large pot, brown the minced beef. Drain off the fat.",
        "Add chopped onion and bell pepper and cook until softened.",
        "Stir in minced garlic, chili powder, and cumin. Cook for 1 minute.",
        "Add the chopped tomatoes and kidney beans (with their liquid).",
        "Bring to a simmer, then reduce heat, cover, and cook for at least 1 hour, stirring occasionally."
    ]
  },
  {
    id: 47,
    title: "Spinach and Feta Stuffed Chicken",
    subtitle: "An elegant and flavorful chicken dish",
    prepTime: "15 minutes",
    cookTime: "25 minutes",
    servings: 4,
    tags: ["chicken", "healthy", "gluten-free", "mediterranean"],
    ingredients: [
        { name: "chicken breasts", amount: 4, unit: "" },
        { name: "spinach", amount: 200, unit: "g" },
        { name: "feta cheese", amount: 100, unit: "g" },
        { name: "cream cheese", amount: 50, unit: "g" },
        { name: "garlic", amount: 2, unit: "cloves" },
        { name: "olive oil", amount: 1, unit: "tbsp" }
    ],
    instructions: [
        "Preheat oven to 200°C (400°F).",
        "Wilt the spinach in a pan, then squeeze out all excess liquid.",
        "In a bowl, mix the spinach, crumbled feta, cream cheese, and minced garlic.",
        "Cut a pocket into the side of each chicken breast.",
        "Stuff each chicken breast with the spinach and feta mixture.",
        "Sear the stuffed chicken breasts in a hot, oven-safe skillet with olive oil for 2-3 minutes per side.",
        "Transfer the skillet to the oven and bake for 15-20 minutes, or until the chicken is cooked through."
    ]
  },
  {
    id: 48,
    title: "Tuna Salad Sandwich",
    subtitle: "A quick and easy lunch classic",
    prepTime: "10 minutes",
    cookTime: "0 minutes",
    servings: 2,
    tags: ["fish", "quick", "sandwich", "lunch"],
    ingredients: [
        { name: "canned tuna", amount: 1, unit: "tin" },
        { name: "mayonnaise", amount: 3, unit: "tbsp" },
        { name: "celery", amount: 1, unit: "stalk" },
        { name: "red onion", amount: 0.25, unit: "" },
        { name: "lemon juice", amount: 1, unit: "tsp" },
        { name: "bread", amount: 4, unit: "slices" }
    ],
    instructions: [
        "Drain the canned tuna.",
        "Finely chop the celery and red onion.",
        "In a bowl, mix the tuna, mayonnaise, celery, red onion, and lemon juice.",
        "Season with salt and pepper to taste.",
        "Serve the tuna salad between two slices of bread. Add lettuce and tomato if desired."
    ]
  },
  {
    id: 49,
    title: "Mushroom and Spinach Quesadillas",
    subtitle: "A quick and satisfying vegetarian meal",
    prepTime: "10 minutes",
    cookTime: "10 minutes",
    servings: 2,
    tags: ["vegetarian", "quick", "mexican", "lunch"],
    ingredients: [
        { name: "mushrooms", amount: 200, unit: "g" },
        { name: "spinach", amount: 100, unit: "g" },
        { name: "cheddar or monterey jack cheese", amount: 150, unit: "g" },
        { name: "flour tortillas", amount: 4, unit: "" },
        { name: "onion", amount: 0.5, unit: "" }
    ],
    instructions: [
        "Slice the mushrooms and chop the onion.",
        "In a skillet, sauté the onion and mushrooms until softened and browned.",
        "Add the spinach and cook until wilted. Remove from heat.",
        "Place a tortilla in a clean, dry skillet over medium heat.",
        "Sprinkle half of the tortilla with cheese, top with the mushroom and spinach mixture, then more cheese.",
        "Fold the other half of the tortilla over the filling.",
        "Cook for 2-3 minutes per side, until the tortilla is golden and the cheese is melted.",
        "Repeat with the remaining ingredients. Cut into wedges and serve with salsa and sour cream."
    ]
  },
  {
    id: 50,
    title: "Classic French Onion Soup",
    subtitle: "A rich and savory soup with caramelized onions and a cheesy crouton topping",
    prepTime: "15 minutes",
    cookTime: "1 hour 15 minutes",
    servings: 4,
    tags: ["soup", "vegetarian", "french", "comfort food"],
    ingredients: [
        { name: "onions", amount: 4, unit: "" },
        { name: "butter", amount: 50, unit: "g" },
        { name: "beef or vegetable broth", amount: 1, unit: "L" },
        { name: "dry white wine", amount: 120, unit: "ml" },
        { name: "baguette", amount: 1, unit: "" },
        { name: "gruyère cheese", amount: 200, unit: "g" }
    ],
    instructions: [
        "Thinly slice the onions.",
        "In a large pot, melt butter over medium-low heat. Add the onions and cook slowly for 45-60 minutes, stirring occasionally, until deeply caramelized and sweet.",
        "Pour in the white wine to deglaze the pot. Scrape up any browned bits from the bottom.",
        "Add the broth, bring to a simmer, and cook for at least 20 minutes.",
        "Preheat the grill (broiler).",
        "Ladle the soup into oven-safe bowls. Top each with a thick slice of baguette and a generous pile of grated Gruyère cheese.",
        "Place the bowls under the grill until the cheese is melted, bubbly, and golden brown."
    ]
  }
];
