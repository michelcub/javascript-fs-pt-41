my_list = [1, 2, 3, 4, 5]


# List comprehension nos permite reconstruir todos los métodos de JS
############### [result for item in list] ###############


def do_complex_calculation(number):
    return number * 2


doubled_list = [do_complex_calculation(number) for number in my_list]
# print(doubled_list)


############### [result for item in list if condition] ###############
odd_list = [number for number in my_list if number % 2 == 0]
# print(odd_list)


# Unpacking === Desestructurar
[a, b, c, d, e] = my_list
# print(a)

my_tuple = (11, 22)
(a, b) = my_tuple
# print(a)


### NO podemos hacer unpacking del mismo modo
### que lo haríamos en JS
