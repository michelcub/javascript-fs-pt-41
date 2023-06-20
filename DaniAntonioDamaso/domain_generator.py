PRONOUNS = ["the", "our", "my", "your"]
ADJECTIVES = ["great", "big", "last", "best"]
NOUNS = ["jogger", "racoon", "boxes", "sitcom"]
EXTENSIONS = ["es", "com", "net", "org"]


def get_domain():
    domain_names = []
    full_domain_name = ""

    for p in PRONOUNS:
        for a in ADJECTIVES:
            for n in NOUNS:
                for e in EXTENSIONS:
                    full_domain_name = p + a + n + "." + e
                    domain_names.append(full_domain_name)

    return domain_names


print(get_domain())


def hack_domain(domain):
    split_domain = domain.split(".")
    extension_length = len(split_domain[1])

    if split_domain[0].endswith(split_domain[1]):
        split_domain[0] = split_domain[0][0:-extension_length]
        return split_domain[0] + "." + split_domain[1]

    return split_domain[0] + "." + split_domain[1]


def get_domain_hack(domains_array):
    hacked_array = list(map(hack_domain, domains_array))
    return hacked_array


print(get_domain_hack(get_domain()))
