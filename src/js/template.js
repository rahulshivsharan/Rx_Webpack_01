export const getSearchTemplate = () => {
	return `<div class="row">
				<div class="col-md-4 col-md-offset-2">
					<input type="text" class="form-control" id="searchMovie" placeholder="Search Movies">
				</div>
				<div class="col-md-4">
					<button type="button" class="btn btn-primary" id="searchBtn">Search</button>
				</div>
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