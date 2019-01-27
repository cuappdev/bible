---
description: 'The future is here, I promise.'
---

# Networking

Great reference you should read: [https://www.swiftbysundell.com/posts/under-the-hood-of-futures-and-promises-in-swift?rq=Futures](https://www.swiftbysundell.com/posts/under-the-hood-of-futures-and-promises-in-swift?rq=Futures)

### Introduction

Networking can get complicated really quickly in iOS. I would like to introduce a new way to approach networkring. The goal of this is to have all of iOS networking to be on the same page. This will help increase flexibility, because currently every pod uses a different networking library.

#### What we currently have

```swift
    func loadUser(withID id: Int, completionHandler: @escaping (User?, Error?)) {
        let url = createUrl(withID: id)

        let task = urlSession.dataTask(with: url) { [weak self] data, _, error in
            if let error = error {
                completionHandler(nil, error)
            } else {
                do {
                    let jsonDecoder = JSONDecoder()
                    let user = try jsonDecoder.decode(User.self, from: data)
                    completionHandler(user, nil)
                } catch {
                    completionHandler(.error(error))
                }
            }
        }
        task.resume()
    }
```

This is just one function to get a user from our server. This is  complicated, and while there are libraries out there such as Draft or Alamofire, this creates yet another dependency to our project. If these projects ever stop getting updated, we would be out of luck. Let's try a new approach and not require any dependencies.

#### What we want

```swift
    func loadUser(withID id: Int) -> Future<User> {
        return networking(Endpoint.user(from: id)).decode(User.self)
    }
    
    ...
    //somewhere else where we call loadUser
            loadUser(withID: 1).observe {[weak self] result in
            switch result {
            case .value(let user):
                self?.finishLogin(with: user)
            case .error(let error):
                assertionFailure(error.localizedDescription) //will only crash on development, not production
                self?.presentError(with: error)
            }
        }
```

This was built with the concepts of Futures & Promises \(will be explained in the next section\). This is a better approach because it forces us to handle the error, so we don't let our users get stuck in a weird state. We can also use `assertionFailure` because this will cause a crash when developing, but not on production. This helps get rid of callback hell.

### Futures and Promises

What is the difference between a future and a promise?

* A **Promise** is something you make to someone else.
* In the **Future** you may choose to honor \(resolve\) that promise, or reject it.

A promise gets constructed, then returned as a future, where it can be used to extract information at a later point.

#### How can we get futures?

Add the two files to your project.

[https://github.com/cuappdev/ios-networking](https://github.com/cuappdev/ios-networking)

You saw an example on how to use this at the beginning, but let's get into more detail on both files.

#### Future.swift

This file has all of the necessary tools to create futures and promises in swift. It is a lot to take in at first, but it is really cool if you read through it. You will never need to really deal with this file ever.

#### Endpoint.swift

This is the place where we can consturct our endpoints to connect to our APIs. Let's work through an example of extending Endpoint.

We can use Eatery as an example and create an endpoint to fetch all eateries and an endpoint to create a new eatery and an endpoint to access a private eatery.

It would look something like this.

{% code-tabs %}
{% code-tabs-item title="EateryEndpoints.swift" %}
```swift

extension Endpoint {

    static func allEateries() -> Endpoint {
        return Endpoint(path: "/api/v1/eateries")
    }
    
    static func createEatery(with eatery: Eatery) -> Endpoint {
        return Endpoint(path: "/api/v1/eateries", body: eatery) //The type Eatery needs to conform to Codable protocol
    }
    
    static func privateEatery(with id: Int) -> Endpoint {
        return Endpoint(path: "/api/v1/eateries/\(id)", headers: ["Authorization": "SuperSecretKey"])
    }
}

```
{% endcode-tabs-item %}
{% endcode-tabs %}

\(I think grouping relative endpoints is fine within files. Here I have all Eatery Endpoints. If there were endpoints to get specific Menus, we might put it in a `MenuEndpoints.swift` file\)

You get the idea on how simple it is to create Endpoints. You can even extend the Endpoint feature. It currently only supports GET & POST, but if your app needs to use DELETE \(or another method\), extend Endpoint and make a PR so we can all use it.

Now let's use our new endpoints in a request.

```swift
class EateryViewController: UIViewController {
    private let networking: Networking = URLSession.shared.request //Networking is a typealias included in Future.swift
    
    override func viewDidLoad() {
        
        //Get all eateries
        networking(Endpoint.allEateries).decode([Eateries].self).observe {[weak self] result in
        switch result {
            case .value(let eateries):
                self?.eateries = eateries
            case .error(let error):
                self?.presentError(with: error) //Makes us handle this case of the request failing!
            }
        }
        
        //Get private eatery
        getPrivateEatery(forID: 5).observe {[weak self] result in
        switch result {
            case .value(let privateEatery):
                self?.privateEatery = privateEatery
            case .error(let error):
                self?.presentError(with: error) //Makes us handle this case of the request failing!
            }
        }
    }
    
    func getPrivateEatery(forID id: Int) -> Future<Eatery> {
        return networking(Endpoint.privateEatery(with: id).decode()
    }
}
```



