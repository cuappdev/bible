# Xcode

## Certificates

In order to develop with Xcode, an iOS Developer Certificate is required. Through our Apple Developer Account, we have such certificates and will provide them to all necessary members. Of course, these certificates are highly sensitive, and thus we keep them in secure shared storage that only our team leads have access to. 

A separate certificate exists for each pod, so as a new iOS member to get a certificate you will need another member on your pod to share the pod certificate with you. They will need to export this certificate from the Keychain Access application on macOS. The steps on how to export are as follows:

1. Open Keychain Access and select the "login" keychain from the left sidebar. 
2. Find the iPhone Developer: Walker White certificate and select the dropdown arrow
3. Right click on the private key \(as in the image below\) and select Export
4. Choose a location to save it, and make sure to save it as a ".cer" file rather than a ".p12" \(this allows you to skip entering a password\)
5. AirDrop the certificate file to the new member
6. Double click the certificate to open it and it will automatically add to Keychain Access

![](../../.gitbook/assets/screen-shot-2019-02-19-at-8.15.44-pm.png)

Finally, you will need to add the Walker White developer Apple ID to Xcode in order to produce provisioning profiles. This can be added through Xcode Preferences under the Accounts tab. Ask your iOS subteam lead for the login credentials. 

