---
description: This endpoint takes GraphQL queries and returns data as a JSON.
---

# Backend API

## Campus Eateries

{% api-method method="get" host="http://eatery-backend.cornellappdev.com" path="/graphQL" %}
{% api-method-summary %}
Get all campus eateries
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="GraphQL Query" type="integer" required=false %}
id for a specific eatery.  No argument will result in a get all request  
  
example query
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
  "data": {
    "campusEateries": [
      {
        "about": "",
          "descriptionShort": "West"
        },
        "coordinates": {
          "latitude": 42.444266,
          "longitude": -76.487598
        },
        "eateryType": "All You Care To Eat Dining Room",
        "id": 31,
        "imageUrl": "https://raw.githubusercontent.com/cuappdev/assets/master/eatery/eatery-images/104-West.jpg",
        "location": "104 West Avenue",
        "name": "104West!",
        "nameShort": "104West!",
        "operatingHours": [
          {
            "date": "2018-12-04",
            "events": [
              {
                "calSummary": "Lunch",
                "description": "Lunch",
                "endTime": "2018-12-04:02:00pm",
                "menu": [
                  {
                    "category": "Salad Bar Station",
                    "items": [
                      {
                        "healthy": true,
                        "item": "Fresh Cut Fruit Salad"
                      },
                      {
                        "healthy": true,
                        "item": "Healthy Style Salad Bar"
                      }
                    ]
                  },
                  ...  # more stations
                ],
                "startTime": "2018-12-04:11:00am"
              },
              ...  # more events
            ]
          },
          ...  # more operating hours
        ],
        "paymentMethods": {
          "brbs": true,
          "cash": true,
          "cornellCard": true,
          "credit": true,
          "mobile": true,
          "swipes": true
        },
        "phone": "607-272-6907",
        "slug": "104-West"
      },
      ...  # more eateries
    ]
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

## Collegetown Eateries

{% api-method method="get" host="http://eatery-backend.cornellappdev.com" path="/graphQL" %}
{% api-method-summary %}
Get all collegetown eateries
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="GraphQL Query" type="integer" required=false %}
id for a specific collegetown eatery.  No argument will default to a get all request.  
  
{  
    collegetownEateries\(id: &lt;eatery\_id&gt;\) {  
        id  
        name  
    }  
}
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
  "data": {
    "collegetownEateries": [
      {
        "address": "415 College Ave",
        "categories": [
          "Bagels",
          "Sandwiches",
          "Coffee & Tea"
        ],
        "coordinates": {
          "latitude": 42.44234,
          "longitude": -76.48508
        },
        "eateryType": "Collegetown Restaurant",
        "id": -7,
        "imageUrl": "https://s3-media1.fl.yelpcdn.com/bphoto/hRhu1aRzEmV12yYYXeteAw/o.jpg",
        "name": "Collegetown Bagels",
        "operatingHours": [
          {
            "date": "2018-12-05",
            "events": [
              {
                "description": "General",
                "endTime": "2018-12-06:02:00AM",
                "startTime": "2018-12-05:06:30AM"
              }
            ]
          },
          ...  # more operating hours
        ],
        "paymentMethods": {
          "brbs": false,
          "cash": true,
          "cornellCard": false,
          "credit": true,
          "mobile": false,
          "swipes": false
        },
        "phone": "+16072730982",
        "price": "$",
        "rating": "4.0",
        "url": "https://www.yelp.com/biz/collegetown-bagels-ithaca?adjust_creative=ye2EvJ4Kp2xkdMHg9ZpbXA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=ye2EvJ4Kp2xkdMHg9ZpbXA"
      },
      ...  # more collegetown eateries
    ]
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

## GET Login

{% api-method method="get" host="http://eatery-backend.cornellappdev.com" path="/graphQL" %}
{% api-method-summary %}
Get user GET information
{% endapi-method-summary %}

{% api-method-description %}
Gathers user account information from GET \(laundry, brb, city bucks\)
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="GraphQL Query" type="string" required=true %}
GET session id for a user.  
  
{  
    accountInfo\(id: &lt;session\_id&gt;\) {  
        brb  
        cityBucks  
        history {  
            name  
            timestamp  
        }  
        laundry  
        swipes  
    }  
}
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
  "data": {
    "accountInfo": {
      "brbs": "22.67",
      "cityBucks": "0.00",
      "history": [
        {
          "name": "Duffield <register_number>",
          "timestamp": "12/05/18 at 02:24 PM"
        },
        {
          "name": "Jansens Market <register_number>",
          "timestamp": "12/02/18 at 11:57 PM"
        },
        {
          "name": "Jansens Market <register_number>",
          "timestamp": "12/02/18 at 09:33 PM"
        }
        ...  # more history
      ],
      "laundry": "3.05",
      "swipes": ""  # empty string means unlimited swipes
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}
