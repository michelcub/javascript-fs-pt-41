pronoun = ['the', 'our']
adj = ['great', 'big']
noun = ['jogger', 'racoon']

for p in pronoun:
    for a in adj:
        for n in noun:
            domain = p + a + n + '.com'
            print(domain)
