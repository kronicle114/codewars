'''
if a character is less than 2 characters long
    characters must be more than 2 characters long
elif a character is more than 50 characters long
    too many characters
'''

def min_and_max_characters(char):
    if len(char) < 2:
        return 'Must be atleast 2 characters long'
    elif len(char) >= 50:
        return 'Too many characters'
    else:
        return 'Must be between 2 to 50 characters'

char0 = '' ## 0
char1 = 'xu' ## 2
char2 = 'trish' ## 5
char3 = 'if a character is less than 2 characters long char' ## 50
char4 = 'if a character is less than 2 characters long char23' ## 52

print('0', min_and_max_characters( char0)) ## 0 Must be atleast 2 characters long
print('1', min_and_max_characters(char1)) ## 1 Must be between 2 to 50 characters
print('2', min_and_max_characters(char2)) ## 2 Must be between 2 to 50 characters
print('3', min_and_max_characters(char3)) ## 3 Too many characters
print('4', min_and_max_characters(char4)) ## 4 Too many characters
