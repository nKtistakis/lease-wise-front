async function _fetch(url, options) {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    return res.json();
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}

module.exports = _fetch;
