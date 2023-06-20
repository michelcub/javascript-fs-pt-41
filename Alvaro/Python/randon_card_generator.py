import random

desk = {
    "hearts": ["A","2","3","4","5","6","7","8","9","J","Q","K"],
    "clubs": ["A","2","3","4","5","6","7","8","9","J","Q","K"],
    "spades": ["A","2","3","4","5","6","7","8","9","J","Q","K"],
    "diamont": ["A","2","3","4","5","6","7","8","9","J","Q","K"]

}

keys = list(desk)
select_key=random.choice(keys)
select_card = random.choice(desk[select_key])
desk[select_key].remove(select_card)
print(f'La carta seria el {select_card} de {select_key}')
print(desk)