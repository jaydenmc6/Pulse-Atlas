def print_backwards(text):
    if text == "":
        print("")
        return
    _print_backwards_chars(text, len(text) - 1)
    print()


def _print_backwards_chars(text, index):
    if index < 0:
        return
    print(text[index], end="")
    _print_backwards_chars(text, index - 1)


def format_names(names):
    return _format_names_recursive(names, 0)


def _format_names_recursive(names, index):
    if index >= len(names):
        return []

    name = names[index]
    if "," in name:
        formatted_name = name
    else:
        first, last = name.split()
        formatted_name = f"{last}, {first}"

    return [formatted_name] + _format_names_recursive(names, index + 1)


def sum_a(items):
    total = 0
    for item in items:
        total += item.get("a", 0)
    return total


def process_list(numbers):
    even_indexed = []
    odd_indexed = []

    for index, value in enumerate(numbers):
        if index % 2 == 0:
            even_indexed.append(str(value))
        else:
            odd_indexed.append(value * 10)

    return even_indexed + odd_indexed


def group_by(values, func):
    return _group_by_recursive(values, func, 0, {})


def _group_by_recursive(values, func, index, grouped):
    if index >= len(values):
        return grouped

    value = values[index]
    key = func(value)
    if key not in grouped:
        grouped[key] = []
    grouped[key].append(value)

    return _group_by_recursive(values, func, index + 1, grouped)


if __name__ == "__main__":
    print_backwards("Hello, world!")

    print(format_names(["Allen Anderson", "Bruce Baker", "Cook, Claire", "Dunn, David"]))

    example_data = [
        {"a": 2, "b": 3, "c": 1},
        {"b": 2, "c": 3},
        {"a": 1, "b": 2, "c": 3},
        {"a": 3, "b": 2, "c": 1},
        {"c": 1, "a": 4},
    ]
    print(sum_a(example_data))

    print(process_list([0, 1, 2, 3, 4, 5, 6, 7]))
    print(process_list([9, 8, 7, 6, 5, 4, 3, 2, 1]))

    print(group_by([1, 2, 3, 4, 5, 6, 7, 8], lambda x: x % 2 == 0))
    print(group_by(["foo", "bar", "fizz", "buzz", "hello", "world"], len))
    print(group_by([90, 80, 70, 60, 50, 40, 30, 20, 10], lambda x: x % 3))
