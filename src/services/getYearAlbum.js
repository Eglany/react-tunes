const getYearAlbum = (releaseDate) => {
  const date = new Date(releaseDate);
  return date.getFullYear();
};

export default getYearAlbum;
