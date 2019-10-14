# create a function that takes in a sentence with ASCII emoticons and converts them into emojis
# input => output
# :) => 😁
# :( => 🙁
# <3 => ❤

ascii_to_emoji = {
    ':)': '😁',
    ':(': '🙁',
    '<3': '❤️',
    ':mad:': '😡',
    ':fire:': '🔥',
    ':shrug:': '¯\_(ツ)_/¯'
}

def emoji_translator(input, mapper):
    output = ''
    # take the input and split it
    words_list = input.split(' ')
    # use a forloop and in to figure out if the word is in the dict to map
    for word in words_list:
        if word in mapper: # if it is then add it but as the value of the ascii dict
            output += ' ' + mapper[word]
        else: # if the word is not there then add it to the string output
            output += word
    print(output)
    return output

emoji_translator('hello :)', ascii_to_emoji)