"use strict"

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
  };
  
  services['Розбити скло'] = "200 грн";
  services['Ремонт скла'] = "250 грн";
  services['Поставити своє скло'] = "300 грн";
  
  services.price = function() {  // загальна ціна
    let sum = 0;
    for (let serviceName in this) { 
      if (typeof this[serviceName] === "string") { 
        sum = sum + parseFloat(services[serviceName]); 
      }
    }
    return sum + " грн";
  };
  
  services.minPrice = function() {    // мінімальна ціна
    let min = Infinity;
    for (let serviceName in this) {
      if (typeof this[serviceName] === "string") {
        let value = parseFloat(this[serviceName]);
        if (value < min) {
          min = value;
        }
      }
    }
    return min + " грн";
  };
  
  services.maxPrice = function() { // максимальна ціна
    let max = -Infinity;
    for (let serviceName in this) {
      if (typeof this[serviceName] === "string") {
        let value = parseFloat(this[serviceName]);
        if (value > max) {
          max = value;
        }
      }
    }
    return max + " грн";
  };
  
  console.log("Загальна ціна:", services.price());
  console.log("Мінімальна ціна:", services.minPrice());
  console.log("Максимальна ціна:", services.maxPrice());
  
