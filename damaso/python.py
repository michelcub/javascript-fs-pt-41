import random

def generate_excuse():
    who = ['The dog', 'My grandma', 'His turtle', 'My bird']
    action = ['ate', 'peed', 'crushed', 'broke']
    what = ['my homework', 'the keys', 'the car']
    when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying']
    
    random_who = random.choice(who)
    random_action = random.choice(action)
    random_what = random.choice(what)
    random_when = random.choice(when)
    
    excuse = f"{random_who} {random_action} {random_what} {random_when}"
    return excuse

excuse = generate_excuse()
print(excuse)
