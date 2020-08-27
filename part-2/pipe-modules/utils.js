module.exports = {
  keepSingleENTitle: (queryResults) => {
    const originalData = queryResults.data;

    // Keep only English titles.
    const english = /^[A-Za-z0-9 .]*$/;
    const showsWithEnglishTitles = originalData.filter(show => english.test(show.title) );

    // Filter duplicate shows.
    const ids = []
    const shows = []

    showsWithEnglishTitles.forEach(show => {
      // Only add show when the id hasn't been encountered yet.
      if (ids.indexOf(show.id) === -1) {
        ids.push(show.id);
        shows.push(show);
      }
    });

    queryResults.data = shows;
    return queryResults;
  }
};
