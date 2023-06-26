# Class => Esquema


### En Python usamos self. en lugar de this.

"""
class Product:
    name = ""
    price = ""

    def buy(self):
        print(f"Acabas de comprar {self.name}")


my_first_product = Product()
my_first_product.name = "Producto de muestra"
my_first_product.price = 9.99

my_first_product.buy()
"""

##Sin embargo, nos encontramos dos limitaciones:

### Nuestras propiedades están vacías
### Contaminamos las clases si editamos una instancia

# Para ello usamos
############ Constructors ############


class Product:
    name = ""
    price = ""
    available_colors = ["black", "white"]

    def __init__(self, name, price, extra_colors=[]):
        self.name = name
        self.price = price

        current_colors = self.available_colors[:]
        current_colors.extend(extra_colors)
        self.available_colors = current_colors

    def serialize(self):
        return {"name": self.name, "price": self.price}

    def buy(self):
        print(f"Acabas de comprar {self.name}")


my_first_product = Product("Libro", 9.99)

print(my_first_product)
