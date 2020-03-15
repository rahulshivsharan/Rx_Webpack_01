import Rx from 'rx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/override_style.css';
import {	
	getSearchTemplate,
	loadMovie,
	loadReview,
	loadError
} from "./template";
import {
	getMovies,
	getReviews,
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

const loadReviews = (movieName) => {
	let observable = getReviews(movieName);
	observable.subscribe((data) =>{
		//console.log(data);
		let movieList = (data["status"] === 'OK') ? data["results"] : [];

		if($.isArray(movieList) === true && movieList.length){
			const htmltemplate = loadReview(movieList);
			$(".movie-container").append(htmltemplate);
		}else{
			const htmltemplate = loadError(movieList);
			$(".movie-container").append("<div class='row'>"+htmltemplate+"</div>");
		}
	});
}

$(() => {	
	$("#movie_menu_select li").click(function(){		
		let MENU_SELECTION = $(this).find("a").text();

		$(this).addClass("active").siblings().removeClass("active");
		
		$("#mother-container").html(getSearchTemplate());


		$("#searchBtn").on("click",function(){	
			console.log("Clicked....");	
			$(".movie-container").html("<p class='releaseDate'>Movie List</p>");
			let movieName = $("#searchMovie").val();
			
			if(MENU_SELECTION === "Movie"){
				loadMovies(movieName);	
			}else{
				loadReviews(movieName);
			}
			
		});
	});

	
});

