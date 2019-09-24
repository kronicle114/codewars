## given a string, implement a regex that reformats it to XXX-XXXXXXX
## account for edge cases (too little, too much nums)

def delete_extra_num(char):
    re = ''
    prefix = ''
    suffix = ''
    # validate if there are character length
    # truncate the str into 10 characters
    if char and len(char) >= 10:
        pre = char[0:4].strip()
        suffix = char[4:-1].strip()
        # insert a "-" into index 3
        re = f'{pre}-{suffix}'
        return re
    else:
        return 'Input must be at least 10 characters'

char0 = ' 1234567890 '
char1 = ' 12345 6789011 '

print(10, delete_extra_num(char0))
print(12, delete_extra_num(char0))