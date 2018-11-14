# Backend API

## General

{% api-method method="get" host="http://pollo-backend.cornellappdev.com" path="/api/v2/generate/code/" %}
{% api-method-summary %}
Generate a group code
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Authentication" type="string" required=true %}
`'Bearer ' + accessToken`
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
    code: string
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

## Drafts

```javascript
type Draft {
    id: number,
    text: string,
    options: string[]
}
```

{% hint style="info" %}
If `options` are empty, assume free response question.
{% endhint %}

{% api-method method="get" host="http://pollo-backend.cornellappdev.com" path="/api/v2/drafts/" %}
{% api-method-summary %}
Get all drafts for a user
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Authentication" type="string" required=true %}
`'Bearer ' + accessToken`
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
Edges<Draft>
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="http://pollo-backend.cornellappdev.com" path="/api/v2/drafts/" %}
{% api-method-summary %}
Create a draft
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Authentication" type="string" required=true %}
`'Bearer ' + accessToken`
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="text" type="string" required=false %}

{% endapi-method-parameter %}

{% api-method-parameter name="options" type="array" required=false %}
string\[\]
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
Node<Draft>
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="put" host="http://pollo-backend.cornellappdev.com" path="/api/v2/drafts/:id" %}
{% api-method-summary %}
Update a draft
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authentication" type="string" required=true %}
`'Bearer ' + accessToken`
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="text" type="string" required=false %}

{% endapi-method-parameter %}

{% api-method-parameter name="options" type="array" required=false %}
string\[\]
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
Node<Draft>
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="delete" host="http://pollo-backend.cornellappdev.com" path="/api/v2/drafts/:id" %}
{% api-method-summary %}
Delete a draft
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authentication" type="string" required=true %}
`'Bearer ' + accessToken`
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=204 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

## Groups

```text
type Group {
    id: number,
    name: string,
    code: string
}
```

{% hint style="info" %}
Previously known as Session.
{% endhint %}

{% api-method method="post" host="http://pollo-backend.cornellappdev.com" path="/api/v2/groups/" %}
{% api-method-summary %}
Create a group
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Authentication" type="string" required=true %}
`'Bearer ' + accessToken`
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="name" type="string" required=false %}

{% endapi-method-parameter %}

{% api-method-parameter name="code" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
Node<Group>
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="http://pollo-backend.cornellappdev.com" path="/api/v2/groups/:id" %}
{% api-method-summary %}
Get a group
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authentication" type="string" required=true %}
`'Bearer ' + accessToken`
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
Node<Group>
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="http://pollo-backend.cornellappdev.com" path="/api/v2/groups/all/:role" %}
{% api-method-summary %}
Get all groups
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="role" type="string" required=true %}
If role is `member`, this will return all groups you are in. If role is `admin`, this will return all groups you are an admin of. 
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
`'Bearer ' + accessToken` 
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
Edges<Group>
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% hint style="info" %}
Each of the Group nodes has an extra field called `updatedAt`indicating the latest activity in Unix time & field called `isLive` indicating whether the group is live or not.
{% endhint %}

{% api-method method="put" host="http://pollo-backend.cornellappdev.com" path="/api/v2/groups/:id/" %}
{% api-method-summary %}
Update a group
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
`'Bearer ' + accessToken`
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="name" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
Node<Group>
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="delete" host="http://pollo-backend.cornellappdev.com" path="/api/v2/groups/:id/" %}
{% api-method-summary %}
Delete a group
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
`'Bearer ' + accessToken`
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=204 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="delete" host="http://pollo-backend.cornellappdev.com" path="/api/v2/groups/:id/members/" %}
{% api-method-summary %}
Leave a group
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
`'Bearer ' + accessToken`
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=204 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="http://pollo-backend.cornellappdev.com" path="/api/v2/groups/:id/members/" %}
{% api-method-summary %}
Get members
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
`'Bearer ' + accessToken`
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
Edges<User>
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="http://pollo-backend.cornellappdev.com" path="/api/v2/groups/:id/admins/" %}
{% api-method-summary %}
Get admins
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
`'Bearer ' + accessToken`
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
Edges<User>
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="http://pollo-backend.cornellappdev.com" path="/api/v2/:id/members/" %}
{% api-method-summary %}
Add members
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
`'Bearer ' + accessToken`
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="memberIDs" type="array" required=true %}
int\[\]  
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=204 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="delete" host="http://pollo-backend.cornellappdev.com" path="/api/v2/groups/:id/members/" %}
{% api-method-summary %}
Remove members
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
`'Bearer ' + accessToken`
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="memberIDs" type="array" required=true %}
int\[\]
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=204 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="http://pollo-backend.cornellappdev.com" path="/api/v2/groups/:id/admins/" %}
{% api-method-summary %}
Add admins
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
`'Bearer ' + accessToken`
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="adminIDs" type="array" required=true %}
int\[\]
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=204 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="put" host="http://pollo-backend.cornellappdev.com" path="/api/v2/groups/:id/admins/" %}
{% api-method-summary %}
Remove admins
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
`'Bearer ' + accessToken`
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="adminIDs" type="array" required=true %}
int\[\]
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=204 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

## Polls

```text

type Poll {
  id: number,
  text: string,
  results: json,
  shared: boolean,
  type: string, // MULTIPLE_CHOICE OR FREE_RESPONSE
  answer: ?string[],
  correctAnswer: string
}
```

{% hint style="info" %}
`Answer` is the user’s answer for that specific question. `null` if the user is the admin of the question. For multiple choice, answer is the choice. For free response, answer is an array of answer ids.

`correctAnswer` is the correct answer choice for multiple choice \(ex. `correctAnswer: 'A'` \). Empty string if no correct answer selected for multiple choice or the question is free response. 
{% endhint %}

{% api-method method="post" host="http://pollo-backend.cornellappdev.com" path="/api/v2/groups/:id/polls/" %}
{% api-method-summary %}
Create a poll
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
`'Bearer ' + accessToken`
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="type" type="string" required=true %}

{% endapi-method-parameter %}

{% api-method-parameter name="text" type="string" required=false %}

{% endapi-method-parameter %}

{% api-method-parameter name="results" type="object" required=false %}
json
{% endapi-method-parameter %}

{% api-method-parameter name="shared" type="boolean" required=false %}

{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
Node<Poll>
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="http://pollo-backend.cornellappdev.com" path="/api/v2/polls/:id/" %}
{% api-method-summary %}
Get a poll
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
`'Bearer ' + accessToken`
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
Node<Poll>
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="http://pollo-backend.cornellappdev.com" path="/api/v2/groups/:id/polls/" %}
{% api-method-summary %}
Get all polls for a group sorted by date
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
`'Bearer ' + accessToken`
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
A dictionary with dates mapped to a list of polls
{% endapi-method-response-example-description %}

```
Example: 
{
  success: true,
  data: {
    "Sep 27 2018": [
        {
          "id": 9,
          "text": "question!",
          "results": {},
          "shared": true,
          "type": "MULTIPLE_CHOICE",
          "answer": null
        }
    ]
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="put" host="http://pollo-backend.cornellappdev.com" path="/api/v2/polls/:id/" %}
{% api-method-summary %}
Update a poll
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
`'Bearer ' + accessToken`
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="text" type="string" required=false %}

{% endapi-method-parameter %}

{% api-method-parameter name="results" type="string" required=false %}

{% endapi-method-parameter %}

{% api-method-parameter name="shared" type="boolean" required=false %}

{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
The updated poll
{% endapi-method-response-example-description %}

```
Node<Poll>
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="delete" host="http://pollo-backend.cornellappdev.com" path="/api/v2/polls/:id/" %}
{% api-method-summary %}
Delete a poll
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
`'Bearer ' + accessToken`
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=204 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

## Users

```text
type User {
  id: number,
  name: string,
  netID: string
}
```

{% api-method method="get" host="http://pollo-backend.cornellappdev.com" path="/api/v2/users/" %}
{% api-method-summary %}
Get me
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
`'Bearer ' + accessToken`
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
Node<User>
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

## Authentication

```text
type UserSession {
  accessToken: string,
  refreshToken: string,
  sessionExpiration: number,
  isActive: boolean
}
```

{% api-method method="post" host="http://pollo-backend.cornellappdev.com" path="/api/v2/auth/mobile" %}
{% api-method-summary %}
Authenticate mobile
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="idToken" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
Node<UserSession>
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="http://pollo-backend.cornellappdev.com" path="/api/v2/auth/refresh/" %}
{% api-method-summary %}
Refresh session
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
`'Bearer ' + refreshToken`
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
Node<UserSession>
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

## Socket Protocol

Built with Socket.io. [Documentation found here.](https://socket.io/docs/)

### Socket Connection

Connect \(default socket\) Make sure to visit `/start/group/` before joining a socket because this will create the socket if not created yet. Need to emit `userType` and `googleID` on connect.  
  
Disconnect \(default socket\)

### Group

#### Rest

| Method | Body | URL | Response | Description |
| :--- | :--- | :--- | :--- | :--- |
| POST | `code: string` and `name?: string` | `/start/group/` | `Group` - The group that was created, use `id` as a namespace | User sends to start a group |
| POST | `id: number` or `code: string` | `/join/group/` | `Group` | User sends to join a group |

### Socket

#### To Server

| Message | Body | Description |
| :--- | :--- | :--- |
| `server/poll/start` | `Poll` object without id | Admin sends to start a poll |
| `server/poll/end` | _empty_ | Admin sends to stop a poll |
| `server/poll/results` | _empty_ | Admin sends to share results |
| `server/poll/tally` | `answerID` and `googleID` | User sends to reveal their chosen response to the server  |
| `server/poll/upvote` | `Answer` object without id | User sends to upvote an answer |

#### To Student

| Message | Body | Description |
| :--- | :--- | :--- |
| `user/poll/start` | { poll: `Poll` object } | User receives to display a poll |
| `user/poll/end` | `{ poll:` Poll `object }` | User receives when poll has ended |
| `user/poll/results/` | `CurrentState` object | User receives when if admin decides to share results |
| `user/poll/results/live` | `CurrentState` object | User receives when there is a live FR question when user first joins socket |
| `user/count` | { count: `user count` } | User receives number of live users in socket |

#### To Admin

| Message | Body | Description |
| :--- | :--- | :--- |
| `admin/poll/start` | { poll: `Poll` object } | Admin receives current poll upon entry \(if there is one\) |
| `admin/poll/updateTally` | `CurrentState` object | Admin receives state of poll i.e. tallies |
| `admin/poll/ended` | { poll: `Poll` object } | Admin receives when poll has been ended |
| `user/count` | { count: `user count` } | User receives number of live users in socket |

### Type Definitions

{% hint style="info" %}
These objects are not saved outside of a socket.
{% endhint %}

#### Current State

```javascript
type CurrentState {
    poll: number,
    results: {},
    answers: {}, // google id to answer choice for MC and array of answer ids for FR
    upvotes: {}  // google id to array of answer ids
}
```

Example of results. Note: answers is a mapping of googleID to selected option.

```javascript
results = {'A': {'text': 'blue', 'count': 1}, 'B': {'text': 'red', 'count': 2}}

// FR example of answer id to answer
results = {1: {'text': 'blue', 'count': 0}, 2: {'text': 'red', 'count': 2}}
```

#### Answer

```javascript
type Answer {
    id: id,
    googleID: string,
    poll: id,
    choice: string,
    text: string
}
```

For MC: `choice` should be `C` and text should be `Saturn`.  
For FR: `choice` and `text` should be `Saturn`.

#### Poll

```javascript
type Poll {
    id: number, // id doesn't correspond to poll id when saved in db
    text: string,
    type: string,
    options: ?string[],
    shared: boolean,
    correctAnswer: string
}
```

`options` is the text of the choices. If the choices are

```text
A) Blue B) Red C) Green D)
```

where `D` is a blank option, the choices would be: 

```javascript
options = ['Blue', 'Red', 'Green', '']
```

{% hint style="info" %}
`Poll` is saved into the database after admin ends poll.
{% endhint %}

## Other

### Nodes

All objects fetched from the API are returned in a standard "node" object type.This is to future-proof the API, and allow metadata, warnings, errors or other information to be returned alongside the requested resource.

#### URL

URLs for nodes consist of a 'collection type' and an id. For example, to retrieve a poll, one would call:

```http
GET /polls/${id}
```

#### Node Return Type

All nodes return an object in the same format. If requesting an object of `type T`, the response would be of type: 

```javascript
NodeResponse<T> = {
  success: boolean,
  data: {
    node: T,
  },
  errors?: Array<Error>
}
```

So, for example, retrieving a poll would yield an object like this:

```javascript
{
  "success": true,
  "data": {
    "node": {
      "id": 1,
      "name": "cool",
      "code": "ABC123"
    }
  }
}
```

### Edges

Relations between entities are connected by paginated edges, following a common scheme. The edge connection is retrieved independently of the source object following common patterns.

#### URL

URLs for connections are made from a node, which is fetched with a 'collection type' and an id. For example, to retrieve a group, one would call:

```http
GET /polls/${id}
```

Questions have a connection to polls. From this node, we can fetch said connection \(seen below\), which would return a connection return object.

```http
GET /polls/${id}/questions/
```

#### Connection Return Type

All paginated routes return an object in the same format. If requesting a list of elements of `type T`, the response would be of type:

```javascript
EdgeResponse<T> = {
  success: boolean,
  data: {
    edges: Array<Edge<T>>,
    pageInfo?: {
      count: number,
    }
  },
  errors?: Array<Error>
}
```

For 'edges' of type:

```javascript
Edge = {
  cursor: cursor,
  node: T
}
```

where the type of cursor is as follows:

```javascript
cursor = number | string
```

{% hint style="info" %}
Numbers and strings are both allowed. Cursor should be mostly opaque and just used when sending requests.
{% endhint %}

So fetching all questions for a poll would yield something similar to:

```javascript
{
  edges: [
    {
      cursor: '1506730644751',
      node: {
        id: 0,
        text: 'question 1',
        results: {}
      }
    },
    {
      cursor: '1506730707264',
      node: {
        id: 1,
        text: 'question 2',
        results: {}
      }
    }
  ]
}
```

#### One-liners for common operations

Extracting the nodes is easy using:

```javascript
const getNodes = (result: Response) => result.edges.map(({ node }) => node);
```

Extracting the last cursor can be done with:

```javascript
const lastCursor = (result: Response) => result.edges.map(({ cursor }) => cursor).pop();
```



