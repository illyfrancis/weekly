# APIs

Assume that for all API request the following headers are set.

- `BBH id` in header
- `CSRF token` in header

## Authentication

For invalid `BBH id` due to timeout or doesn't exist etc.

`HTTP 401`

## Authorization

On authorization error, respond with forbidden.

`HTTP 403`

## CSRF

For invalid or missing CSRF token, respond with `403`?

