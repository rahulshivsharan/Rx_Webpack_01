import {Observable} from 'rxjs';

export const getMovies = (searchName) =>{
	const date = new Date();
	const url = "http://www.omdbapi.com/?apikey=f57dc6f0&type=movie&s="+searchName+"&dt="+date.getTime();
	return new Observable(function(observer){
		$.ajax({
			"url" : url,
			"datatype" : "json",
			"method" : "GET",
			"success" : function(data){
				observer.next(data);
			},
			error : function(){
				observer.next(data);
			}
		});
	});
}


export const getReviews = (movieName) => {
	const date = new Date();
	const url = "http://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=kfcfYzLWBQw1UwQiqxJGNuskVaHAkiFq&query="+movieName+"&dt="+date.getTime();
	return new Observable(function(observer){
		$.ajax({
			"url" : url,
			"datatype" : "json",
			"method" : "GET",
			"success" : function(data){
				observer.next(data);
			},
			error : function(){
				observer.next(data);
			}
		});
	});
}