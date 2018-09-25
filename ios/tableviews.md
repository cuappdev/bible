---
description: How to properly create complex tableviews
---

# Table Views

## Why this is important

Tableviews are at the heart of iOS and we see them everywhere. Sometimes it is hard to create a tableview with multiple sections and different cells within each section. For example, your multi-section code might look something like this:

```swift
    // MARK: - TABLE VIEW
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {

        switch indexPath.section {
        case 0:
            let cell = tableView.dequeueReusableCell...
            return cell
        case 1:
            let cell = tableView.dequeueReusableCell...
            return cell
        case 2:
            let cell = tableView.dequeueReusableCell...
            return cell
        default:
            return UITableViewCell()
        }
    }
```

What is wrong with this? We are switching on Int, which has a lot more than 3 cases. To combat this, we use the default case to silence the error.

If we want to add a new section, or move around existing sections, we have go in and rearrange/add new cases to each function where we switch on the indexPath.section. This is also not very readable. If a new member/someone outside tried reading this, it would be very confusing.

## Let's make this better

Let's see how we can fix this issue and make it more readable.

For this example I will be using an example from Ithaca Transit.

We can start by creating a new enum type:

```swift
struct Section {
    let type: SectionType
    var items: [ItemType]
}

enum SectionType {
    case recentSearches
    case favorites
    case seeAllStops
}

enum ItemType {
    case busStop(BusStopModel)
    case placeResult(PlaceResultModel)
    case seeAllStops
}
```

Let us break this down. We have 3 new eum types.

### ItemType

This enum defines the type of items within each section. For Ithaca Transit, search results contain both Bus Stops and Place Results \(Google Places\) mixed within one section. Creating this enum will allow having one section with multiple cell types.

### SectionType

This defines the type of sections. With this example, we will have 3 sections. RecentSearches, favorites, and seeAllStops. This is pretty simple.

### Section

Finally, we have an enum type that combines both ItemType and SectionType. It defines which type of section it is, and what items go in that section.

## Implementation

Now let's use this in an example.

```swift
class SearchResultsViewController: UIViewController {

    var sections: [Section]! //we start out by declaring an array that will hold all of our sections

    override func viewDidLoad() {
        super.viewDidLoad()

        //create sections
        let recentSearches: [ItemType] = ... //get recent searches from network request or userdefaults etc. We also need to make sure we convert them into ItemType. This is pretty self explanatory.
        //The cool part here is recentSearches has both .busStop and .placeResult types.
        let recentSearchesSection = Section(type: .recentSearches, items: recentSearches)

        let favorites: [ItemType] = ... //get favorties
        let favortiesSection = Section(type: .favorites: items: favorites)

        let seeAllStopsSection = Section(type: .seeAllStops, items: [.seeAllStops])

        sections = [recentSearchesSection, favoritesSection, seeAllStopsSection]

        tableView.reloadData()
    }

    //Now lets fix the original issue
    // MARK: - TABLE VIEW
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        var itemType: ItemType!

        let section = sections[indexPath.section]

        switch section.type {
            case .recentSearches, .favorites, .seeAllStops {
                itemType = section.items[indexPath.row] //this will give us the itemType for this specific cell
            }
        }

        switchitemType {
            case .busStop(let busStopModel):
                let cell = tableView.dequeue... as! BusStopCell
                //do set up
                return cell
            case .placeResult(let placeResultModel):
                let cell = tableView.dequeue... as! PlaceResultCell
                //do set up
                return cell
            case .sellAllStops:
                let cell = tableView.dequeue... as! SeeAllStopsCell
                //do set up
                return cell
        }
    }
}
```

Woohoo, now as you can see this is much simpler. We have defined sections and this makes it a lot more readable. You can even have a helper function that takes in an itemType and returns a cell to clean up this code even more, but I'll leave that to you.

If you add a new section, you'll get errors telling you you are missing a case statement, which will make sure you keep your code safe and free of bugs.

