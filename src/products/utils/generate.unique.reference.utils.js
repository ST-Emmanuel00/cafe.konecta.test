export function generateUniqueReference(productName) {

    const prefix = productName
      .toUpperCase()
      .replace(/[^A-Z]/g, "") 
      .substring(0, 2);
  
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
  
    return `${prefix}${randomNumber}`;
  }