export const getSearchTemplate = () => {
	return `<div class="container content-container">
				<div class="row">
					<div class="col-md-4 col-md-offset-2">
						<input type="text" class="form-control" id="searchMovie" placeholder="Search Movies">
					</div>
					<div class="col-md-4">
						<button type="button" class="btn btn-primary" id="searchBtn">Search</button>
					</div>
				</div>
			</div>
			<div class="container movie-container">
				<p class='releaseDate'>Movie List</p>
			</div>`;
}


export const loadMovie = (movie) => {
	return `<div class="col-md-3">
				<div class="panel panel-primary custom_panel">
					<div class="panel-heading custom_header_panel">${movie.Title}</div>
					<div class="panel-body">
						<p class="releaseDate">${movie.Year}</p>
						<img src="${movie.Poster}" width="300" height="420" alt="${movie.Title}" />
					</div>	
				</div>
			</div>`;
}

export const loadReview = (movieList) => {
	let str = "";
	$.each(movieList,(index,movie)=>{
		str += (movie.multimedia !== null) ? `<div class="row">
					<div class="col-md-5">
						<div class="panel panel-primary custom_panel">
							<div class="panel-heading custom_header_panel">${movie.display_title}</div>
							<div class="panel-body">
								<div style="float:left">
									<p class="releaseDate">${movie.publication_date}</p>
									<p class="releaseDate">${movie.headline}</p>
									<p style="color:#800080">${movie.summary_short}</p>	
								</div>
								<div style="float:right">	
									<img src="${movie.multimedia.src}" width="${movie.multimedia.width}" height="${movie.multimedia.height}" alt="${movie.multimedia.type}" />
								</div>
							</div>						
						</div>
					</div>
				</div>` : 
				`<div class="row">
					<div class="col-md-5">
						<div class="panel panel-primary custom_panel">
							<div class="panel-heading custom_header_panel">${movie.display_title}</div>
							<div class="panel-body">
								<div style="float:left">
									<p class="releaseDate">${movie.publication_date}</p>
									<p class="releaseDate">${movie.headline}</p>
									<p style="color:#800080">${movie.summary_short}</p>	
								</div>								
							</div>						
						</div>
					</div>
				</div>`;
	});

	return str;
}

export const loadError = (error) => {
	return `<div class="col-md-3">
				<div class="panel panel-primary error_panel">
					<div class="panel-heading error_header_panel">Error</div>
					<div class="panel-body">
						<p class="errMsg">${error.Error}</p>						
					</div>	
				</div>
			</div>`;
}