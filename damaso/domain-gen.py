pronoun = ['the', 'our']
adj = ['great', 'big']
noun = ['jogger', 'racoon']

domains = []

for p in pronoun:
    for a in adj:
        for n in noun:
            domain = p + a + n + '.com'
            domains.append(domain)

print(domains)