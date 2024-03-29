// Default Options
let gpsStatus = "RTX FIX";
let gpsAge =  1;
let gpsnStats =  12;
let gpsIMU = 1;
let gpsStuurhoek = 3;

function loadGPS(){
	const elementStatus = document.querySelector('.gps-content-status');
	const elementAge = document.querySelector('.gps-content-age');
	const elementNstats = document.querySelector('.gps-content-nstats');
	const elementImu = document.querySelector('.gps-content-imu');
	const elementStuurhoek = document.querySelector('.gps-content-stuurhoek');

	// show content
	elementStatus.innerHTML = gpsStatus;
	elementAge.innerHTML = gpsAge;
	elementNstats.innerHTML = gpsnStats;
	elementImu.innerHTML = gpsIMU + '°';
	elementStuurhoek.innerHTML = gpsStuurhoek + '°';
}

function updateStatus(status){
	gpsStatus = status;
	loadGPS();
}

function updateAge(age){
	gpsAge = age;
	loadGPS();
}

function updatenStats(nStats){
	gpsnStats = nStats;
	loadGPS();
}

function updateIMU(imu){
	gpsIMU = imu;
	loadGPS();
}

function updateStuurhoek(stuurhoek){
	gpsStuurhoek = stuurhoek;
	loadGPS();
}
