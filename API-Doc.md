# Thai Game Backend API Documentation

This API documentation provides details on the available endpoints, request formats, and response formats for the Thai Game Backend.

## Base URL

The base URL for the API is: `http://localhost:3001`

## Endpoints

### GET /api/v1/thai_words/random

Get random words from selected categories.

**Query Parameters:**

- `category` (string, required): The category of the words to retrieve. Multiple categories can be specified using comma-separated values.

**Example Request:**

```
GET /api/v1/thai_words/random?category=food
```

**Example Response:**

```json
[
  {
    "id": 1,
    "img_url": "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a",
    "audio_url": "https://d1dfsocfrnqlhe.cloudfront.net/apple-word.mp3",
    "word": "apple",
    "categories": "food"
  },
  ...
]
```

### POST /api/v1/thai_words ----(under construction)----

Create a new word.

**Request Body:**

- `img_url` (string, required): The URL of the word image.
- `audio_url` (string, required): The URL of the word audio.
- `word` (string, required): The word in Thai.
- `categories` (string, required): The categories associated with the word.

**Example Request:**

```
POST /api/v1/thai_words
Content-Type: application/json

{
  "img_url": "https://images.unsplash.com/photo-1621581717257-17fd1d594d12",
  "audio_url": "https://d1dfsocfrnqlhe.cloudfront.net/thank-you-word.mp3",
  "word": "thank you",
  "categories": "greeting"
}
```

**Example Response:**

```json
{
  "id": 5,
  "img_url": "https://images.unsplash.com/photo-1621581717257-17fd1d594d12",
  "audio_url": "https://d1dfsocfrnqlhe.cloudfront.net/thank-you-word.mp3",
  "word": "thank you",
  "categories": "greeting"
}
```

### GET /api/v1/thai_words/:id ----(under construction)----

Get a word by ID.

**Path Parameters:**

- `id` (number, required): The ID of the word to retrieve.

**Example Request:**

```
GET /api/v1/thai_words/1
```

**Example Response:**

```json
{
  "id": 1,
  "img_url": "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a",
  "audio_url": "https://d1dfsocfrnqlhe.cloudfront.net/apple-word.mp3",
  "word": "apple",
  "categories": "food"
}
```

### PUT /api/v1/thai_words/:id ----(under construction)----

Update a word by ID.

**Path Parameters:**

- `id` (number, required): The ID of the word to update

.

**Request Body:** 

- `img_url` (string, optional): The updated URL of the word image.
- `audio_url` (string, optional): The updated URL of the word audio.
- `word` (string, optional): The updated word in Thai.
- `categories` (string, optional): The updated categories associated with the word.

**Example Request:**

```
PUT /api/v1/thai_words/1
Content-Type: application/json

{
  "img_url": "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a",
  "audio_url": "https://d1dfsocfrnqlhe.cloudfront.net/apple-word.mp3",
  "word": "apple",
  "categories": "food"
}
```

**Example Response:**

```json
{
  "id": 1,
  "img_url": "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a",
  "audio_url": "https://d1dfsocfrnqlhe.cloudfront.net/apple-word.mp3",
  "word": "apple",
  "categories": "food"
}
```

### DELETE /api/v1/thai_words/:id ----(under construction)----

Delete a word by ID.

**Path Parameters:**

- `id` (number, required): The ID of the word to delete.

**Example Request:**

```
DELETE /api/v1/thai_words/1
```

**Example Response:**

```json
{
  "message": "Word deleted successfully."
}
```
