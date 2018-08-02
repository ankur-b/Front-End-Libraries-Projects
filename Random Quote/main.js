var quotes = [
  {
    quote: "When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one that has opened for us.",
    author: "Alexander Graham Bell"
  },
  {
    quote: "The only impossible journey is the one you never begin.",
    author: "Anthony Robbins"
  },
  {
    quote: "If you want to live a happy life, tie it to a goal, not to people or things.",

    author: "Albert Einstein"
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking",
    author: "Steve Jobs"
  },
  {
    quote: "The three great essentials to achieve anything worthwhile are, first, hard work; second, stick-to-itiveness; third, common sense.",
    author: "Thomas A. Edison"
  },
  {
    quote: "The successful warrior is the average man, with laser-like focus.",
    author: "Bruce Lee"
  },
  {
    quote: "The person who reads too much and uses his brain too little will fall into lazy habits of thinking.",
    author: "Albert Einstein"
  },
  {
    quote: "Life would be tragic if it weren’t funny",
    author: "Stephen Hawking"
  },
  {
    quote: "And now that you don't have to be perfect, you can be good.",
    author: "John Steinbeck"
  },
  {
    quote: "Anyone who has never made a mistake has never tried anything new.",
    author: "Albert Einstein"
  },
  {
    quote: "It hurt because it mattered." ,
    author: "John Green"
  },
  {
    quote: "Great works are performed not by strength but by perseverance.",
    author: "Samuel Johnson"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
    author: "Albert Einstein"
  },
  {
    quote: "All our dreams can come true if we have the courage to pursue them.",
    author: "Walt Disney"
  },
  {
    quote: "As we look ahead into the next century, leaders will be those who empower others.",
    author: "Bill Gates"
  }
];
var currentIndex;
function updateQuote() {
  do{
    // Generate random position 
    var index = Math.floor(Math.random() * quotes.length);  
  } while(currentIndex === index)

  currentIndex = index;
  $('#text').html(quotes[index].quote);
  $('#author').html(quotes[index].author); 
  $('#tweet-quote').click(shareTweet) 
}

$(function () {
  updateQuote();
  $('#new-quote').click(function() {
    updateQuote();
  });
});
function shareTweet() {
  var quoteToTweet = quotes[currentIndex].quote;

  // Cuts the quote if length is longer than 100
  if (quoteToTweet.length > 100) {
    quoteToTweet = quoteToTweet.substr(0, 100).match(/(^.+)(\s)/)[0] + "...";
  }
  quoteToTweet = encodeURI("\"" + quoteToTweet);
  window.open("https://twitter.com/intent/tweet?text=" + quoteToTweet + "\"");
};