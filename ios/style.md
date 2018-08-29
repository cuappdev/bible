# Style

## Use MARK

Use MARK to section off code in Xcode

Example:

```swift
class RemindersViewController: UIViewController {

    // MARK: View vars
    var tableView: UITableView!
    var checbox: UIButton!
    
    // MARK:  Data vars
    var reminders: [Reminder] = []
    
    // MARK: View Lifecycle
    override func viewDidLoad() {
        ....
    }
    
}

```

## Extensions

We want to adapt using extensions more often to separate code. A lot of the time we have a RemindersViewController with 500 lines all in 1 class. It is very hard to read and find what you are looking for. Let us fix this with extensions.

```swift
// MARK: RemindersViewController
class RemindersViewController: UIViewController {
    
    override func viewDidLoad() {
        ...
    }
}

// MARK: TableView Datasource
extension RemindersViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        ...
    }
}

// MARK: TableView Delegate
extension RemindersViewController: UITableDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        ...
    }
}

```

This makes it a lot easier to read code, especially for new members. Extensions are a great way to organize code within a single file.

## Strings

Ideally all strings constants should be declared as a `let` variable at the top of the class or in a Constants file

Example:  `let` variable

```swift
class RouteOptionsViewController: UIViewController {
    let navigationBarTitle: String = "Route Options"
    ...
}
```

Example: `Constants.swift`

```swift
struct Constants {
    struct Cells {
        static let busIdentifier = "BusStop"
        static let searchResultsIdentifier = "SearchResults"
        static let cornellDestinationsIdentifier = "CornellDestinations"
    }
}
```

