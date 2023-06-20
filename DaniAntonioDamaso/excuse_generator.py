import random


def excuseGenerator():
    who = ["My cat", "My cousin", "Your raccoon", "The president"]
    action = ["ate", "shot at", "crushed", "smashed"]
    what = ["my homework", "my computer", "my dreams", "the concept of time"]
    when = [
        "before lunch",
        "right on time",
        "during my sabbatical year",
        "while I was taking a nap",
    ]

    who_choice = random.choice(who)
    action_choice = random.choice(action)
    what_choice = random.choice(what)
    when_choice = random.choice(when)

    return who_choice + " " + action_choice + " " + what_choice + " " + when_choice


print(excuseGenerator())
