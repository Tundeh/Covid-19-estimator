/* eslint-disable linebreak-style */
// Convert Time Durations to days
// eslint-disable-next-line linebreak-style
const timeToDays = (data) => {
  if (data.periodType === 'days') {
    return data.timeToElapse;
  } if (data.periodType === 'weeks') {
    return data.timeToElapse * 7;
  } if (data.periodType === 'months') {
    return data.timeToElapse * 30;
  }
  return data.timeToElapse;
};

// eslint-disable-next-line no-unused-vars
const inputData = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'weeks',
  timeToElapse: 38,
  reportedCases: 2747,
  population: 66622705,
  totalHospitalBeds: 1380614
};

// calculate normal impact

const impactCalc = (data) => {
  const duration = timeToDays(data);
  const currentlyInfected = data.reportedCases * 10;
  const timeFactor = Math.floor(duration / 3);
  const infectionsByRequestedTime = currentlyInfected * (2 ** timeFactor);
  return {
    currentlyInfected,
    infectionsByRequestedTime
  };
};

// calculate severe impact

const severeImpactCalc = (data) => {
  const duration = timeToDays(data);
  const xcurrentlyInfected = data.reportedCases * 50;
  const timeFactor = Math.floor(duration / 3);
  const xInfectionsByRequestedTime = xcurrentlyInfected * (2 ** timeFactor);
  return {
    xcurrentlyInfected,
    xInfectionsByRequestedTime
  };
};

const covid19ImpactEstimator = (data) => {
  const input = data;
  const impactResult = impactCalc(input);
  const severeImpactResult = severeImpactCalc(input);
  const { currentlyInfected, infectionsByRequestedTime } = impactResult;
  const { xcurrentlyInfected, xInfectionsByRequestedTime } = severeImpactResult;


  const impact = {
    currentlyInfected,
    infectionsByRequestedTime
  };
  const severeImpact = {
    currentlyInfected: xcurrentlyInfected,
    infectionsByRequestedTime: xInfectionsByRequestedTime
  };
  return {
    input,
    impact,
    severeImpact
  };
  /* const output = {
    input,
    impact: impactObj,
    severeImpact: severeImpactObj

  };
  return output; */
};


export default covid19ImpactEstimator;
