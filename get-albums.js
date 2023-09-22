const axios = require("axios");

const apiUrl = "https://api.musixmatch.com/ws/1.1/";

async function main() {
  const client = axios.create({
    baseURL: apiUrl,
    timeout: 1000,
  });

  // make get request to artist.albums.get?artist_id=1039&s_release_date=desc&g_album_name=1
  const res = await client.get("artist.albums.get", {
    params: {
      apikey: "514eedfdae4737d2774c5f500999ef65",
      artist_id: 1039,
      s_release_date: "desc",
      g_album_name: 1,
    },
  });

  // get the album_id from the first album
  const content = res.data.message.body;

  for (const album of content.album_list) {
    console.log(album.album.album_name);
  }
}

main();
