const metaController = {};

/**
* searchItems
*
* Searches meta_table for item_id's with meta.alias like searchWord 
*
* Post - res.body { searchWord: ‘<STRING>’ }     
* 
* returns: [ item_id, item_id, ... <as many id's as exist in table >  ]
*
*/
metaController.searchItems = (req, res, next) => {
  
};





module.exports = metaController;