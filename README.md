# React Shopping App

![alt text](https://lh4.googleusercontent.com/CIB-90EhH-87EOIIc_zCQV9hYLZ1JKJU6CQtCaNailJW__vq6TkE77jUVh5NoPnEVyigEXIRcy3AYa_tx3Wa_0_VS4u1Hh7ymK8a5D5gK7AvD8iB1dponjrdBF_wHyDZss1WFtEN)

This is a personal project I created to learn and use React.js.

It consists of a simple shopping app, using just react no Redux or any other library, I created a Flask API that communicates with the database through the endpoints that we use at the react app. The home page shows all the items we have stored in the database using the endpoit ‘/fetchProducts’ from the Flask API, a GET request from the API. Each product has an add to cart button with an onClick handler that sends the item to be stored in the database through the ‘/addToCart’ endpoint POST request. 

On the Cart page, I use the ‘/fetchCart’ endpoint with GET request to show all the items that I stored in the cart data. Each item in the cart has a delete button with an onClick handler that deletes the item from the database using a ‘/deleteItem’ endpoint with a Delete method.

### How to run the app

To run the app you have to install NPM from Node.js page. Once you have NPM installed `git clone` the file and cd to it, once you are there run `npm start`.
To get the items you will have to run the API as well, just cd to api folder and run `python app.py`. You will need to have Python installed.



Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
# Sopping-App-React
# React-Shopping-App
# React-Shopping-App
# React-Shopping-App
