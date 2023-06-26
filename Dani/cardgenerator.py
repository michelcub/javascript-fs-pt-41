import random

cardSuits = ["♦", "♥", "♠", "♣"]
cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]


def get_deck():
    generated_deck = []
    for suit in cardSuits:
        for value in cardValues:
            generated_deck.append({"value": value, "suit": suit})
    return generated_deck


new_deck = get_deck()
random.shuffle(new_deck)
print(new_deck.pop())


