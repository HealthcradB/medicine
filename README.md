# HealthCrad Medicine API

This project provides an API for managing medicine data for HealthCrad. The API supports searching for medicines, adding new medicines, editing medicines, updating discounts, and deleting medicines.

## API Endpoints

### Get All Medicines

- **Endpoint**: `/api/v1/medicinelist/get-medicine`
- **Method**: `GET`
- **Description**: Retrieves all medicines.

#### Example Response

```json
[
  {
    "_id": "666270e13f8de40bb836adf7",
    "NAME": "Biceltis 440mg Injection",
    "PRICE": 54650,
    "PRESCRIPTION": "Prescription Required",
    "PACK": "vial of 1 Injection",
    "MANUFACTURER": "Cipla Ltd",
    "COMPOSITION": "Trastuzumab (440mg)",
    "DISCOUNT": 10
  },
  {
    "_id": "666270e13f8de40bb836adf8",
    "NAME": "Bleocip 15IU Injection",
    "PRICE": 591.42,
    "PRESCRIPTION": "Prescription Required",
    "PACK": "vial of 1 Injection",
    "MANUFACTURER": "Cipla Ltd",
    "COMPOSITION": "Bleomycin (15IU)",
    "DISCOUNT": 10
  }
]
```

### Get Single Medicine

- **Endpoint**: `/api/v1/medicinelist/single-medicine/:id`
- **Method**: `GET`
- **Description**: Retrieves a single medicine by its ID.

#### Example Request

```vbnet
Endpoint: /api/v1/medicinelist/single-medicine/60c72b2f9b1d8e3f88e5b5e3
Method: GET
```

#### Example Response

```json
{
  "data": {
    "_id": "666270e13f8de40bb836adf7",
    "NAME": "Biceltis 440mg Injection",
    "PRICE": 54650,
    "PRESCRIPTION": "Prescription Required",
    "PACK": "vial of 1 Injection",
    "MANUFACTURER": "Cipla Ltd",
    "COMPOSITION": "Trastuzumab (440mg)",
    "DISCOUNT": 10
  },
  "success": true,
  "message": "Successfully fetched the medicine",
  "error": null
}
```

### Add New Medicine

- **Endpoint**: `/api/v1/medicinelist/create-medicine`
- **Method**: `POST`
- **Description**: Adds a new medicine to the database.
- **Request Body**:

| Name         | Type   | Description                  |
| ------------ | ------ | ---------------------------- |
| NAME         | String | Name of the medicine         |
| MANUFACTURER | String | Manufacturer of the medicine |
| COMPOSITION  | String | Composition of the medicine  |
| PRICE        | Number | Price of the medicine        |
| DISCOUNT     | Number | Discount on the medicine     |

#### Example Request

```vbnet
Endpoint: /api/v1/medicinelist/create-medicine
Method: POST
```

```json
{
  "NAME": " Test",
  "PRICE": 54,
  "PRESCRIPTION": "Test",
  "PACK": "Test",
  "MANUFACTURER": "Ltd",
  "COMPOSITION": "Tras",
  "DISCOUNT": 20
}
```

#### Exaple Response

```json
{
  "data": {
    "NAME": " Test",
    "PRICE": 54,
    "PRESCRIPTION": "Test",
    "PACK": "Test",
    "MANUFACTURER": "Ltd",
    "COMPOSITION": "Tras",
    "DISCOUNT": 20,
    "_id": "6662af49dedada07fe72877d",
    "__v": 0
  },
  "success": true,
  "message": "Successfully created the medicine",
  "error": null
}
```

### Edit Medicine

- **Endpoint**: `/api/v1/medicinelist/update-medicine/:id`
- **Method**: `PUT`
- **Description**: Edits an existing medicine in the database.

#### Request Parameters

| Name | Type   | Description        |
| ---- | ------ | ------------------ |
| id   | String | ID of the medicine |

#### Request Body

| Name         | Type   | Description                             |
| ------------ | ------ | --------------------------------------- |
| NAME         | String | (Optional) Name of the medicine         |
| MANUFACTURER | String | (Optional) Manufacturer of the medicine |
| COMPOSITION  | String | (Optional) Composition of the medicine  |
| PRICE        | Number | (Optional) Price of the medicine        |
| DISCOUNT     | Number | (Optional) Discount on the medicine     |

#### Example Request

```vbnet
Endpoint: /api/v1/medicinelist/update-medicine/60c72b2f9b1d8e3f88e5b5e3
Method: PUT
```

```json
{
  "DISCOUNT": 50
}
```

#### Example Response

```json
{
  "data": {
    "_id": "6662af49dedada07fe72877d",
    "NAME": " Test",
    "PRICE": 54,
    "PRESCRIPTION": "Test",
    "PACK": "Test",
    "MANUFACTURER": "Ltd",
    "COMPOSITION": "Tras",
    "DISCOUNT": 50,
    "__v": 0
  },
  "success": true,
  "message": "Successfully updated the medicine",
  "error": null
}
```

### Delete Medicine

- **Endpoint**: `/api/v1/medicinelist/delete-medicine/:id`
- **Method**: `DELETE`
- **Description**: Deletes a single medicine by its ID.

#### Request Parameters

| Name | Type   | Description        |
| ---- | ------ | ------------------ |
| id   | String | ID of the medicine |

#### Example Request

```vbnet
Endpoint: /api/v1/medicinelist/delete-medicine/60c72b2f9b1d8e3f88e5b5e3
Method: DELETE
```

#### Example Response

```json
{
  "data": {
    "_id": "6662af49dedada07fe72877d",
    "NAME": " Test",
    "PRICE": 54,
    "PRESCRIPTION": "Test",
    "PACK": "Test",
    "MANUFACTURER": "Ltd",
    "COMPOSITION": "Tras",
    "DISCOUNT": 50,
    "__v": 0
  },
  "success": true,
  "message": "Successfully deleted the medicine",
  "error": null
}
```

### Get Medicines by Manufacturer

- **Endpoint**: `/api/v1/medicinelist/medicines-by-manufacturer/:manufacturer`
- **Method**: `GET`
- **Description**: Retrieves all medicines belonging to a specific manufacturer.

#### Request Parameters

| Name         | Type   | Description              |
| ------------ | ------ | ------------------------ |
| manufacturer | String | Name of the manufacturer |

#### Example Request

```vbnet
Endpoint: /api/v1/medicinelist/get-by-manufacturer/ExampleManufacturer
Method: GET
```

#### Example Response

```json
{
  "data": [
    {
      "_id": "666270e13f8de40bb836adf7",
      "NAME": "Biceltis 440mg Injection",
      "PRICE": 54650,
      "PRESCRIPTION": "Prescription Required",
      "PACK": "vial of 1 Injection",
      "MANUFACTURER": "Cipla Ltd",
      "COMPOSITION": "Trastuzumab (440mg)",
      "DISCOUNT": 10
    },
    {
      "_id": "666270e13f8de40bb836adf8",
      "NAME": "Bleocip 15IU Injection",
      "PRICE": 591.42,
      "PRESCRIPTION": "Prescription Required",
      "PACK": "vial of 1 Injection",
      "MANUFACTURER": "Cipla Ltd",
      "COMPOSITION": "Bleomycin (15IU)",
      "DISCOUNT": 10
    },
    {
      "_id": "666270e13f8de40bb836adfe",
      "NAME": "Budecort 0.5mg Respules (2ml Each)",
      "PRICE": 133.25,
      "PRESCRIPTION": "Prescription Required",
      "PACK": "packet of 5 respules",
      "MANUFACTURER": "Cipla Ltd",
      "COMPOSITION": "Budesonide (0.5mg)",
      "DISCOUNT": 10
    }
  ],
  "success": true,
  "message": "Successfully fetched medicines by manufacturer: Cipla Ltd",
  "error": null
}
```

### Update Discount by Manufacturer

- **Endpoint**: `/api/v1/medicinelist/update-discount/:manufacturer`
- **Method**: `PUT`
- **Description**: Updates the discount for all medicines of a specific manufacturer.

#### Request Parameters

| Name         | Type   | Description              |
| ------------ | ------ | ------------------------ |
| manufacturer | String | Name of the manufacturer |

#### Request Body

| Name     | Type   | Description             |
| -------- | ------ | ----------------------- |
| discount | Number | New discount percentage |

#### Example Request

```vbnet
Endpoint: /api/v1/medicinelist/update-discount/ExampleManufacturer
Method: PUT
```

```json
{
  "discount": 15
}
```

#### Example Response

```json
{
  "data": {
    "acknowledged": true,
    "modifiedCount": 3,
    "upsertedId": null,
    "upsertedCount": 0,
    "matchedCount": 3
  },
  "success": true,
  "message": "Successfully updated discount for manufacturer: Cipla Ltd",
  "error": null
}
```

## Usage

### Search for Medicines

Send a GET request to `/api/v1/medicinelist/search` with an optional query parameter `name` to search for medicines.

### Add New Medicine

Send a POST request to `/api/v1/medicinelist/add-medicine` with the required request body to add a new medicine.

### Edit Medicine

Send a PUT request to `/api/v1/medicinelist/edit-medicine/:id` with the required request body to edit an existing medicine.

### Delete Medicine

Send a DELETE request to `/api/v1/medicinelist/delete-medicine/:id` with the medicine ID to delete a single medicine.

### Get Medicines by Manufacturer

Send a GET request to `/api/v1/medicinelist/get-by-manufacturer/:manufacturer` with the manufacturer name to retrieve all medicines belonging to that manufacturer.

### Update Discount by Manufacturer

Send a PUT request to `/api/v1/medicinelist/update-discount/:manufacturer` with the manufacturer name and the new discount percentage to update the discount for all medicines of that manufacturer.

## Environment Variables

Ensure you have the following environment variables set up in a `.env` file:

```plaintext
# Database connection URI
DB_URI=mongodb://localhost:27017/medicine_db

# Port on which the server will run
PORT=3000
```
