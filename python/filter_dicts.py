## Create a fn that returns a list of dictionaries when given that a key value is true
## return a filteredList that doesn't have dicts with has_Spots = True and if they are blacklisted = True 

data = [
    {
        'name': 'Bulbasaur',
        'age': 7,
        'has_Spots': True,
        'blacklisted': False 
    },
    {
        'name': 'Charizard',
        'age': 7,
        'has_Spots': False, 
        'blacklisted': False 
    },
    {
        'name': 'Picachu',
        'age': 8,
        'has_Spots': True, 
        'blacklisted': False 
    },
    {
        'name': 'JigglyPuff',
        'age': 12,
        'has_Spots': True,
        'blacklisted': True  
    },
]

def pokemon_with_no_spots (pokemon_list):
    ## define a filtered list 
    filteredList = []

    ## loop through the pokemon_list and check to see the conditionals for each dictionary 
    for pokemon in pokemon_list:
        if not pokemon['has_Spots'] and not pokemon['blacklisted']: ## only pokemon that are spotless and aren't blacklisted
            filteredList.append(pokemon)
    print('no spots: ', filteredList)
    return filteredList 

pokemon_with_no_spots(data)
## no spots:  [{'name': 'Charizard', 'age': 7, 'has_Spots': False, 'blacklisted': False}]


def pokemon_with_spots(pokemon_list):
    ## define a filtered list 
    filteredList = []
    for pokemon in pokemon_list:
        if pokemon['has_Spots'] and not pokemon['blacklisted']: ## only pokemon that are spotless and aren't blacklisted
            filteredList.append(pokemon)
    print('has spots: ', filteredList)
    return filteredList 

pokemon_with_spots(data)
## has spots:  [{'name': 'Bulbasaur', 'age': 7, 'has_Spots': True, 'blacklisted': False}, {'name': 'Picachu', 'age': 8, 'has_Spots': True, 'blacklisted': False}]