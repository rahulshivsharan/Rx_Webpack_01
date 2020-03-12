import Rx from 'rx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/override_style.css';
import {
	getSearchTemplate,
	loadMovie,
	loadError
} from "./template";
import {
	getMovies
} from "./service";

const loadMovies = (movieName) => {
	let observable = getMovies(movieName);
	observable.subscribe((data) => {		
		let movieList = ("Search" in data) ? data["Search"] : data;
		$(".movie-container").append("<div class='row'></div>");

		if($.isArray(movieList) === true){
			$.each(movieList,(index,movieObj) => {
				const htmltemplate = loadMovie(movieObj);
				$(".movie-container").append(htmltemplate);
			});	
		}else if(movieList["Response"] !== undefined && movieList["Response"] === "False"){
			const htmltemplate = loadError(movieList);
			$(".movie-container").append(htmltemplate);
		}

		
	});
}



$(() => {
	$(".content-container").append(getSearchTemplate());
	$(".movie-container").html("<p class='releaseDate'>Movie List</p>");

	$("#searchBtn").click(() => {		
		$(".movie-container").html("<p class='releaseDate'>Movie List</p>");
		let movieName = $("#searchMovie").val();
		loadMovies(movieName);
	});
});

