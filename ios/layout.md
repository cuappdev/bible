# Layout

## Creating Views

At AppDev, in order to foster collaboration and readability, we will often prefer programmatic view creation and layout as opposed to using Interface Builder, since the generated XML is not readable as plaintext on GitHub. We posit that creating views programmatically is more productive, more maintainable, and often more efficient.

```swift
// In viewDidLoad

let label = UILabel()
label.text = "Interface Builder is fast but not for us."
label.textAlignment = .center
label.font = UIFont.systemFont(ofSize: 14.0)
label.numberOfLines = 0
label.lineBreakMode = .byWordWrapping
view.addSubview(label)
```

## Laying Out Views

Different devices have different screen sizes, so our interfaces must adapt to them. There are two major ways to arrange views on the screen: **frame-based layout** and **Auto Layout**.

Frame-based layout has the advantage of being the older form of layout and being able to continually finely control the positions of each view's frame, but it requires writing frame computations and creating temporary arbitrary constants, and it is fairly easy to miscalculate or mistype the creation of a frame. Moreover, it reduces readability.

```swift
// Let's put the label 32 points from the top and 16 points from the sides.

// This must be in viewDidLayoutSubviews()
let topGutterWidth: CGFloat = 32.0
let sideGutterWidth: CGFloat = 16.0

let height: CGFloat = ... // must be calculated annoyingly using sizeThatFits: or something

let frame = CGRect(x: sideGutterWidth,
                   y: topGutterWidth,
                   width: view.frame.width - gutterWidth * 2,
                   height: height)

label.frame = frame
```

But Apple eventually created Auto Layout because frame-based layout was not sustainable. Auto Layout adapts to screen sizes without your frame computations being rerun every time the view layout changes, and crucially, it is readable and intuitive. This is particularly important at AppDev since product designers do not work with frames—they are concerned with distances views are from each other. Since a frame's origin is fixed at the top left, responding to something like...

> Can you move this right-aligned label 4 points further to the left?

...is not as straightforward as it should be.

To write Auto Layout without Interface Builder, we choose from Apple's two programmatic constraint creation methods, both of which are objective nightmares, and a variety of third-party frameworks that make writing layout a breeze. The most popular one is [SnapKit](https://github.com/SnapKit/SnapKit), and it arguably has the best syntax:

```swift
// In comparison, doing the frame-based example from earlier, in SnapKit:

label.snp.makeConstraints { make in
    make.top.equalToSuperview().offset(32.0)
    make.leading.equalToSuperview().offset(16.0)
    make.trailing.equalToSuperview().offset(16.0)
}
```

Which one is more readable?

