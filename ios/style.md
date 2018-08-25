# Style

## Use MARK

Use MARK to section off code in Xcode

Example:

```text
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

## Strings

Ideally all strings constants should be declared as a `let` variable at the top of the class or in a Constants file

Example:  `let` variable

```text
class RouteOptionsViewController: UIViewController {
    let navigationBarTitle: String = "Route Options"
    ...
}
```

Example: `Constants.swift`

```text
struct Constants {
    struct Cells {
        static let busIdentifier = "BusStop"
        static let searchResultsIdentifier = "SearchResults"
        static let cornellDestinationsIdentifier = "CornellDestinations"
    }
}
```

