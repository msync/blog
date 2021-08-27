def fib(n):
    a, b, counter = 0, 1, 0
    while counter < n:
        a, b = b, a + b
        counter = counter + 1
    return b

def fib2(n):
    a, b, counter = 0, 1, 0
    while counter < n:
        a, b = b, a + b
        counter = counter + 1
    return b
