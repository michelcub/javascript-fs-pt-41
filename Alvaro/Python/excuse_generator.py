import random

who = ['The dog', 'My grandma', 'His turtle', 'My bird']
action = ['ate', 'peed', 'crushed', 'broke']
what = ['my homework', 'the keys', 'the car']
when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying']

whoselect = random.choice(who)
actionselect = random.choice(action)
whatselect = random.choice(what)
whenselect = random.choice(when)

print (f'{whoselect} {actionselect} {whatselect} {whenselect}')