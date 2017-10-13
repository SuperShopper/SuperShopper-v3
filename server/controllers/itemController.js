
const itemController = {};

/**
* getTopItems
*
* Searches items_table for top 6 items sold 
* 
* returns: [  { _id, title, price, img, num_sold},
              { _id, title, price, img, num_sold},
              { _id, title, price, img, num_sold},
              { _id, title, price, img, num_sold},
              { _id, title, price, img, num_sold},
              { _id, title, price, img, num_sold} ]
  

*/
itemController.getTopItems = (req, res, next) => {
  
};

/**
* getItemById
*
* Gets Item Object from items_table for this _id
* 
* Post - Body { _id: ‘<STRING>’ }
*
* returns: { _id, title, price, img, num_sold, summary, 
              description, location, shipping_duration, 
              shipping_cost, stock_available }

*/
itemController.getItemById = (req, res, next) => {
   
};


/**
* getAllItemsFromIds
*
* Searches items_table for all items in the database using id's from req.params.itemIdArr 
* 
* returns: [  { _id, title, price, img, num_sold},
              { _id, title, price, img, num_sold},
              { _id, title, price, img, num_sold},
              ... <As many rows as exist>          ]
  

*/
itemController.getAllItemsFromIds = (req, res, next) => {
  
};



module.exports = itemController;