if (typeof process !== 'undefined' && process.title == 'node') {
	var assert = require("assert")
	var s = require("should")
}

//
//describe('test', function(){
//  describe('#test()', function(){
//    it('should ', function(){
//      var name = { name: "Alfred" };
//      var x = Object.create(name);
//      x.name.should.equal("Alfred");
//      var director = {};
//      director.name = 'Woody Allen';
//      director['year-of-birth'] = 1935;
//
//
//    })
//  })
//});
//
//
//

describe('When having a global value=17', function() {

	beforeEach(function() {
		global.value = 17;
	});

	describe('When defining a function "inc" which increments "this.value"', function() {
		var inc = function() {
			this.value += 1;
		};

		describe('When calling "inc" as a function', function() {

			beforeEach(function() {
				inc();
			});

			it('should increase the global value to 18', function() {
				global.value.should.equal(18);
			});
		});


		describe('When having a "counter" object with value 4 ', function() {
			var counter;

			beforeEach(function() {
				counter = {
					value: 4,
				};
			});

			describe('When calling "inc" as a method of "counter"', function() {
				beforeEach(function() {
					counter.increment = inc;
					counter.increment();
				});

				it('should increase counter.value to 5', function() {
					counter.value.should.equal(5);
				});
			});
			describe('When calling "inc" inside a method of "counter"', function() {
				beforeEach(function() {
					counter.increment = function() {
						return inc();
					};

					counter.increment();
				});

				it('should not increase counter.value', function() {
					counter.value.should.equal(4);
				});
				it('should increase the global value to 18', function() {
					global.value.should.equal(18);
				});
			});
		});
		describe('When calling "inc" as a constuctor with inc.prototype.value=101', function() {
			var inc1, inc2;

			beforeEach(function() {
				inc.prototype.value = 101;

				inc1 = new inc();
				inc2 = new inc();
			});
			
			it('should increase inc1.value to 102', function() {
				inc1.value.should.equal(102);
			});
			it('should increase inc2.value to 102', function() {
				inc2.value.should.equal(102);
			});
			it('should not increase the prototype value', function() {
				inc.prototype.value.should.equal(101);
			});
			it('should not increase the global value', function() {
				global.value.should.equal(17);
			});
		});
		describe('When applying "inc" to an object with value 0', function() {
			var counter;
			
			beforeEach(function() {
				counter = {
					value: 0
				};
				
				inc.apply(counter, null);
			});
			
			it('should increase counter.value to 1', function() {
				counter.value.should.equal(1);
			});	
		});
	});
});
//
//describe('closure test', function() {
//  it('should ', function() {
//
//
//
//
//      var graph = {};
//      var loadGraph = function (callback) {
//        var g = { name: "Hallo" };
//        callback(g);
//      };
//
//      loadGraph(function (g) {
//          graph = g;
//          //console.log(graph);
//      });
//      graph.name.should.equal("Hallo");
//  });
//});
//
//

//describe('counter', function() {
//    var inc = function () {
//        return this.value += 1;
//    };
//
//    global.value = 0;
//    it('should have global value 0', function(){
//        value.should.equal(0);
//    });
//
//    var counter = {
//      value: 9
//    };
//
//    it('should have counter.value 9', function() {
//      counter.value.should.equal(9);
//    });
//
//
//    describe('#increment()', function() {
//
//        counter.increment = function () {
//            helper = inc;
//            helper();
//        };
//
//        it('should not increment counter.value', function(){
//            counter.increment();
//            counter.value.should.equal(9);
//        });
//        it('should increment global.value', function(){
//            value.should.equal(1);
//        });
//    })
//});
