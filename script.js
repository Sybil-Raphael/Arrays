// Set up event listener for when the user selects a genre
document.getElementById("genre").addEventListener("change", function() {
  // Get the selected genre
  const selectedGenre = document.getElementById("genre").value;

  // Create a variable to hold the list of movies for the selected genre
  let movieList = [];

  // Push movie titles directly to movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    // Comedy movies
    movieList.push("The Mask", "Superbad", "Dumb and Dumber", "Home Alone");
  } else if (selectedGenre === "Action") {
    // Action movies
    movieList.push("Die Hard","Mad Max: Fury Road","John Wick","The Dark Knight");
  } else if (selectedGenre === "Drama") {
    // Drama movies
    movieList.push("Forrest Gump","The Shawshank Redemption","The Godfather","A Beautiful Mind");
  } else if (selectedGenre === "Sci-Fi") {
    // Sci-Fi movies
    movieList.push("Inception","The Matrix","Interstellar","Star Wars");
  }

  // Display the list of movies on the page
  document.getElementById("movieRecommendations").innerText = `Enjoy: ${movieList.join(", ")}`;
});
  let movieList = [];

  // Assign the correct movie array to movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    // If Comedy is selected, use comedyMovies array
    movieList = comedyMovies;
  } else if (selectedGenre === "Action") {
    // If Action is selected, use actionMovies array
    movieList = actionMovies;
  } else if (selectedGenre === "Drama") {
    // If Drama is selected, use dramaMovies array
    movieList = dramaMovies;
  } else if (selectedGenre === "Sci-Fi") {
    // If Sci-Fi is selected, use sciFiMovies array
    movieList = sciFiMovies;
  }

  // Display the list of movies on the page
  document.getElementById("movieRecommendations").innerText = `Enjoy: ${movieList.join(", ")}`;

