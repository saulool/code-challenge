import moment from 'moment';

HomeController.$inject = ['$interval'];

export default function HomeController($interval) {
	const homeVm = this;
	const noonTime = moment('12:00:00', 'HH:mm:ss');
	homeVm.haveNoonPassed = checkIfNoonPassed();
	homeVm.startCountdown = startCountdown;
	startCountdown();

	function applyCountdown(){
		homeVm.hoursLeft = noonTime.diff(moment(), 'hours');
		homeVm.minutesLeft = noonTime.diff(moment(), 'minutes') - (noonTime.diff(moment(), 'hours') * 60);
		homeVm.secondsLeft = noonTime.diff(moment(), 'seconds') - (noonTime.diff(moment(), 'minutes') * 60);
	}

	function startCountdown(){
		if(!homeVm.haveNoonPassed){
			applyCountdown();

			let countdown = $interval(() => {	
				applyCountdown();

				homeVm.haveNoonPassed = checkIfNoonPassed();

				if(homeVm.haveNoonPassed) $interval.cancel(countdown);
			}, 1000);
		}
	}

	function checkIfNoonPassed(){
		return noonTime.diff(moment()) < 0;
	}
}