# Get all repositories
Returns all repositories stored in the database.

**Request:** 
`GET` `/repos`

**Content-Type:**
`application/json`

## Responses

**Status code:** `200 OK`

<details>
  <summary>Example response</summary>

  ```json
  {
    "status": 200,
    "repositories": [ ... ]
  }
  ```
</details>

---

**Status code:** `400 Bad Request`

<details>
  <summary>Example response</summary>

  ```json
  {
    "status": 400,
    "message": "An error occured"
  }
  ```
</details>
