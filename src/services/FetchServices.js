const headers = { Accept: 'application/json' };

const get = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
    cache: 'no-cache',
    credentials: 'omit',
    headers,
    redirect: 'follow',
    mode: 'cors',
  });
  return response.json();
};

module.exports = { get };
