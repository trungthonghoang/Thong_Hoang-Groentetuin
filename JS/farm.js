const theCostsOfOnePlant = 1;

// Yield-related
const getYieldForPlant = (plant, environmentFactors = {}) => {
  let totalFactor = 1;
  if (
    environmentFactors.hasOwnProperty("sun") &&
    plant.factors.hasOwnProperty("sun")
  ) {
    totalFactor *= (plant.factors.sun[environmentFactors.sun] + 100) / 100;
  }
  if (
    environmentFactors.hasOwnProperty("wind") &&
    plant.factors.hasOwnProperty("wind")
  ) {
    totalFactor *= (plant.factors.wind[environmentFactors.wind] + 100) / 100;
  }
  if (
    environmentFactors.hasOwnProperty("soil") &&
    plant.factors.hasOwnProperty("soil")
  ) {
    totalFactor *= (plant.factors.soil[environmentFactors.soil] + 100) / 100;
  }
  return plant.yield * totalFactor;
};

const getYieldForCrop = (input, environmentFactors) => {
  return input.numCrops * getYieldForPlant(input.crop, environmentFactors);
};

const getTotalYield = ({ crops }, environmentFactors) =>
  crops
    .map((crop) => getYieldForCrop(crop, environmentFactors))
    .reduce((total, input) => {
      return total + input;
    });

// Crop-related
const getCostsForCrop = (input) => {
  return input.numCrops * theCostsOfOnePlant;
};

const getRevenueForCrop = (input, environmentFactors) => {
  return getYieldForCrop(input, environmentFactors) * input.crop.salePrice;
};

const getProfitForCrop = (input, environmentFactors) => {
  return getRevenueForCrop(input, environmentFactors) - getCostsForCrop(input);
};

const getTotalProfit = ({ crops }, environmentFactors) => {
  return crops
    .map((crop) => getProfitForCrop(crop, environmentFactors))
    .reduce((total, current) => {
      return total + current;
    });
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
};
