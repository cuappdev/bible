---
description: >-
  What you should look for when reviewing a pull request. Can also serve for you
  to understand good coding practices.
---

# Pull Request Reviews

## Reviewing Pull Requests

The main goal of a review should be to verify the following, and to provide **constructive** feedback:

1. The code is documented well.
2. The code is well written.
3. The code is styled properly.
4. The pull request itself is properly formatted – refer to the `Git`section of the bible. 

Pull requests should be only accepted if all categories are satisfied \(with an additional judgment call for any other comments\), and requesting changes should be done liberally – rather than accepting and asking to make changes before merging. 

### Documenting code

Variables should be well named. Consider the following two snippets:

```java
//Snippet 1
String[] a = new String[1];
a[0] = "Abdullah";

//Snippet 2
String[] authors = new String[1];
authors[0] = "Abdullah";
```

The same should be done for functions:

```java
# Snippet 1
public string a(String[] b){
    return b[0];
}

# Snippet 2
public string getHead(String[] lst){
    return lst[0];
}
```

In the case that the purpose of the function is not easily understood from the name, it is required to provide a comment before the function header describing the function's purpose and what the return value represents.

```java
/*
*Description: This function returns the first element of the list.
*Returns: A string representing the first element of the list
*/
public string complicatedOperation(String[] lst){
    return lst[0];
}
```

Comments should be used liberally, especially for complex or unusual snippets:

```java
public string complicatedOperation(String[] lst){
    //Comment describing logic here
    return lst[0]<lst[5] && lst[10]>lst[6];
}
```

There is **no reason** to have code that is difficult to understand.

### Well-written code

Whether or not code is well-written is up to the discretion of the reviewer, but there are certain guidelines to keep in mind. \(The following snippets are in python but convey the same points\)

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

We will be adding more java specific code style guidelines in the future, but here are some basic thing to keep in mind:

#### Use camelCase for multi word variables

```java
//snippet 1
int my_favorite_number = 0;

//snippet 2
int myFavoriteNumber = 0;
```

#### Proper use of spacing

Every function should be separated with exactly one empty line and there should not be unnecessary breaks within functions.

```java
//snippet 1
public void hello(){
    

    System.out.print("hello")
}
public void bye(){
    System.out.print("bye")
}

//snippet 2
public void hello(){
    System.out.print("hello")
}

public void bye(){
    System.out.print("bye")
}
```

Lines should be at a readable length and it is up to the reviewer to make a final decision. Suggested is to keep lines to shorter than 100 characters.

