// What's Hiding Amongst the Crowd?

// A word is on the loose and now has tried to hide amongst a crowd of tall letters!
// Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

const detectHiding = (phrase) => {
  let secret = '';
  for (let i in phrase) {
    if (phrase[i] === phrase[i].toLowerCase()) {
      secret += phrase[i];
    }
  }
  return secret;
};

module.exports = detectHiding;
