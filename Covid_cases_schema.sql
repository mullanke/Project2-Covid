CREATE TABLE national_history (
	date DATE,
	death INT ,
	deathIncrease INT ,
	hospitalezedIncrease INT,
	hospitalizedCurrently INT ,
	hospitalizedCumulative INT,
	negative INT,
	negativeIncrease INT ,
	positive INT ,
	positiveIncrease INT,
	totalTestResults INT,
	totalTestResultsIncrease INT);



CREATE TABLE michigan (
	date DATE,
	state VARCHAR ,
	death INT ,
	deathConfirmed INT ,
	deathIncrease INT,
	hospitalized INT ,
	hospitalizedCurrently INT,
	positive INT,
	positiveIncrease INT,
	recovered INT,
	totalTestResults INT,
	totalTestResultsIncrease INT);



CREATE TABLE state_history (
	date DATE,
	state VARCHAR ,
	death INT ,
	deathConfirmed INT ,
	deathIncrease INT,
	hospitalized INT ,
	hospitalizedCurrently INT,
	positive INT,
	positiveIncrease INT,
	recovered INT,
	totalTestResults INT,
	totalTestResultsIncrease INT);
