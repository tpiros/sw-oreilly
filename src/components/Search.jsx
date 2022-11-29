import { useState } from 'react';
import { Link } from 'react-router-dom';
import useWeaponList from '../hooks/useWeaponList';

const factions = ['Rebellion', 'Galactic Empire', 'First Order', 'Resistance'];

const Search = () => {
  const [characters, setCharacters] = useState([]);
  const [faction, setFaction] = useState('');
  const [weapon, setWeapon] = useState('');
  const [weapons] = useWeaponList(faction);

  async function getData() {
    const res = await fetch(
      `https://adoring-lichterman-bc18a2.netlify.app/.netlify/functions/sw?faction=${faction}&weapon=${weapon}`
    );
    const data = await res.json();
    setCharacters(data);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getData();
        }}
      >
        <label htmlFor="faction">
          Faction:
          <select
            className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
            id="faction"
            value={faction}
            onChange={(e) => setFaction(e.target.value)}
          >
            <option value="">Pick a faction</option>
            {factions.map((faction) => (
              <option value={faction} key={faction}>
                {faction}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="weapon">
          Weapon:
          <select
            className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
            id="weapon"
            value={weapon}
            onChange={(e) => setWeapon(e.target.value)}
          >
            <option value="">Pick a weapon</option>
            {weapons.map((weapon, idx) => (
              <option value={weapon} key={idx}>
                {weapon}
              </option>
            ))}
          </select>
        </label>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-4 px-4 rounded">
          Search
        </button>
      </form>
      <ul>
        {characters.map((character) => (
          <li className="text-xl py-4" key={character.id}>
            <Link
              className="hover:underline"
              to={`/characters/${character.id}`}
            >
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
