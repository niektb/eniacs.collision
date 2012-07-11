function Timer() {
	this.TimeOffset = 0;
	this.PreviousFrameTime = 0;
	this.CurrentFrameTime = 0;
	this.Interval = 0;
	this.TimeEventId;
	this.EventHandlerList = new Array();

	Timer.prototype.AddEventHandler = function(EventHandler) {
		this.EventHandlerList.push(EventHandler);
	}

	Timer.prototype.Start = function(interval) {
		this.Interval = interval;
		this.TimeOffset = (new Date()).getTime();
		this.PreviousFrameTime = 0;
		this.CurrentFrameTime = 0;
		var self = this;
		var func = function(){ self.Update.apply(self); };
		this.TimeEventId = setInterval(func ,this.Interval);
	}

	Timer.prototype.Stop = function() {
		clearTimeout(this.TimeEventId);
	}

	Timer.prototype.getElapsedTime = function() {
		return this.CurrentFrameTime - this.PreviousFrameTime;
	}

	Timer.prototype.Update = function() {
		this.PreviousFrameTime = this.CurrentFrameTime;
		this.CurrentFrameTime = (new Date()).getTime() - this.TimeOffset;
		//x$("#txtInfo").html(String(this.ToString()));
		for(EventHandlerName in this.EventHandlerList) {
			this.EventHandlerList[EventHandlerName](this);
		}
	}

	Timer.prototype.ToString = function() {
		return "Offset: " + this.TimeOffset
			+ "<br>Current frame time: " + this.CurrentFrameTime
			+ "<br>Elapsed time: " + this.getElapsedTime();
	}
}

