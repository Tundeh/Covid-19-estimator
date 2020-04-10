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

// calculate normal impact

const impactCalc = (data) => {
  const duration = timeToDays(data);
  const currentlyInfected = data.reportedCases * 10;
  const timeFactor = Math.floor(duration / 3);
  const InfectionsByTime = this.currentlyInfected * 2 ** timeFactor;
  return {
    currentlyInfected,
    InfectionsByTime
  };
};

// calculate severe impact

const severeImpactCalc = (data) => {
  const duration = timeToDays(data);
  const currentlyInfected = data.reportedCases * 50;
  const timeFactor = Math.floor(duration / 3);
  const InfectionsByTime = this.currentlyInfected * (2 ** timeFactor);
  return {
    currentlyInfected,
    InfectionsByTime
  };
};

const covid19ImpactEstimator = (data) => {
  const input = JSON.parse(data);
  const impactObj = {};
  const severeImpactObj = {};
  const impactResult = impactCalc(input);
  const severeImpactResult = severeImpactCalc(input);
  impactObj.currentlyInfected = impactResult.currentlyInfected;
  impactObj.infectionsByRequestedTime = impactResult.InfectionsByTime;
  severeImpactObj.currentlyInfected = severeImpactResult.currentlyInfected;
  severeImpactObj.infectionsByRequestedTime = severeImpactResult.InfectionsByTime;
  return {
    data: input,
    impact: impactObj,
    severeImpact: severeImpactObj
  };
};


export default covid19ImpactEstimator;
