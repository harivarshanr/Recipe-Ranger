# Recipe Ranger

Recipe Ranger is a React-based web application that allows users to search for recipes and view detailed information about each recipe. The app fetches recipe data from the Edamam Recipe API and displays a list of recipes based on the user's search query.

## Features

- **Recipe Search:**
  - Users can search for recipes using keywords.
  - The search results update dynamically as the user types.

- **Recipe Details:**
  - Users can view a list of recipes with images and names.
  - Clicking on "Ingredients" shows a dialog with detailed ingredient information.
  - Clicking on "See Complete Recipe" opens the full recipe in a new tab.

- **Responsive Design:**
  - The application is designed to be responsive and user-friendly.

## Technologies Used

- **React:** For building the user interface and managing state.
- **Axios:** For making HTTP requests to the Edamam Recipe API.
- **Styled Components:** For styling the components.
- **Material-UI:** For dialog components.

## File Structure

- `AppComponent.js`: Main component handling the search functionality and displaying recipes.
- `RecipeComponent.js`: Component for displaying individual recipe details.
- `App.css`: Contains the styles for the application.

## Getting Started

Follow these steps to get the application up and running on your local machine:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/recipe-ranger.git

2. **Navigate to the Project Directory and Install Dependencies:**
   ```bash
   cd recipe-ranger
   npm install

3. **Start the Development Server:**
   ```bash
   npm start

 The application will be available at http://localhost:3000 in your web browser.
   
## How to Use

- **Search for Recipes:** Enter a keyword into the search box and press enter or wait for the search results to update dynamically.
- **View Recipe Details:** Click on "Ingredients" to see detailed information about the recipe's ingredients, Click on "See Complete Recipe" to view the full recipe in a new tab.
- **Reset Search:** Click on the "Recipe Ranger" header to reset the search and clear the recipe list.

<img width="1439" alt="Screenshot 2024-08-22 at 4 01 49 PM" src="https://github.com/user-attachments/assets/0868e84a-77f0-4173-8877-d4bbbe0bb1ae">
<img width="1439" alt="Screenshot 2024-08-22 at 4 02 22 PM" src="https://github.com/user-attachments/assets/bdfac7ad-33c9-42c9-9b8f-f4f4e8ef35fa">
<img width="1439" alt="Screenshot 2024-08-22 at 4 02 34 PM" src="https://github.com/user-attachments/assets/2baf5c6e-ca8d-46f2-999d-47548b1000a7">


