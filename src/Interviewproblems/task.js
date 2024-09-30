import React from 'react'
import { Card } from 'react-bootstrap';
const Task = () => {
    const recipeFinder = {
        recipes: [
          {
            recipeId: 1,
            title: "Spaghetti Carbonara",
            cuisine: "Italian",
            ingredients: [
              { name: "Spaghetti", quantity: "200g" },
              { name: "Eggs", quantity: "2" },
              { name: "Parmesan cheese", quantity: "50g" },
              { name: "Pancetta", quantity: "100g" },
              { name: "Black pepper", quantity: "to taste" }
            ],
            instructions: [
              "Cook the spaghetti according to package instructions.",
              "In a bowl, whisk the eggs and mix in the grated Parmesan cheese.",
              "In a pan, cook the pancetta until crispy.",
              "Combine the hot spaghetti with pancetta, then quickly mix in the egg mixture.",
              "Serve with black pepper on top."
            ],
            preparationTime: "20 minutes",
            servings: 2,
            nutrition: {
              calories: 600,
              protein: "25g",
              fat: "30g",
              carbs: "70g"
            },
            tags: ["Pasta", "Quick", "Dinner"]
          },
          {
            recipeId: 2,
            title: "Chicken Tikka Masala",
            cuisine: "Indian",
            ingredients: [
              { name: "Chicken breast", quantity: "500g" },
              { name: "Yogurt", quantity: "200g" },
              { name: "Tomato puree", quantity: "150g" },
              { name: "Onion", quantity: "1, chopped" },
              { name: "Garlic", quantity: "2 cloves, minced" },
              { name: "Ginger", quantity: "1 inch, grated" },
              { name: "Spices", quantity: "to taste" } // e.g., cumin, coriander, garam masala
            ],
            instructions: [
              "Marinate chicken in yogurt and spices for at least 1 hour.",
              "Cook onions, garlic, and ginger in a pan until soft.",
              "Add marinated chicken and cook until browned.",
              "Stir in tomato puree and simmer until chicken is cooked through.",
              "Serve with rice or naan."
            ],
            preparationTime: "1 hour 30 minutes",
            servings: 4,
            nutrition: {
              calories: 500,
              protein: "40g",
              fat: "20g",
              carbs: "45g"
            },
            tags: ["Curry", "Spicy", "Main Course"]
          },
          {
            recipeId: 3,
            title: "Vegetable Stir-Fry",
            cuisine: "Asian",
            ingredients: [
              { name: "Mixed vegetables", quantity: "300g" }, // e.g., bell peppers, broccoli, carrots
              { name: "Soy sauce", quantity: "2 tablespoons" },
              { name: "Garlic", quantity: "2 cloves, minced" },
              { name: "Ginger", quantity: "1 inch, grated" },
              { name: "Sesame oil", quantity: "1 tablespoon" },
              { name: "Rice", quantity: "200g" }
            ],
            instructions: [
              "Cook rice according to package instructions.",
              "In a pan, heat sesame oil and add garlic and ginger.",
              "Add mixed vegetables and stir-fry until tender.",
              "Pour in soy sauce and mix well.",
              "Serve hot over rice."
            ],
            preparationTime: "15 minutes",
            servings: 2,
            nutrition: {
              calories: 300,
              protein: "10g",
              fat: "15g",
              carbs: "40g"
            },
            tags: ["Vegan", "Quick", "Healthy"]
          },
          {
            recipeId: 4,
            title: "Chocolate Chip Cookies",
            cuisine: "American",
            ingredients: [
              { name: "Butter", quantity: "100g" },
              { name: "Sugar", quantity: "150g" },
              { name: "Brown sugar", quantity: "100g" },
              { name: "Eggs", quantity: "1" },
              { name: "Vanilla extract", quantity: "1 teaspoon" },
              { name: "Flour", quantity: "200g" },
              { name: "Chocolate chips", quantity: "100g" },
              { name: "Baking soda", quantity: "1 teaspoon" },
              { name: "Salt", quantity: "a pinch" }
            ],
            instructions: [
              "Preheat the oven to 180°C (350°F).",
              "Cream together butter, sugar, and brown sugar.",
              "Add the egg and vanilla extract, mixing well.",
              "Stir in flour, baking soda, and salt.",
              "Fold in chocolate chips.",
              "Scoop onto baking sheets and bake for 10-12 minutes."
            ],
            preparationTime: "30 minutes",
            servings: 12,
            nutrition: {
              calories: 150,
              protein: "2g",
              fat: "7g",
              carbs: "22g"
            },
            tags: ["Dessert", "Baking", "Sweet"]
          },
          {
            recipeId: 5,
            title: "Caprese Salad",
            cuisine: "Italian",
            ingredients: [
              { name: "Tomatoes", quantity: "2, sliced" },
              { name: "Mozzarella cheese", quantity: "200g, sliced" },
              { name: "Fresh basil", quantity: "a handful" },
              { name: "Olive oil", quantity: "2 tablespoons" },
              { name: "Balsamic vinegar", quantity: "1 tablespoon" },
              { name: "Salt", quantity: "to taste" },
              { name: "Pepper", quantity: "to taste" }
            ],
            instructions: [
              "Layer sliced tomatoes and mozzarella cheese on a plate.",
              "Tuck in fresh basil leaves.",
              "Drizzle with olive oil and balsamic vinegar.",
              "Season with salt and pepper."
            ],
            preparationTime: "10 minutes",
            servings: 2,
            nutrition: {
              calories: 250,
              protein: "12g",
              fat: "20g",
              carbs: "8g"
            },
            tags: ["Salad", "Fresh", "Appetizer"]
          }
        ]
      };
    
    
    
    
     
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Recipe List</h1>
      <div className="row">
        {recipeFinder.recipes.map((recipe) => (
          <div className="col-md-4 mb-4" key={recipe.recipeId}>
            <Card>
              <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{recipe.cuisine} Cuisine</Card.Subtitle>
                <Card.Text><strong>Preparation Time:</strong> {recipe.preparationTime}</Card.Text>
                <Card.Text><strong>Calories:</strong> {recipe.nutrition.calories}</Card.Text>
                <Card.Text>
                  <strong>Ingredients:</strong>
                  <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient.name}: {ingredient.quantity}</li>
                    ))}
                  </ul>
                </Card.Text>
                <Card.Text>
                  <strong>Instructions:</strong>
                  <ol>
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ol>
                </Card.Text>
                <Card.Text><strong>Tags:</strong> {recipe.tags.join(", ")}</Card.Text>
               
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task