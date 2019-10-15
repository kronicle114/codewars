/* eslint-disable strict */
const emojiTranslator = (str, mapper) => {
  let output = '';
  const words = str.split(' ');
  for(let i =0; i < words.length; i++){
    if(Object.keys(mapper).includes(words[i])){
      output += mapper[words[i]] + ' ';
    } else {
      output += words[i] + ' ';
    }
  }
  console.log(output);
  return output;
};

const strToEmojiObj = {
  ':)': '😁',
  ':(': '🙁',
  '<3': '❤️',
  ':mad:': '😡',
  ':fire:': '🔥'
};

emojiTranslator('hello there! :) <3 :mad:', strToEmojiObj);