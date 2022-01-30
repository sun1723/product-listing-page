
# A Simple Product Listing Page

A simple product listing page with Next.js




## Run Locally

Clone the project

```bash
  git clone https://github.com/sun1723/product-listing-page.git

```

Install dependencies

```bash
  npm install --save
```

Start the server

```bash
  npm run dev
```

open Local host

https://localhost:3000

### Product Listing Page File Structure
``` 
 ┣ components
 ┃ ┣ Footer.js
 ┃ ┣ Footer.module.css
 ┃ ┗ Header.js
 ┣ lib
 ┃ ┗ mongodb.js
 ┣ pages
 ┃ ┣ api
 ┃ ┃ ┗properties.js
 ┃ ┣ _app.js
 ┃ ┣ _document.js
 ┃ ┣ index.js
 ┃ ┗ pagePartial.js
 ┣ public
 ┃ ┣ favicon.ico
 ┃ ┣ food.jpg
 ┃ ┣ netliheart.svg
 ┃ ┗ noImgAvailable.png
 ┣ styles
 ┃ ┗ globals.css
 ┣ util
 ┃ ┗ styles.js
```
## Lessons Learned

1. deployment in netlify -- security problem --mongodb uri exposed



## Features

- sample data: download json file from "https://github.com/ozlerhakan/mongodb-json-files/blob/master/datasets/restaurant.json"
- UI components -- material ui, styled component
## Improvement
- More data type can be implemented 
- restructure components and increase their reusability
- Deplyment security issue
- Restructure filter for data --> better user experience
- Improve api structure
