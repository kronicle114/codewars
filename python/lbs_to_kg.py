def lbs_to_kg(lbs):
    ## take the lbs and then convert it to kg
    rounded_kg = round(lbs/2.2046, 2) 
    ## return and print the data
    print(f'{lbs} pounds is {rounded_kg} kilograms')
    return rounded_kg

lbs_to_kg(126)