class CodeHere:
    def __init__(self) -> None:
        self.array = [1,2,3,4,5,6,7,8,9,10]
        self.result = []
        self.loop(self.result, self.array)

    def loop(self, result, array):
        for row in array:
            result.append(row)
        print(result)


if __name__ == "__main__":
    CodeHere()