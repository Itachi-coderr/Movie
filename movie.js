let movies = [];

function addMovie(title, director, year, rating) {
    const movie = {
        title: title,
        director: director,
        year: year,
        rating: rating
    };

    movies.push(movie);
    alert(`Movie "${title}" added to the collection.`);
}

function displayMovies() {
    if (movies.length === 0) {
        alert("No movies in the collection.");
    } else {
        let movieList = "Movies in the collection:\n";
        movies.forEach((movie, index) => {
            movieList += `${index + 1}. Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}, Rating: ${movie.rating}\n`;
        });
        alert(movieList);
    }
}

function deleteMovie(title) {
    const initialLength = movies.length;
    movies = movies.filter(movie => movie.title.toLowerCase() !== title.toLowerCase());

    if (movies.length < initialLength) {
        alert(`Movie "${title}" deleted from the collection.`);
    } else {
        alert(`Movie "${title}" not found in the collection.`);
    }
}

function manageMovies() {
    while (true) {
        const action = prompt("Choose an action: add, view, delete").toLowerCase();

        switch (action) {
            case "add":
                const title = prompt("Enter the movie title:");
                const director = prompt("Enter the movie director:");
                const year = prompt("Enter the release year:");
                const rating = prompt("Enter the IMDB rating:");
                addMovie(title, director, year, rating);
                break;
            case "view":
                displayMovies();
                break;
            case "delete":
                const titleToDelete = prompt("Enter the title of the movie to delete:");
                deleteMovie(titleToDelete);
                break;
            default:
                alert("Invalid action. Please choose add, view, or delete.");
        }
    }
}

manageMovies();
