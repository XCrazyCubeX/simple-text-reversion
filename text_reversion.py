# using looping
def looped_reverse(text):
    """
    this function allows text to be reverted,
    why? i'm not sure :)

    :param text:
    :return: reversed_text
    """
    reversed_text = ""
    for char in text:
        reversed_text = char + reversed_text
    return reversed_text


# using recursion
def recursion_reversed(text):
    """
    reverses text without a loop but using recursion..

    :param text:
    :return: reversed_text
    """

    if len(text) <= 0:
        return ""
    else:
        return text[-1] + recursion_reversed(text[:-1])


# run main
if __name__ == "__main__":
    reversion_type = int(input("choose type: 1. loop / 2. recursion: "))

    if reversion_type == 1:
        text = input("type anything: ")
        print(looped_reverse(text))

    elif reversion_type == 2:
        text = input("type anything: ")
        print(recursion_reversed(text))
