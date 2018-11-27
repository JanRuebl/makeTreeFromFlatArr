# makeTreeFromFlatArr

Making a tree out of a array of Objects.

## Before:

```javascript
let categories = [
  {
    id_category: "animals",
    parent: "2"
  },
  {
    id_category: "mammals",
    parent: "animals"
  },
  {
    id_category: "cats",
    parent: "mammals"
  },
  {
    id_category: "dogs",
    parent: "mammals"
  },
  {
    id_category: "chihuahua",
    parent: "dogs"
  },
  {
    id_category: "labrador",
    parent: "dogs"
  },
  {
    id_category: "persian",
    parent: "cats"
  },
  {
    id_category: "siamese",
    parent: "cats"
  }
];
```

## After:

```javascript
{
  "animals": {
    "mammals": {
      "cats": {
        "persian": {},
        "siamese": {}
      },
      "dogs": {
        "chihuahua": {},
        "labrador": {}
      }
    }
  }
}

```
