# Storing Secret Keys

The recommended method to store secret keys \(ie. Google Map API key\) is through a `properties` file. Here are the steps for creating the file: 

1. Create a `keys.properties` file \(**never push this!**\) and add the secret keys.

```bash
googleMapApiKey="AIzaSyBDjzqiK5_DVoZ-6nCSZNFwEYM9dr1q7MI"
fabricApiKey="50d77fbd594f6229f8bb9a3669ce18dce7dac38e"
```

2. Inside `build.gradle (Module: app)`, add:

```bash
def keyFile = file('../keys.properties')
def keyProperties = new Properties()
keyProperties.load(new FileInputStream(keyFile))

android {
    ...
    defaultConfig {
        ...
        resValue 'string', "googleMapKey", keyProperties["googleMapApiKey"]
        resValue 'string', "fabricKey", keyProperties['fabricApiKey']
    }
```

3. Inside `AndroidManifest.xml`, add `<meta-data>` tags for each secret key.

```markup
<meta-data
 android:name="com.google.android.geo.API_KEY"
 android:value="@string/googleMapKey" />

<meta-data
 android:name="io.fabric.ApiKey"
 android:value="@string/fabricKey" />
```

Remember **never** to push this file to Github! 

