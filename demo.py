def print0toX(x):
    for num in range(10,1,-2): 
        print(num)

print0toX(10)

class Car:
    def __init__(self, color):
        self.color = color

    def whatColorAmI(self):
        print(self.color)

blueCar = Car("blue")
orangeCar = Car("orange")

blueCar.whatColorAmI()
orangeCar.whatColorAmI()