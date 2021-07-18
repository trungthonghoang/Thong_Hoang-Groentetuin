const {
  getCostsForCrop,
  getRevenueForCrop,
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getProfitForCrop,
  getTotalProfit,
} = require("./farm");

// First part of the assignment
// Don't change the code below this line
describe("getYieldForPlant", () => {
  const corn = {
    name: "corn",
    yield: 30,
  };
  test("Get yield for plant with no environment factors", () => {
    expect(getYieldForPlant(corn)).toBe(30);
  });
});

describe("getYieldForCrop", () => {
  test("Get yield for crop", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getYieldForCrop(input)).toBe(30);
  });
});

describe("getTotalYield", () => {
  test("Calculate total yield with multiple crops", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];
    expect(getTotalYield({ crops })).toBe(23);
  });
});
// Don't change the code below above line

// Second part of the assignment
describe("getCostsForCrop", () => {
  test("Calculate cost for ten corn crops", () => {
    const corn = {
      name: "corn",
      cost: 1,
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getCostsForCrop(input)).toBe(10);
  });
});

describe("getRevenueForCrop", () => {
  test("Calculate the income for a crop without environmental factors", () => {
    const broccoli = {
      name: "brocolli",
      salePrice: 3,
      yield: 4,
    };
    const input = {
      crop: broccoli,
      numCrops: 10,
    };
    expect(getRevenueForCrop(input)).toBe(120);
  });
});

describe("getProfitForCrop", () => {
  test("Calculate profit for two tomato crops", () => {
    const tomato = {
      name: "tomato",
      salePrice: 3,
      yield: 4,
      cost: 2,
    };
    const input = {
      crop: tomato,
      numCrops: 2,
    };
    expect(getProfitForCrop(input)).toBe(22);
  });
});

describe("getTotalProfit", () => {
  test("Calculate the total profit for three different crops", () => {
    const corn = {
      name: "corn",
      salePrice: 2,
      yield: 3,
      cost: 1,
    };
    const pumpkin = {
      name: "pumpkin",
      salePrice: 10,
      yield: 4,
      cost: 3,
    };
    const tomato = {
      name: "tomato",
      salePrice: 5,
      yield: 2,
      cost: 2,
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
      { crop: tomato, numCrops: 3 },
    ];
    expect(getTotalProfit({ crops })).toBe(130);
  });
});

// Third part of the assignment
// GetYieldForPlant with environment factor tests
describe("getYieldForPlant with environment factor sun", () => {
  const corn = {
    name: "corn",
    yield: 30,
    factors: {
      sun: {
        low: -50,
        medium: 0,
        high: 50,
      },
    },
  };
  test("Get yield for plant with environment factor sun low", () => {
    const environmentFactors = {
      sun: "low",
    };
    expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
  });
  test("Get yield for plant with environment factor sun high", () => {
    const environmentFactors = {
      sun: "high",
    };
    expect(getYieldForPlant(corn, environmentFactors)).toBe(45);
  });
});
describe("getYieldForPlant with environment factor wind", () => {
  const corn = {
    name: "corn",
    yield: 30,
    factors: {
      wind: {
        low: -50,
        medium: 0,
        high: 50,
      },
    },
  };
  test("Get yield for plant with environment factor wind low", () => {
    const environmentFactors = {
      wind: "low",
    };
    expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
  });
  test("Get yield for plant with environment factor wind high", () => {
    const environmentFactors = {
      wind: "high",
    };
    expect(getYieldForPlant(corn, environmentFactors)).toBe(45);
  });
});

// getYieldForCrop with environment factor tests
describe("getYieldForCrop with environment factor sun", () => {
  const corn = {
    name: "corn",
    yield: 30,
    factors: {
      sun: {
        low: -50,
        medium: 0,
        high: 50,
      },
    },
  };
  test("Get yield for crop, sun high", () => {
    const environmentFactors = {
      sun: "high",
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getYieldForCrop(input, environmentFactors)).toBe(450);
  });
});

// getYieldForCrop with multiple factors
describe("getYieldForCrop with multiple environment factors", () => {
  const corn = {
    name: "corn",
    yield: 30,
    factors: {
      sun: {
        low: -50,
        medium: 0,
        high: 50,
      },
      soil: {
        low: -50,
        medium: 0,
        high: 50,
      },
      wind: {
        low: -50,
        medium: 0,
        high: 50,
      },
    },
  };

  test("Get yield for crop, sun high soil low", () => {
    const environmentFactors = {
      sun: "high",
      soil: "low",
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getYieldForCrop(input, environmentFactors)).toBe(225);
  });
  test("Get yield for crop with sun high, soil high, wind low", () => {
    const environmentFactors = {
      sun: "high",
      soil: "high",
      wind: "low",
    };
    const input = {
      crop: corn,
      numCrops: 20,
    };
    expect(getYieldForCrop(input, environmentFactors)).toBe(675);
  });
});

//getRevenueForCrop with environment factors
describe("getRevenueForCrop with environment factors", () => {
  const strawberry = {
    name: "strawberry",
    salePrice: 4,
    yield: 3,
    factors: {
      sun: {
        low: -20,
        medium: 0,
        high: 30,
      },
      soil: {
        peat: 30,
        sand: -20,
        clay: 20,
      },
    },
  };
  test("get Revenue for crop with sunfactor high", () => {
    const crops = {
      crop: strawberry,
      numCrops: 20,
    };
    const environmentFactors = {
      sun: "high",
    };
    expect(getRevenueForCrop(crops, environmentFactors)).toBe(312);
  });
});

//getProfitForCrops with environment factors
describe("getProfitForCrop with multiple environment factors", () => {
  const corn = {
    name: "corn",
    yield: 30,
    salePrice: 6,
    cost: 2,
    factors: {
      sun: {
        low: -50,
        medium: 0,
        high: 50,
      },
      soil: {
        low: -50,
        medium: 0,
        high: 50,
      },
      wind: {
        low: -50,
        medium: 0,
        high: 50,
      },
    },
  };
  test("Get profit for crop, sun low soil high", () => {
    const environmentFactors = {
      sun: "low",
      soil: "high",
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getProfitForCrop(input, environmentFactors)).toBe(1340);
  });
  test("Get profit for crop, sun high soil low", () => {
    const environmentFactors = {
      sun: "high",
      soil: "low",
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getProfitForCrop(input, environmentFactors)).toBe(1340);
  });
});

//getTotalProfict with environment factors
describe("getTotalProfit with environment factors", () => {
  test("Calculate the total profit for two different crops with env. factors", () => {
    const corn = {
      name: "corn",
      yield: 30,
      salePrice: 6,
      cost: 2,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        soil: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: -50,
          medium: 0,
          high: 50,
        },
      },
    };
    const pumpkin = {
      name: "pumpkin",
      salePrice: 10,
      yield: 4,
      cost: 3,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: -50,
          medium: 0,
          high: 50,
        },
      },
    };
    const crops = [
      { crop: corn, numCrops: 10 },
      { crop: pumpkin, numCrops: 2 },
    ];
    const environmentFactors = {
      sun: "high",
      soil: "high",
      wind: "low",
    };
    expect(getTotalProfit({ crops }, environmentFactors)).toBe(2073);
  });
});
