const fetchLikes = async () => {
  const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const response = await fetch(`${baseUrl}${process.env.APP_ID}/likes`);
  const data = await response.json();
  return data;
};

export default fetchLikes;