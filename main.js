const songs = require("./songs.json");
console.log(songs);

let words = new Map();

for (let song of songs) {
  let lyricsWithoutPunctuation = song.lyrics
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\n]/g, "")
    .toLowerCase();
  let lyricWords = lyricsWithoutPunctuation.split(" ");
  for (let word of lyricWords) {
    if (word === "") continue;
    if (words.has(word)) {
      let count = words.get(word);
      words.set(word, count + 1);
    } else {
      words.set(word, 1);
    }
  }
}

const orderedWords = [...words.entries()].sort((a, b) => b[1] - a[1]);
console.log(orderedWords.slice(0, Math.min(10, orderedWords.length)));
