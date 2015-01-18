describe('A bowling game', function() {

	var game;

	beforeEach(function() {
		game = new Game();
	});

	function knockManyTimes(pins, frameCount) {
		for (var i = 0; i < frameCount; ++i) {
			game.knock(pins);
		}
	}

	function throwStrike(n) {
		for (var i = 0;i < n; ++i) {
			game.knock(10);
		}
	}

	function throwSpare(n) {
		for (var i = 0; i < n; ++i) {
			game.knock(5);
			game.knock(5);
		}
	}

	it('should score 0 for a gutter game (20 throws with 0 knocked down pin)', function() {
		knockManyTimes(0, 20);
		expect(game.score()).toBe(0);
	});

	it('should score 20 when only 1 pin is knocked down at each throw', function() {
		knockManyTimes(1, 20);
		expect(game.score()).toBe(20);
	});

	it('should score 54 with a spare at first frame, then 5 knocked down pins and 17 times 2 knocked down pins', function() {
		throwSpare(1);
		game.knock(5);
		knockManyTimes(2, 17);
		expect(game.score()).toBe(54);
	});

	it('should score 70 with a strike at first frame and then 18 times 3 knocked down pins', function() {
		throwStrike(1);
		knockManyTimes(3, 18);
		expect(game.score()).toBe(70);
	});

	it('should score 86 with 18 times 4 knocked down pins, a spare at last frame and 4 knocked down pins for last throw', function() {
		knockManyTimes(4, 18);
		throwSpare(1);
		game.knock(4);
		expect(game.score()).toBe(86);
	});

	it('should score 30 with 18 times 1 knocked down pin, a strike at last frame and twice 1 knocked down pin', function() {
		knockManyTimes(1, 18);
		throwStrike(1);
		knockManyTimes(1, 2);
		expect(game.score()).toBe(30);
	});

	it('should score 150 with a spare at each frame and 5 knocked down pins for last throw', function() {
		throwSpare(10);
		game.knock(5);
		expect(game.score()).toBe(150);
	});

	it('should score 300 for a perfect game (12 strikes)', function() {
		throwStrike(12);
		expect(game.score()).toBe(300);
	});

});