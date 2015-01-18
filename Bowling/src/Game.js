function Game() {

	var frames = [];

	this.knock = function(pins) {
		frames.push(pins);
	}

	this.score = function() {
		var total = 0;
		for (var throwCount = 0; throwCount < frames.length; throwCount++) {
			total += frames[throwCount];

			if (isStrike(throwCount) && isNotLastStrike(throwCount)) {
				total += strikeBonus(throwCount);
			} else if (isSpare(throwCount) && isNotLastSpare(throwCount)) {
				total += spareBonus(throwCount);
			}
		}
		return total;
	}

	function isStrike(throwCount) {
		return frames[throwCount] === 10;
	}

	function isSpare(throwCount) {
		return throwCount % 2 !== 0 && frames[throwCount - 1] + frames[throwCount] === 10;
	}

	function isNotLastStrike(throwCount) {
		return throwCount < frames.length - 3;
	}

	function isNotLastSpare(throwCount) {
		return throwCount < frames.length - 2;
	}

	function strikeBonus(throwCount) {
		return frames[throwCount + 1] + frames[throwCount + 2];
	}

	function spareBonus(throwCount) {
		return frames[throwCount + 1];
	}
}