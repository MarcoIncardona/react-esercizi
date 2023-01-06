import os


with open("lista.txt", "r") as file:
    for line in  file.readlines():
        support = ""
        for i in line:
            if i != " ":
                support += (i)

        os.system(f'npx create-react-app "{support.lower()}"')