import keyword
list_of_keyword = keyword.kwlist
# print(list_of_keyword)
check= False
check_key = input("Eneter the string That is keyword or not in python. Remeber, keyword must be in lower case:")
if check_key in list_of_keyword:
        check=True
        if check == True:
                print(f"{check_key} is the keyword in python.")
else:
    print(f"{check_key} is not the keyword in python.")          
                


         