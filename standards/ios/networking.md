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

