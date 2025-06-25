const quotes = {
  happy: [
    "Happiness is not by chance, but by choice.",
    "Smile, it's the key that fits the lock of everybody's heart.",
    "Happiness looks good on you!"
  ],
  sad: [
    "Tough times don’t last. Tough people do.",
    "It’s okay to feel sad sometimes. Just don’t unpack and live there.",
    "Crying is how your heart speaks when your lips can’t explain the pain."
  ],
  calm: [
    "Peace begins with a deep breath.",
    "Keep calm and carry on.",
    "Tranquility is the new success."
  ],
  angry: [
    "Speak when you are angry and you’ll make the best speech you’ll ever regret.",
    "Breathe. It's just a bad moment, not a bad life.",
    "Anger doesn't solve anything. It builds nothing."
  ],
  love: [
    "You are loved more than you know.",
    "Love is the bridge between you and everything.",
    "Where there is love, there is life."
  ]
};

const music = {
  happy: "https://www.youtube.com/embed/ZbZSe6N_BXs",
  sad: "https://www.youtube.com/embed/hLQl3WQQoQ0",
  calm: "https://www.youtube.com/embed/2OEL4P1Rz04",
  angry: "https://www.youtube.com/embed/gOsM-DYAEhY",
  love: "https://www.youtube.com/embed/JGwWNGJdvx8"
};

function setMood(mood) {
  // Set quote
  const quoteList = quotes[mood];
  const randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];
  document.getElementById('quote').innerText = randomQuote;

  // Set music
  const musicUrl = music[mood];
  document.getElementById('musicPlayer').innerHTML = `
    <iframe width="300" height="200"
      src="${musicUrl}?autoplay=1&mute=0"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen>
    </iframe>`;
}
