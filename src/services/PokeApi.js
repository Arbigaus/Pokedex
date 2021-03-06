import Fetch from './FetchServices';

const baseUrl = 'https://pokeapi.co/api/v2';

const getList = async () => {
  // const url = `${baseUrl}pokemon`;
  const url = `${baseUrl}/pokemon?limit=150`;

  const pokeLisData = await Fetch.get(url);

  const res = [];

  for (const pokemon of pokeLisData.results) {
    // eslint-disable-next-line no-await-in-loop
    const pokeDetails = await Fetch.get(pokemon.url);

    const { id, name, types } = pokeDetails;
    const typesArr = types.map((type) => type.type.name);

    res.push({
      name,
      number: id,
      types: typesArr,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    });
  }

  return res;
};

const getPokeDetails = async (id) => {
  const pokeDetails = await Fetch.get(`${baseUrl}/pokemon/${id}/`);

  const { stats } = pokeDetails;

  const statsArr = stats.map((stat) => {
    return {
      name: stat.stat.name,
      baseStat: stat.base_stat,
    };
  });

  return { ...pokeDetails, stats: statsArr };
};

module.exports = { getList, getPokeDetails };
