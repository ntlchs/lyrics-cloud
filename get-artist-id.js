const axios = require("axios");

const apiUrl = "https://api.musixmatch.com/ws/1.1/";

async function main() {
  const client = axios.create({
    baseURL: apiUrl,
    timeout: 1000,
  });

  const artistName = process.argv[2];
  const res = await client.get("artist.search", {
    params: {
      q_artist: artistName,
      apiKey: "514eedfdae4737d2774c5f500999ef65",
      page_size: 1,
      page: 1,
    },
  });

  console.error("res.data", res.data.body);
  try {
    const artistId = res.data.message.body.artist_list[0].artist.artist_id;
    console.log(artistId);
  } catch (err) {
    console.error(`error with artist "${artistName}": ${err}`);
    return;
  }
}

main();
