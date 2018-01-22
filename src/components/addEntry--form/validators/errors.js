export default({
  name,
  description,
  price,
  currency,
  availability,
  category,
}) => {
  const error = {};
  // Product name validators
  if (!name) {
    error.name = 'PRODUCT_NAME_EMPTY';
  } else if (name.length > 50) {
    error.name = 'PRODUCT_NAME_TOO_LONG';
  } else {
    error.name = null;
  }
  // Description
  if (!description) {
    error.description = 'PRODUCT_DESCRIPTION_EMPTY';
  } else if (description.length < 10) {
    error.description = 'PRODUCT_DESCRIPTION_TOO_SHORT';
  } else if (description.length > 500) {
    error.description = 'PRODUCT_DESCRIPTION_TOO_LONG';
  } else {
    error.description = null;
  }
  // Price
  if (!price) {
    error.price = 'PRODUCT_PRICE_EMPTY';
    // eslint-disable-next-line
  } else if (typeof parseInt(price, 10) !== 'number' || isNaN(parseInt(price, 10))) {
    error.price = 'PRODUCT_PRICE_MUST_BE_NUMBER';
  } else {
    error.price = null;
  }
  // Currency
  if (!currency) {
    error.currency = 'PRODUCT_CURRENCY_EMPTY';
  } else {
    error.currency = null;
  }
  // availability
  if (availability === undefined) {
    error.availability = 'PRODUCT_AVAILABILITY_EMPTY';
  } else {
    error.availability = null;
  }
  // category
  if (!category) {
    error.category = 'PRODUCT_CATEGORY_EMPTY';
  } else {
    error.category = null;
  }
  return error;
};
