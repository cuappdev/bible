---
description: How to keep state within our apps
---

# State

One of the most important things we focus on as an iOS developer is giving our users the best experience using our app. This includes making sure there are no crashes, clear ways to achieve tasks, etc. Sometimes we get stuck in a weird state. The user might of clicked a button, then made a network request, then cancelled it and now we are in this unknown state in our app. The point of this section is to show a way on how we can combat this unknown state issue and make our apps less prone to these issues.

### All About States

We can easily define states our ViewController will be in. Let's look at an example.

```swift
enum State {
    case loading
    case presentingEateries([Eatery])
    case error(Error)
}
```

This is a simple example of 3 possible states our Eatery app can be in. It can be loading \(making a network request to fetch eateries\), or presenting a collection view of eateries, or failing on some error \(like a networking error\). We can pair these potential states with a new function called render.

```swift
func render(_ state: State) {
    switch state {
    case .loading:
        presentLoadingIndicator()
    case .presentingEateries(let eateries):
        self.eateries = eateries
        collectionView.reloadData()
    case .error(let error):
        presentErrorScreen(with: error)
    }
}
```

Now that we have our render function, we can call this method anywhere we want to update the state of our app. This keeps our logic all in one place. Let's go back to our EateryViewController from the previous [Networking section](networking.md#endpoint-swift).

```swift
class EateryViewController: UIViewController {
    private let networking: Networking = URLSession.shared.request //Networking is a typealias included in Future.swift
    
    override func viewDidLoad() {
        //start by rendering our loading screen
        render(.loading)
        
        //Get all eateries
        networking(Endpoint.allEateries).decode([Eateries].self).observe {[weak self] result in
        switch result {
            case .value(let eateries):
                self?.render(.presentingEateries(eateries))
            case .error(let error):
                self?.render(.error(error))
            }
        }
        
        //Get private eatery
        getPrivateEatery(forID: 5).observe {[weak self] result in
        switch result {
            case .value(let privateEatery):
                self?.privateEatery = privateEatery
            case .error(let error):
                self?.render(.error(error))
            }
        }
    }
    
    func getPrivateEatery(forID id: Int) -> Future<Eatery> {
        return networking(Endpoint.privateEatery(with: id).decode(Eatery.self)
    }
}
```

As you can see, all our logic is contained in one simple rendering function. You can take this one step further by using Child View Controllers which we will look at more in depth in the next section.

States are a tool that can help us know what all of our states are within our app. It can also help us reuse code \(say we use the same loading view all over our app\) in a safe and constant manner.

Enjoy becoming stateful!

