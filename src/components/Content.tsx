import { GenreResponseProps, MovieProps } from "../App";
import { MovieCard } from './MovieCard';

interface ContentProps{
  filmes: MovieProps[];
  selectedGenre:GenreResponseProps;
}

export function Content({ 
  filmes,
  selectedGenre
}:ContentProps) {
  return(
    <div className="container">
        <header>
          <span className="category">
            Categoria:<span> {selectedGenre.title}</span>
          </span>
        </header>

        <main>
          <div className="movies-list">
            {filmes.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                runtime={movie.Runtime}
                rating={movie.Ratings[0].Value}
              />
            ))}
          </div>
        </main>
      </div>
  )
}