# VARIABLES Y CONSTANTES

my_first_variable = 1
MY_FIRST_CONSTANT = 2

a, b, c = 1, 2, 3
a = b = 0

# DATA TYPES

# NUMBERS
my_first_number = 1
my_first_float = 1.1

# CASTING
int(my_first_float)  # Por defecto redodea hacia abajo
float(my_first_number)  # Añade un .0

# BOOLEANS

true_variable = True  # LLEVAN LA PRIMERA LETRA EN MAYUS
false_variable = False

# PODEMOS SEGUIR UTILIZANDO TRUTHY Y FALSY

# STRINGS
first = "asdf"
third = """
esto es una string de varias lineas
si no la asignamos a una variable sería un comentario
y es multilinea
"""
word = "STRING"

# LO MÁS SIMILAR A UN TEMPLATE LITERAL
# OJO a la f antes de las comillas y a las llaves
formatted = f"This is a formatted {word}"

third_length = len(third)

# ITERABLES

# LISTS

my_first_list = []

len(my_first_list)

my_first_list.append("amarillo")
my_first_list.append("amarillo")
my_first_list.append("amarillo")
my_first_list.append("amarillo")


new_list = list(map(lambda element: str(element + " y morado"), my_first_list))
# print(new_list)

# SLICE
list_copy = my_first_list[:]  # ANTES Y DESPUÉS DEL PUNTO USAMOS INDEX
# VACIO es una copia

# DICTIONARIES - mutables, desordenados, keys (no duplicadas)

my_dictionary = {"name": "Raspas", "age": 6}
# AL PARSEAR UN JSON PASARÍA A ESTE FORMATO
# OJO a las comillas en la clave

name = my_dictionary["name"]  # STRIIIIIING!
name = my_dictionary.get("name")  # AQUÍ NO PETAMOS SI NO ESTÁ ESPECÍFICADO

# SET - mutable, desordenado - !!!no admite duplicados

my_set = {"one", "two", "three"}

# Se usan cuando necesitamos un array sin duplicados
# Son iguales que en JS

# TUPLES - inmutables, ordenadas, admiten duplicados
my_tuple = ("one", "two", "three")

# OJO a los paréntesis
# No cambian en orden, pero tampoco podemos reasignar
# La usamos para roles de usuario, por ejemplo

# FUNCTIONS


def add_two_numbers(a, b):
    # Podemos usar Docstrings para explicar
    # qué hace la función y que parametros espera
    # NO actúa como tipado
    """
    Suma dos números

    Arguments:
        :first_number int | float
        :second_number: int | float

    """
    result = a + b  # SCOPE E INDENT
    return result


lambda a, b: a * b

add_two_numbers(2, 3)

# Podemos pasar un argumento como second_number=1
# KEYWORD ARGUMENTS


# ESTRUCTURAS DE CONTROL

# IF

test = True

# No hay triple comparador
# if test == True:
#     print("Test is true!")
# elif test == None:
#     print("There is no test")
# else:
#     print("Test is false!")

# Si necesitamos el triple usaríamos is
# De este modo con == podemos ver valores,
# con is vemos referencias de iterables

# Operadores más sencillos que en JS
# && es and
# || es or
# ! es not


# Loops

for item in my_first_list:
    print(item)

for number in range(101):
    print(number)

# Solo un param es el final,
# Si hay más usamos el primero de arranque,
# El segundo de fin, el tercero de step
