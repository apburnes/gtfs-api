GTFS REST API
=============

An API to discover and query Valley Metro transit routes.

## Install

Setup Postgresql

`$ export GTFS_URL="postgres://username@localhost:5432/gtfs"`

Install Dependencies

`npm install`

## Migrate GTFS Data

Migrate Data

`npm run migrate`

Reverse Migrations

`npm run reverse`

Refresh Migrations

`npm run refresh`

## Test

`npm run test`

## API

### getAgency

#### Agency Object

- `id`: integer, Agency id
- `agency_name`: string, Agency Name
- `agency_url`: string, Agency URL
- `agency_timezone`: string, trip timezone
- `agency_lang`: string, language abbreviation
- `agency_phone`: string, phone number

```js

var api = require('./api');

var agencyId = 1;

//callback
api.getAgency(agencyId, function(err, data) {
  if (err) {
    // handle error
  }

  // handle data
});


//promise
api.getAgency(agencyId)
  .then(function(data) {
    // handle data
  })
  .catch(function(err) {
    // handle error
  });
```
