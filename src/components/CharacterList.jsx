import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  useEffect(() => {
    let ignore = false;
    async function getData() {
      const res = await fetch(
        `https://adoring-lichterman-bc18a2.netlify.app/.netlify/functions/sw`
      );
      const data = await res.json();
      if (!ignore) {
        setCharacters(data);
      }
    }
    getData();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="p-5">
      <ul className="text-2xl">
        {characters.map((character) => (
          <li key={character.id} className="py-2">
            <Link
              className="hover:underline"
              to={`${pathname}/${character.id}`}
            >
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
