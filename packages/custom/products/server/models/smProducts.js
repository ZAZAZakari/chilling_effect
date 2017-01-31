'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Site Schema
 */
var ProductSchema = new Schema({
	productName:        {type: String}, // Pro
	productTitle:       {type: String}, // For Travellers
	productDescription: {type: String}, // Cancel anytime
	subscriptionType:   {type: String}, // day, week, month, year
    period:             {type: Number},    // 30
    supportedCountries: [String],       // ['jp', 'us', 'uk', 'tw'] standard coutnry code required
    markedPrice:        {type: Number},  // 29.99 (USD)
    sellingPrice:       {type: Number},  // 14.985 (USD)
    discount:           {type: Number},  // 0.5 
    promotion:          {type: String}, // Save 50%
    limitation:         {type: Number},  // 20 (GB)
    createdDate:        {type: Date, default: Date.now}
});

mongoose.model('Product', ProductSchema);