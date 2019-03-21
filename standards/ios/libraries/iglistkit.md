---
description: 'if you''re thirsty for some kool-aid, you''re at the right place.'
---

# IGListKit

## What is IGListKit?

Simply put, a data-driven UICollectionView framework written and used all over Instagram.

## Why use it?

Some of the main benefits of IGListKit are:

* Decoupled diffing algorithm
* Customizable diffing behavior for your models
* No need to call `reloadData()`or `performBatchUpdates(_:, completion:)` anymore
* Allows you to create collection views with multiple data types
* Not too different from regular  UICollectionViewso easy to implement
* Written, maintained, and updated by Instagram engineering

## Why should you care?

Currently, we have two apps whose UI heavily depends on IGListKit, specifically Pollo and Acai. If you are an iOS developer working on either of these apps, this may help you understand the current structure of the codebase and will hopefully allow you to use IGListKit to add new features!

## Data-Driven UICollectionView

Any UICollectionView that you create using IGListKit is inherently _data-driven_. Why? This is because every IGListKit collection view needs to have an associated array of models that conform to the **ListDiffable** protocol. Lets get a bit more specific:

For each collection view, you will have to create a **ListAdapter** object. This adapter object will then using the array of **ListDiffable** models you provide and create a **ListSectionController** for each one. A ListSectionController is an object that manages and represents a **section** of your collection view. Specifically, it acts as the data source and delegate for that section. Inside every ListSectionController, you can specify the number, the type, and configuration of cells that you want for this section. This means that we have the power to decide how many cells we want each model to correspond to.

## Implementation

**1\)** At the top of your `ViewController` class, you should declare two variables, one for your collection view and one for your list adapter.

```swift
var collectionView: UICollectionView!
var adapter: ListAdapter!
```

**2\)** Initialize your collection view and list adapter.

```swift
collectionView = UICollectionView(frame: .zero, collectionViewLayout: UICollectionViewFlowLayout())
...
view.addSubview(collectionView)


adapter = ListAdapter(updater: ListAdapterUpdater(), viewController: self)
adapter.collectionView = collectionView
adapter.dataSource = self
```

**3\)** Conform your `ViewController` to the `ListAdapterDataSource` protocol. This will require you to conform to two 3 methods.

```swift
extension ViewController: ListAdapterDataSource {
    func objects(for listAdapter: ListAdapter) -> [ListDiffable] {}
    func listAdapter(_ listAdapter: ListAdapter, sectionControllerFor object: Any) -> ListSectionController {}   
    func emptyView(for listAdapter: ListAdapter) -> UIView? {}
}
```

The first method requires you to return an array of the **ListDiffable** models that is going to be associated with this collection view. The second method requires you to return the corresponding **ListSectionController** for a given **ListDiffable** object. The last method requires you to return the **UIView** to display when the array of models returned is empty.

**4\)** Create your custom **ListSectionController** and conform to the following 3 methods.

```swift
class CustomSectionController: ListSectionController {
  var model: ListDiffable!

  override func sizeForItem(at index: Int) -> CGSize {}
  override func cellForItem(at index: Int) -> UICollectionViewCell {}
  override func didUpdate(to object: Any) {}
}
```

The first method requires you to return a **CGSize** representing the size of the cell to display at this index. The second method requires you to return the **UICollectionViewCell** to display at this index. The last method passes in the **ListDiffable** model corresponding to this section controller. Thus, it is recommended that you declare a variable to represent the **ListDiffable** model and set it inside the **didUpdate** function.

## ListDiffable Models

Any data model that you plan on using to display a collection view must conform to the **ListDiffable** protocol. Conforming to this protocol requires you to conform to two methods.

```swift
class SampleModel {
...
}

extension SampleModel: ListDiffable {
    func diffIdentifier() -> NSObjectProtocol
    func isEqual(toDiffableObject object: ListDiffable?) -> Bool
}
```

The first method requires you to return an identifier for this **ListDiffable** model. Note that two ListDiffable models may have the same identifiers but may not be equal. When comparing two ListDiffable models, IGListKit first compares their diffIdentifiers. If the identifiers are the same, then IGListKit calls the `isEqual(toDiffableObject object: ListDiffable?)` method to determine if the two objects are indeed equal.

## Updating Collection Views

When you want to reload your collection view normally, you would just call `collectionView.reloadData()`. What this does is it reloads all the collection view cells in your collection view. Why is this bad? Lets say we have an array of Cafeterias that we are using to display a collection view. If we received some update to the last Cafeteria model, we really only need to update the one cell corresponding to this model. However, calling `reloadData` will reload every cell, which is _inefficient_.

This is where _diffing ****_comes into hand. IGListKit has a built in diffing algorithm. This is used whenever we want our collection view reload. Instead of just reloading every cell in every section, the diffing algorithm will compare the previous array of **ListDiffable** models with the new array of **ListDiffable** models and only reload the **ListSectionControllers** for the models which are not equal. Note that in this case, ****_equality_ is determined by using the **diffIdentifier** and **isEqual** functions.

The last question is how do we reload a collection view with IGListKit? Instead of doing:

```swift
collectionView.reloadData()
```

what you should do is:

```swift
adapter.performUpdates(animated: false, completion: nil)
```

## Extra Documentation & Guides

[IGListKit Documentation](https://instagram.github.io/IGListKit/index.html)

[IGListKit Tutorial: Better UICollectionViews](https://www.raywenderlich.com/9106-iglistkit-tutorial-better-uicollectionviews)



