/* TODO:
 * - method to add a tag to the html code
 * - method to remove the tag from the html code
 **/
function Ball(x,y) {
	this.X=x;
	this.Y=y;
	this.dX=0;
	this.dY=0;
	this.ballId= "undefined";
	this.tag;
	
	var imagewidth = 33;
	
	Ball.prototype.setSpeed = function(dx,dy) {
		this.dX = dx;
		this.dY = dy;
	}

	Ball.prototype.Update = function() {
		if (((this.X + imagewidth) >= iPortraitWidth) || ((this.X - imagewidth) <=0)){
			this.dX = -this.dX;
		}
		
		if (((this.Y + imagewidth) >= iLandscapeWidth) || ((this.Y - imagewidth) <=0)){
			this.dY = -this.dY;
		}
		
		
		this.X += this.dX;
		this.Y += this.dY;

		// Update the html attributes
		this.tag.style.top = (this.Y -  imagewidth) + 'px';
		this.tag.style.left = (this.X - imagewidth) + 'px';
	}

	Ball.prototype.Show = function() {
		var wrapper = document.getElementById("balls");
		var balls = wrapper.getElementsByTagName("img");

		// create a unique id for the img element
		if (balls.length == 0)
			var ballNr = 1;
		else
			var ballNr = parseInt(balls[balls.length-1].id.substr(4)) + 1;
		this.ballId = "ball" + ballNr;

		var html = '<img id="' + this.ballId + '" src="images/green.png" style="position:absolute; top:' + this.Y + 'px; left:' + this.X + 'px;"/>';
		wrapper.innerHTML += html;
		this.tag = wrapper.childNodes[this.ballId];
	}
	
	Ball.prototype.Hide = function() {
		var wrapper = document.getElementById("balls");
		var tag = wrapper.childNodes[this.ballId];
		wrapper.removeChild(tag);
	}
}

