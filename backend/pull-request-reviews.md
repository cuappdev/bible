# Pull Request Reviews

## Reviewing Pull Requests

The main goal of a review should be to verify the following, and to provide **constructive** feedback:

1. The code is self-documenting.
2. The code is well written.
3. The code is styled properly.
4. The pull request itself is properly formatted – refer to the `Git`section of the bible. 

Pull requests should be only accepted if all categories are satisfied \(with an additional judgment call for any other comments\), and requesting changes should be done liberally – rather than accepting and asking to make changes before merging. 

### Self Documenting Code

Variables should be well named. Consider the following two snippets:

```python
# Snippet 1
for e in lst:
    e["author"] = "Young"

# Snippet 2
for bibleElem in lst:
    bibleElem["author"] = "Young"
```

The same should be done for functions:

```python
# Snippet 1
def a(lst):
    return [num+1 for num in lst]

# Snippet 2
def incList(lst):
    return [num+1 for num in lst]
```

Comments should be used liberally, especially for complex or unusual snippets:

```python
def myFunc(a, b, c):
    # Comment explaining the logic goes here
    return a > 1 if b < -1 else c
```

There is **no reason** to have code that is difficult to understand.

### Well-written code

Whether or not code is well-written is up to the discretion of the reviewer, but there are certain guidelines to keep in mind.

#### Avoid Unnecessary Computations:

```python
# Bad snippet 1
def a():
    # The list comprehension in the next line is unnecessary
    return not [a+1 for a in lst] 

# Bad snippet 2
def b(i):
    # if f(i) is expensive, this should be factored out 
    # into its own value
    c = g(f(i))
    b = f(i) * f(i)
    return c + b
```

#### Avoid Excessive Variable Declarations

```python
# Adding these variable declaractions doesn't make
# the code easier to read
def a():
    now = time.now()
    later = time.later()
    fiveSecondsFromTomorrow = time.tomorrow() + 5
    return later - now + fiveSecondsFromTomorrow
```

#### Avoid Excessive Commenting

```python
def a(a, b):
    # adding inputs
    c = a + b
    # returning square of c
    return c*c
```

### Code Styling

For `python`, refer to [PEP8](https://www.python.org/dev/peps/pep-0008/). 

For `react`, refer to the [Airbnb Style Guide](https://github.com/airbnb/javascript/tree/master/react).

For `javascript`, refer to the [Airbnb Style Guide](https://github.com/airbnb/javascript).

