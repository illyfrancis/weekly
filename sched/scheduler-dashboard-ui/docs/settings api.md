# Settings API

## Retrieve

### URL

- `GET` `/api/settings`

### Request

- `BBH id` in header
- `CSRF token` in header

### Response

#### if exists

```
[{
  "name": "reportName",
  "filter": "TR",
  "sortOrder": 1,
  "groupOrder": 0
}, {
  "name": "reportType",
  "filter": {},
  "sortOrder": 0,
  "groupOrder": 0
},
...
]

HTTP 200
```

#### or none

```
[]

HTTP 200
```

## Save

### URL

- `POST` `/api/settings`

> Effectively it performs replace with

### Request

- `BBH id` in header
- `CSRF token` in header

```
[{
  "name": "reportName",
  "filter": "TR",
  "sortOrder": 1,
  "groupOrder": 0
}, {
  "name": "reportType",
  "filter": {},
  "sortOrder": 0,
  "groupOrder": 0
},
...
]
```

### Response

HTTP 200 ok

on error?