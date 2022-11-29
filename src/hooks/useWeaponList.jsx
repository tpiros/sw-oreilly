import { useState, useEffect } from 'react';

const myCache = {};

export default function useWeaponList(faction) {
  const [weaponList, setWeaponList] = useState([]);
  const [status, setStatus] = useState('unloaded');

  useEffect(() => {
    if (!faction) {
      setWeaponList([]);
    } else if (myCache[faction]) {
      setWeaponList(myCache[faction]);
    } else {
      requestData();
    }
    async function requestData() {
      setWeaponList([]);
      setStatus('loading');

      const res = await fetch(
        `https://adoring-lichterman-bc18a2.netlify.app/.netlify/functions/sw?faction=${faction}`
      );
      const data = await res.json();
      const weapons = data.reduce((uq, item) => {
        return uq.includes(item.weapon) ? uq : [...uq, item.weapon];
      }, []);
      myCache[faction] = weapons || [];
      setWeaponList(myCache[faction]);
      setStatus('loaded');
    }
  }, [faction]);

  return [weaponList, status];
}
