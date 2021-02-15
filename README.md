# React Shopping App

![alt text](https://lh4.googleusercontent.com/CIB-90EhH-87EOIIc_zCQV9hYLZ1JKJU6CQtCaNailJW__vq6TkE77jUVh5NoPnEVyigEXIRcy3AYa_tx3Wa_0_VS4u1Hh7ymK8a5D5gK7AvD8iB1dponjrdBF_wHyDZss1WFtEN)

This is a personal project I created to learn and use React.js.

The app is a shopping application. The front end is implemented using react.js and a backend is implemented using Flask API.

The home page shows all the items we have stored in the database using the endpoint ‘/fetchProducts’. Each product has an add to cart button with an onClick handler that sends the item to be stored in the database through the ‘/addToCart’ endpoint POST request. 

On the Cart page, I use the ‘/fetchCart’ endpoint with GET request to show all the items that I stored in the cart. Each item in the cart has a delete button with an onClick handler that deletes the item from the database using a ‘/deleteItem’ endpoint.

### How to run the app

To run the app you have to install NPM from Node.js page. Once you have NPM installed `git clone` the file and cd to it, once you are there run `npm start`.
To get the items you will have to run the API as well, just cd to api folder and run `python app.py`. You will need to have Python installed.



Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
