def sum_of_lists(ar):
    total = 0
    if len(ar) == 0:
        return 0
    for a in ar:
        total += a

    print('total:', total)
    return total

arr = [1,2,3]
sum_of_lists(arr)