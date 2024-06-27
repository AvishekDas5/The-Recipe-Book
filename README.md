# Recipe Search App

## Description

Recipe Search is a web application built with React that allows users to search for recipes using the Edamam Recipe Search API. It features a responsive design, dark mode toggle, and pagination for search results.

## Features

- Recipe search functionality
- Responsive design for various screen sizes
- Dark mode toggle
- Pagination for search results
- Display of recipe images, titles, and sources
- Links to full recipe details

## Technologies Used

- React
- React Hooks (useState, useEffect)
- Fetch API for data fetching
- CSS for styling
- React-Paginate for pagination

## Setup and Installation

1. Clone the repository:
git clone https://github.com/your-username/recipe-search-app.git
Copy
2. Navigate to the project directory:
cd recipe-search-app
Copy
3. Install dependencies:
npm install
Copy
4. Create a `.env` file in the root directory and add your Edamam API credentials:
REACT_APP_EDAMAM_APP_ID=your_app_id
REACT_APP_EDAMAM_APP_KEY=your_app_key
Copy
5. Start the development server:
npm start
Copy
6. Open your browser and visit `http://localhost:3000` to view the app.

## Usage

1. Enter a recipe name or ingredients in the search bar.
2. Click the "Search" button or press Enter to search for recipes.
3. Browse through the search results.
4. Click on "View Recipe" to see the full recipe details on the source website.
5. Use the pagination at the bottom to navigate through multiple pages of results.
6. Toggle between light and dark mode using the switch in the header.

## API Reference

This project uses the [Edamam Recipe Search API](https://developer.edamam.com/edamam-recipe-api). You'll need to sign up for a free account to get your API credentials.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).