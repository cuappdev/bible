# Reviewing a Pull Request

The purpose of a pull request is to ensure the code to be merged in is:

1. **Readable** - Can I understand what the code is doing at a high-level? If not, then some changes are needed to make the code understandable to the cursory reader
2. **Well-written** - Does the code properly use the Swift language constructs to make changes?
3. **Styled properly** - Does the code follow the proper indentation and spacing conventions?

The following sections will list ways to improve your code, but in no means is a complete list.

## Readable Code

### Be wary of nested functions

Nested functions are a cool feature in Swift that lets you declare functions within another function, but if misused can make your code hard to read. So to air on the side of caution \(and readability\), declare all functions at a class-level, and not at a function-level.

```swift
// WRONG
func searchForSongsByDate(dateText: String) {

    func validateTextIsDate(dateText: String) {
        ...
    }
    validateTextIsDate(dateText)
    ...
}

// RIGHT
func validateTextIsDate(dateText: String) {
    ...
}

func searchForSongsByDate(dateText: String) {
    validateTextIsDate(dateText)
    ...
}

```

## Well-Written Code

### Check optionals

Make sure if you're force unwrapping that you won't ever have a case where that variable is nil

Make sure if you're using the nil coalescing operator that the default value makes sense for the context

If you have several nested `if-lets` that can be a sign to switch to `guard-let` and fail when you don't have all the variables you need

If you're checking for `nil`, then it's better to use an if-let

Example:

```swift
// WRONG
if name != nil {
    label.text = name!
}

// RIGHT
if let name = name {
    label.text = name
}
```

## Properly Styled Code

### Use Swift Lint

Swift Lint will help enforce proper spacing and indentations.

### Removed commented out code

If you're commenting out code then you don't need it. 

Also, commented-out code will leave future developers in a state of uncertainty where they're not sure if they can delete the code and so it ends up adding lines to a file with no added value.

Example:

```swift
// WRONG
func foo(String: item) -> String {
  let baz = findKeyForItem(item)
  // we no longer do this for some good reason
  // if (baz == "foobar") {
  // return baz
  // } else {
  // return item.foobar()
  // }
  return baz
}

// RIGHT
func foo(String: item) -> String {
  return findKeyForItem(item)
}
```

### Remove print statements used for debugging

If you put print statements in your code to help debug make sure to remove them before merging to master. Unnecessary print statements clog up the console.

### Remove excessive comments

Good code should be self-documenting such that you don't need comments to describe what every part of the code is doing. 

If you do find yourself adding comments, check to make sure the comments are adding information that is not otherwise obvious without it.

And if you find yourself adding a lot of comments to make your code readable then it can be a sign to refactor your code so that the code is understandable without comments.

```swift
// WRONG
// Initialize and style label
label = UILabel()
label.textColor = UIColor.red
label.text = "Made by Cornell App Development"

// RIGHT
label = UILabel()
label.textColor = UIColor.red
label.text = "Made by Cornell App Development"
```

```swift
// WRONG
let directions: Direction = [
    // first direction
    .north, 
    // second direction
    .south, 
    // third direction
    .east, 
    // fourth direction
    .west
]

// RIGHT
let directions: Direction = [.north, .south, .east, .west]
```

