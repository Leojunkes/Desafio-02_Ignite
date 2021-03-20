import { Button } from './Button';
import {GenreResponseProps} from '../App'

interface SidebarProps {
  generos: GenreResponseProps[];
  clickButtonSidebar: (id:number) => void;
  selectedGenreId:number;
}

export function SideBar({ generos, clickButtonSidebar, selectedGenreId}:SidebarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {generos.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => clickButtonSidebar(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
