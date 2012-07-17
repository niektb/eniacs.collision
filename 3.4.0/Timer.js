/* This class takes care of the game loop.
 * It fires an event each specified time interval, 
 * and calls all event handlers.
 * */
function Time() {
	this.offset = (new Date()).getTime(); // ms since 1970
	this.previousFrameTime = 0; // ms from start till previous frame
	this.currentFrameTime = 0; // ms from start till current frame

	// time between current frame and previous frame
	Time.prototype.getElapsedTime = function() {
		return this.currentFrameTime - this.previousFrameTime;
	}

	Time.prototype.toString = function() {
		return "Offset: " + this.offset
			+ "<br>Current frame time: " + this.currentFrameTime
			+ "<br>Elapsed time: " + this.getElapsedTime();
	}
}

function Timer() {
	this.time;
	this.interval = 0; // Time between two frames
	var timeEventId; 
	var eventHandlerList = new Array();

	this.getEventHandlerList = function() {
		return eventHandlerList;
	}

	this.addEventHandler = function(func, self) {
		eventHandlerList.push(function(time){ func.call(self,time); });
		//eventHandlerList.push(func);
	}

	this.start = function(interval) {
		this.interval = interval;
		this.time = new Time();
		var self = this;
		var func = function(){ self.update.apply(self); };
		timeEventId = setInterval(func, this.interval);
	}

	this.stop = function() {
		clearTimeout(timeEventId);
	}

	// Called every event, calls all eventhandlers
	this.update = function() {
		this.time.previousFrameTime = this.time.currentFrameTime;
		this.time.currentFrameTime = (new Date()).getTime() - this.time.offset;

		for(eventHandlerName in eventHandlerList) {
			eventHandlerList[eventHandlerName](this.time);
		}
	}
}

