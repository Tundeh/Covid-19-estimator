// Convert Time Durations to days

const timeToDays = (data) => {
  if (data.periodType === 'days') {
    return data.timeToElapse;
  } else if (data.periodType === 'weeks') {
    return data.timeToElapse * 7;
  } else if (data.periodType === 'months') {
    return data.timeToElapse * 30;
  } else {
    return data.timeToElapse;
  }
};

//calculate normal impact

const impact = (data) => {
  const duration = timeToDays(data);
  const currentlyInfected = data.reportedCases * 10;
  const timeFactor = Math.floor(duration / 3);
  const InfectionsByTime = this.currentlyInfected * 2 ** timeFactor;
  return {
    currentlyInfected,
    InfectionsByTime
  };
};

//calculate severe impact

const severeImpact = (data) => {
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
  const input = data;
  const impact = {};
  const severeImpact = {};
  const impactResult = impact(input);
  const severeImpactResult = severeImpact(input);
  impact.currentlyInfected = impactResult.currentlyInfected;
  impact.infectionsByRequestedTime = impactResult.InfectionsByTime;
  severeImpact.currentlyInfected = severeImpactResult.currentlyInfected;
  severeImpact.infectionsByRequestedTime = severeImpactResult.InfectionsByTime;

  return {
    data: input,
    impact: impact,
    severeImpact: severeImpact
  };
};

export default covid19ImpactEstimator;
