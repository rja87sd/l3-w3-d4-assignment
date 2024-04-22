// Credit to ChatGPT for assistance and code comments.

import RecipeCard from "./RecipeCard";

export default function Dashboard() {
  // Array of recipe objects, each containing recipe details
  const recipes = [
    {
      img: "0.png",
      recipeName: "Delicious Pancakes",
      desc: "In a large bowl, whisk together the flour, sugar, baking powder, and salt. In another bowl, whisk together the milk, eggs, and melted butter. Pour the wet ingredients into the dry ingredients and stir until just combined. Heat a lightly oiled griddle or frying pan over medium-high heat. Pour the batter onto the griddle, using approximately 1/4 cup for each pancake. Cook until bubbles form on the surface, then flip and cook until golden brown. Serve hot with your favorite toppings.",
      ingredients: [
        "1 1/2 cups all-purpose flour",
        "3 1/2 teaspoons baking powder",
        "1 teaspoon salt",
        "1 tablespoon white sugar",
        "1 1/4 cups milk",
        "1 egg",
        "3 tablespoons melted butter",
      ],
    },
    // More recipe objects...
    {
      img: "1.png",
      recipeName: "Classic Spaghetti",
      desc: "Cook the spaghetti according to package instructions until al dente. In a large skillet, heat olive oil over medium heat. Add minced garlic and cook until fragrant, about 1 minute. Add ground beef and cook until browned. Stir in tomato sauce and simmer for 10 minutes. Serve hot over cooked spaghetti.",
      ingredients: [
        "8 ounces spaghetti pasta",
        "1 pound ground beef",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "1 (24 ounce) jar tomato sauce",
        "2 tablespoons olive oil",
        "Salt and pepper to taste",
      ],
    },
    {
      img: "2.png",
      recipeName: "Vegetable Stir-Fry",
      desc: "Heat oil in a large skillet or wok over high heat. Add chopped vegetables and stir-fry for 3-4 minutes, until tender-crisp. Add soy sauce and stir to coat vegetables. Serve hot over cooked rice.",
      ingredients: [
        "2 cups broccoli florets",
        "1 carrot, thinly sliced",
        "1 bell pepper, sliced",
        "1 onion, sliced",
        "2 tablespoons soy sauce",
        "2 tablespoons vegetable oil",
      ],
    },
    {
      img: "3.png",
      recipeName: "Grilled Chicken Salad",
      desc: "Preheat grill to medium-high heat. Season chicken breasts with salt, pepper, and your favorite spices. Grill chicken for 6-8 minutes per side, until cooked through. Let chicken rest for 5 minutes, then slice. In a large bowl, toss together mixed greens, cherry tomatoes, cucumber, and sliced avocado. Top salad with grilled chicken slices. Drizzle with your favorite dressing and serve immediately.",
      ingredients: [
        "2 boneless, skinless chicken breasts",
        "4 cups mixed greens",
        "1 cup cherry tomatoes, halved",
        "1 cucumber, sliced",
        "1 avocado, sliced",
        "Salt and pepper to taste",
      ],
    },
    {
      img: "4.png",
      recipeName: "Cheesy Baked Ziti",
      desc: "Preheat oven to 375°F (190°C). Cook ziti according to package instructions until al dente. In a large skillet, cook ground beef over medium heat until browned. Stir in marinara sauce and simmer for 5 minutes. In a large bowl, combine cooked ziti, beef mixture, and ricotta cheese. Transfer mixture to a greased baking dish and sprinkle with mozzarella cheese. Bake for 25-30 minutes, until cheese is bubbly and golden brown.",
      ingredients: [
        "1 pound ziti pasta",
        "1 pound ground beef",
        "1 (24 ounce) jar marinara sauce",
        "1 cup ricotta cheese",
        "2 cups shredded mozzarella cheese",
        "Salt and pepper to taste",
      ],
    },
    {
      img: "5.png",
      recipeName: "Chocolate Chip Cookies",
      desc: "Preheat oven to 350°F (175°C). In a large bowl, cream together butter, white sugar, and brown sugar until smooth. Beat in eggs one at a time, then stir in vanilla. Combine flour, baking soda, and salt; gradually stir into the creamed mixture. Fold in chocolate chips. Drop dough by rounded spoonfuls onto ungreased cookie sheets. Bake for 8 to 10 minutes, until edges are golden brown. Allow cookies to cool on baking sheet for 5 minutes before transferring to wire racks to cool completely.",
      ingredients: [
        "1 cup butter, softened",
        "1 cup white sugar",
        "1 cup packed brown sugar",
        "2 eggs",
        "2 teaspoons vanilla extract",
        "3 cups all-purpose flour",
        "1 teaspoon baking soda",
        "2 cups semisweet chocolate chips",
      ],
    },
  ];

  return (
    <div>
      {/* Grid layout for displaying recipe cards */}
      <section className="grid lg:grid-cols-3 gap-5 mb-5 mx-5">
        {/* Map over the recipes array to generate a RecipeCard component for each recipe */}
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            img={recipe.img}
            recipeName={recipe.recipeName}
            desc={recipe.desc}
            ingredients={recipe.ingredients}
          />
        ))}
      </section>
    </div>
  );
}
