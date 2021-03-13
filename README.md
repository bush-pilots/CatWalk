# TSVT CatWalk


## Overview:
TSVT Catwalk is a front end module designed to show off clothing products in an easy to navigate and user friendly way. It supports products that have multiple styles, images, ratings, reviews, related products, sale-pricing, product descriptions, and even has the functionality to ask and answer questions about the product!

## See TSVT Catwalk:
If you would like to see what TSVT Catwalk looks like in action, follow these steps to see what it looks like with data from our API.

1. Clone this repo. This is as easy as running the following command in your terminal:
```
$ git clone https://github.com/TSVT1/CatWalk.git
```

2. Run an npm install to install all dependencies:
```
$ npm install
```

3. Use the following command in order to use babel to transpile into code most browsers can read:
```
$ npm run build
```

4. Launch the server by running this line:
```
$ npm run start
```

5. Navigate to the localhost URL the server is listening on.
(default is localhost:3000)

6. That's it! Enjoy your clone of TSVT Catwalk!

## Description:
TSVT Catwalk is made up primarily of 3 modules. **Product Overview, Questions and Answers, and Ratings and Reviews.**

### **Product Overview**
Here you will see the selected product and style presented. A carousel to the left shows thumbnails of the selected style along with an expanded view and a zoom view modal if you click on the image while it is expanded. Product information is displayed to the right along with pricing. A series of components below that will allow the user to change between styles, choose a size, and add a quantity to their cart.

### **Questions and Answers**
This module allows users to view questions asked by other users and the answers to those questions, as well as post their own! Questions are by default displayed in order of helpfulness, which is a recorded number of times a question is marked helpful by a user. It also supports a search functionality if the user is looking for more specific information, and the ability to report questions and answers.

### **Ratings and Reviews**
This is where you can see reviews of the selected product as well as check out the rating. Displayed clearly on the left is the average rating as well as the breakdown of how many of each star rating the product has recieved. Below that you can see some tracked properties of the product and how it was rated by other users. To the right are the reviews left by other users. They can be sorted by most recent, most helpful, and most relevant. Users are also allowed to mark reviews as helpful or report them as well as leave their own reviews!

## Authors:

Dennis Arnold
[Github Profile](https://github.com/DennisJArnold)

Nick Papadakis
[Github Profile](https://github.com/spacerumsfeld-code)

Oren Nelson
[Github Profile](https://github.com/nohren)