---
description: >-
  How we handle secrets in our code. I introduce to you a new way of handling
  secrets.
---

# Secret Keys

### Why Not Keys.plist

We might be used to storing our secret in a plist file. There are a couple reasons why this is a bad idea.

* Plists are bundled into the final ipa
  * If someone got access to our ipa, they could see our plist and extract our secrets
* Plists don't work well in our [CI](continuous-integration.md) \(next section\)

### Env-vars.sh

We should be storing our secrets in a `env-vars.sh` file.

{% code-tabs %}
{% code-tabs-item title="env-vars.sh" %}
```bash
export API_URL=http://prod.cornellappdev.com
export API_DEV_URL=localhost:3000
export FABRIC_API_KEY=123
export FABRIC_BUILD_SECRET=456
```
{% endcode-tabs-item %}
{% endcode-tabs %}

We add this to our root directory of the project and make sure we add it to our `.gitignore`

Next we will use a new cocoapod called [Sourcery](https://github.com/krzysztofzablocki/Sourcery). Sourcery is a code generator for Swift language, built on top of Apple's own SourceKit. 

After we add our `env-vars.sh` to our root of our project, we need to add Sourcery via cocoapods. Add the following line to your `Podfile`

`pod 'Sourcery'`

Next, in the root directory of our project, create a new folder called `Sourcery` and create a new file in that folder called `keys.stencil`

Open `keys.stencil` and add the following :

```text
enum Keys: String {
    case apiURL = "{{ argument.apiURL }}"
    case apiDevURL = "{{ argument.apiDevURL }}"
    case fabricAPIKey = "{{ argument.fabricAPIKey }}"
    case fabricBuildSecret = "{{ argument.fabricBuildSecret }}"

    var value: String {
	return self.rawValue
    }     
}
```

Sourcrery will find this stencil and generate a `keys.generated.swift` file and fill in the missing fields from `env-vars.sh`

To get this to work, we need to add a new Run Script to Build Phases. The script should contain the following:

```bash
# Type a script or drag a script file from your workspace to insert its path.
#check if env-vars.sh exists, because this file is not used on Bitrise CI
if [ -f ./env-vars.sh ]
then
source ./env-vars.sh
fi
$PODS_ROOT/Sourcery/bin/sourcery --sources . --templates Sourcery/keys.stencil --output Secrets --args random="pollo",apiURL=$API_URL,apiDevURL=$API_DEV_URL,fabricAPIKey=$FABRIC_API_KEY,fabricBuildSecret=$FABRIC_BUILD_SECRET
```

The run script needs to be above `Compile Sources`

![Notice how Secrets Run Script is above Compile Sources](../../.gitbook/assets/image%20%284%29.png)

We need to modify the input and output files for the Run Script. Copy the following from the screenshot. Notice the Input Files and Output Files section.

![This makes sure the newly generated file is Compiled](../../.gitbook/assets/image.png)

Finally, to make this all work, you will need to `CMD + B` once and then go to finder and navigate to the Secrets folder and drag it into your Xcode project. This will allow the file to be registered by Xcode.

{% hint style="info" %}
Do NOT forget to add \*.generated.swift to your .gitignore. We do NOT want to track this file
{% endhint %}

Now you should see `keys.generated.swift` filled with the correct information. Congrats, we are keeping our secrets a secret!

