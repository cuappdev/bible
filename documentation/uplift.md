---
description: API Documentation for Uplift
---

# Uplift

{% api-method method="get" host="http://uplift-backend.cornellappdev.com" path="/graphQL" %}
{% api-method-summary %}
GraphQL
{% endapi-method-summary %}

{% api-method-description %}
This endpoint takes GraphQL queries and get the requested data as JSON result.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="GraphQL Query" type="string" required=true %}
Example:  
  
{  
  gyms {  
    id  
    name  
  }  
}
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Response to example query
{% endapi-method-response-example-description %}

```
{
  "data": {
    "gyms": [
      {
        "id": "7045d11329b3645c93556c5aaf44bb21d56934f5",
        "name": "Helen Newman"
      },
      {
        "id": "7c53229a64f4794f57a715a9ec0c7f806db23514",
        "name": "Appel"
      },
      {
        "id": "1f114d3b981f832c858f5cfa52f3a1eb6191e1a4",
        "name": "Noyes"
      },
      {
        "id": "939c7a2c16d2299cc8558475a8007defc414069c",
        "name": "Teagle Up"
      },
      {
        "id": "043c57f3b63411c7a3500c0986fa4b1c8712798c",
        "name": "Teagle Down"
      }
    ]
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

For more information on GraphQL: [https://graphql.org/](https://graphql.org/)



