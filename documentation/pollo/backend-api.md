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
    success: true,
    data: {
        code: string
    }
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
    createdAt?: number,
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

```javascript
{
    success: true,
    data: List<Draft>
}
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

```javascript
{
    success: true,
    data: <Draft>
}
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

```javascript
{
    success: true,
    data: <Draft>
}
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

```javascript
{
    success: true,
    data: null
}
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
    code: string,
    updatedAt: number,
    isLive: boolean
}
```

{% hint style="info" %}
Previously known as Session.
{% endhint %}

{% api-method method="post" host="http://pollo-backend.cornellappdev.com" path="/api/v2/sessions/" %}
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

```javascript
{
    success: true,
    data: <Group>
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="http://pollo-backend.cornellappdev.com" path="/api/v2/sessions/:id" %}
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

```javascript
{
    success: true,
    data: <Group>
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="http://pollo-backend.cornellappdev.com" path="/api/v2/sessions/all/:role" %}
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

```javascript
{
    success: true,
    data: List<Group>
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% hint style="info" %}
Each of the Group nodes has an extra field called `updatedAt`indicating the latest activity in Unix time & field called `isLive` indicating whether the group is live or not.
{% endhint %}

{% api-method method="put" host="http://pollo-backend.cornellappdev.com" path="/api/v2/sessions/:id/" %}
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

```javascript
{
    success: true,
    data: <Group>
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="delete" host="http://pollo-backend.cornellappdev.com" path="/api/v2/sessions/:id/" %}
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

```javascript
{
    success: true,
    data: null
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="delete" host="http://pollo-backend.cornellappdev.com" path="/api/v2/sessions/:id/members/" %}
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

```javascript
{
    success: true,
    data: null
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="http://pollo-backend.cornellappdev.com" path="/api/v2/sessions/:id/members/" %}
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

```javascript
{
    success: true,
    data: List<User>
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="http://pollo-backend.cornellappdev.com" path="/api/v2/sessions/:id/admins/" %}
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

```javascript
{
    success: true,
    data: List<User>
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="http://pollo-backend.cornellappdev.com" path="/api/v2/sessions/:id/members/" %}
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

```javascript
{
    success: true,
    data: null
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="delete" host="http://pollo-backend.cornellappdev.com" path="/api/v2/sessions/:id/members/" %}
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

```javascript
{
    success: true,
    data: null
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="http://pollo-backend.cornellappdev.com" path="/api/v2/sessions/:id/admins/" %}
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

```javascript
{
    success: true,
    data: null
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="put" host="http://pollo-backend.cornellappdev.com" path="/api/v2/sessions/:id/admins/" %}
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

```javascript
{
    success: true,
    data: null
}
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

{% api-method method="post" host="http://pollo-backend.cornellappdev.com" path="/api/v2/sessions/:id/polls/" %}
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

```javascript
{
    success: true,
    data: <Poll>
}
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

```javascript
{
    success: true,
    data: <Poll>
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="http://pollo-backend.cornellappdev.com" path="/api/v2/sessions/:id/polls/" %}
{% api-method-summary %}
Get all polls for a group sorted by date \(newest first\)
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
An array of objects with a date \(Unix time\) and the date's polls
{% endapi-method-response-example-description %}

```javascript
{
  success: true,
  data: [ 
    {
      date: "1551846479",
      polls: [
        {
          "id": 9,
          "text": "question!",
          "results": {},
          "shared": true,
          "type": "MULTIPLE_CHOICE",
          "answer": ["A"]
        }
      ]
    }
  ]
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

```javascript
{
    success: true,
    data: <Poll>
}
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

```javascript
{
    success: true,
    data: null
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

## Questions

```text
type Question {
    id: number,
    createdAt?: number,
    text: string
}
```

{% api-method method="post" host="http://pollo-backend.cornellappdev.com" path="/api/v2/sessions/:id/questions/" %}
{% api-method-summary %}
Create a question
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}
group id
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

```javascript
{
    success: true,
    data: <Question>
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="http://pollo-backend.cornellappdev.com" path="/api/v2/questions/:id/" %}
{% api-method-summary %}
Get a question
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}
question id
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

```javascript
{
    success: true,
    data: <Question>
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="http://pollo-backend.cornellappdev.com" path="/api/v2/sessions/:id/questions/" %}
{% api-method-summary %}
Get all questions for a group
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}
group id
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

```javascript
{
    success: true,
    data: List<Question>
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="http://pollo-backend.cornellappdev.com" path="/api/v2/sessions/:id/questions/date/" %}
{% api-method-summary %}
Get all questions for a group sorted by date
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}
group id
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
An array of objects with a date \(Unix time\) and the date's questions
{% endapi-method-response-example-description %}

```javascript
{
  success: true,
  data: [
    {
      date: "1551846479",
      questions: [
        {
          id: string,
          text: string
        }
      ]
    }
  ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="put" host="http://pollo-backend.cornellappdev.com" path="/api/v2/questions/:id/" %}
{% api-method-summary %}
Update a question
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}
question id
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
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
The updated question
{% endapi-method-response-example-description %}

```javascript
{
    success: true,
    data: <Question>
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="delete" host="http://pollo-backend.cornellappdev.com" path="/api/v2/questions/:id/" %}
{% api-method-summary %}
Delete a question
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}
question id
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

```javascript
{
    success: true,
    data: null
}
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

```javascript
{
    success: true,
    data: <User>
}
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

{% hint style="info" %}
If invalid `accessToken` is passed into request header, `401 error` is thrown.
{% endhint %}

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

```javascript
{
    success: true,
    data: <UserSession>
}
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

```javascript
{
    success: true,
    data:<UserSession>
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

## Socket Protocol

Built with Socket.io. [Documentation found here.](https://socket.io/docs/)

### Socket Connection

**Connect** \(default socket\) Make sure to visit `/start/session/` before joining a socket because this will create the socket if not created yet. You will need to emit `userType`  on connect to socket.  
  
**Disconnect** \(default socket\)

### Group

#### Rest

| Method | Body | URL | Response | Description |
| :--- | :--- | :--- | :--- | :--- |
| POST | `code: string` and `name?: string` | `/start/session/` | `Group` - The group that was created, use `id` as a namespace | User sends to start a group |
| POST | `id: number` or `code: string` | `/join/session/` | `Group` | User sends to join a group |

### Socket

#### To Server

<table>
  <thead>
    <tr>
      <th style="text-align:left">Message</th>
      <th style="text-align:left">Body</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><code>server/poll/start</code>
      </td>
      <td style="text-align:left"><code>Poll</code> object without id</td>
      <td style="text-align:left">Admin sends to start a poll</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>server/poll/end</code>
      </td>
      <td style="text-align:left"><em>empty</em>
      </td>
      <td style="text-align:left">Admin sends to stop a poll</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>server/poll/results</code>
      </td>
      <td style="text-align:left"><em>empty</em>
      </td>
      <td style="text-align:left">Admin sends to share results</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>server/poll/tally</code>
      </td>
      <td style="text-align:left"><code>Answer</code> object without id</td>
      <td style="text-align:left">User sends to reveal their chosen response to the server</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>server/poll/upvote</code>
      </td>
      <td style="text-align:left">
        <p><code>{ answerID,</code>
        </p>
        <p><code>googleID }</code>
        </p>
      </td>
      <td style="text-align:left">User sends to upvote an answer</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>server/poll/delete</code>
      </td>
      <td style="text-align:left"><code>pollID</code> *same as db ID</td>
      <td style="text-align:left">Admin sends to delete saved poll</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>server/poll/deleteLive</code>
      </td>
      <td style="text-align:left"><em>empty</em>
      </td>
      <td style="text-align:left">Admin sends to delete live poll</td>
    </tr>
  </tbody>
</table>#### To Student

| Message | Body | Description |
| :--- | :--- | :--- |
| `user/poll/start` | { poll: `Poll` object } | User receives to display a poll |
| `user/poll/end` | { poll: `Poll` object } | User receives when poll has ended |
| `user/poll/results/` | `CurrentState` object | User receives when if admin decides to share results |
| `user/poll/results/live` | `CurrentState` object | User receives when there is a live FR question when user first joins socket |
| `user/count` | { count: `user count` } | User receives number of live users in socket |
| `user/poll/delete` | `pollID` \*same as db ID | User receives when poll is deleted |
| `user/poll/deleteLive` | _empty_ | User receives when live poll is deleted |
| `user/answer/success` | _empty_ | User receives when FR answer is successfully registered \(pass filter\) |
| `user/answer/filter` | { text: `string`, filter: `string array` } | User receives when FR answer is _not_  registered \(doesn't pass filter\) |

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



