"""
Módulo de introducción a python
"""

# SYNTAX

"""
- snake_case
- no cerramos ;
- indentación (no tenemos bloques {})
"""

# CONSTANTES Y VARIABLES

my_first_variable = 1 # Sin let ni const
MY_FIRST_CONSTANT = 2

a, b, c = 1, 2, 3
a = b = 0

# DATA TYPES

# Numbers

my_first_number = 1_000_000
my_first_float = 1.9

# casting

int()
float()

# Boolean

true_variable = True
false_variable = False

bool()

# Strings

first = 'asdf\nasdf'
second = "asdf"
third = """
asdf
asdf
asdf
"""
word = 'STRING'

formatted = f'This is a formatted {word}'

second_length = len(second)

str()

# ITERABLES

# Lists - ordenadas, mutables

my_first_list = ['rojo', 'verde', 'azul']

list_length = len(my_first_list)

first_element = my_first_list[0]
last_element = my_first_list[-1]

my_first_list.append('amarillo')

my_first_list[3] = 'violeta'

# slice
list_copy = my_first_list[:]

example = my_first_list[1:3]
from_start = my_first_list[:3]
until_last = my_first_list[2:]

# Dictionaries - mutables, desordenados, keys (no duplicadas)

my_dictionary = {
    "name": "Raspas",
    "age": 6
}

my_dictionary['name'] = "Zari"

name = my_dictionary["name"]

legs = my_dictionary.get('legs', 4) # obteniendo

my_dictionary["color"] = 'white'

# Set - mutable, desordenado - no admite duplicados

my_set = { "one", "two", "three", "one" }

# Tuple - inmutables, ordenadas

user_roles = ("user", "guest", "admin")

# my_tuple[0] = 8


# FUNCTIONS

def add_two_numbers(first_number, second_number):
    """
    Suma dos números

    Arguments:
        :first_number: int | float
        :second_number: int | float
    """
    result = first_number + second_number
    return second_number


# args vs. kwargs
# print(add_two_numbers(second_number=1, first_number=2.3))

# ESTRUCTURAS DE CONTROL

# test = True

# if test == True:
#     pass
#     print('Test is true!')
# elif test == None:
#     print('There is no test!')
# else:
#     print('Test is false!')

a = {
    "name": "Raspas"
}

b = {
    "name": "Raspas"
}

c = a

# print (a is b)
# print (a == b)
# print(a is c)

# and
# or
# not

my_list = ['a', 'b', 'c']

# for item in my_list:
#     print(item)

for i in range(10):
    print(i)