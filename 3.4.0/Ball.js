/* TODO:
 * - An id generator
 * - method to add a tag to the html code
 * - method to remove the tag from the html code
 **/
function Ball() {
	this.X=0;
	this.Y=0;
	this.dX=0;
	this.dY=0;

	Ball.prototype.Update = function() {
		X = X + dX;
		Y = Y + dY;
	}

	Ball.prototype.AddToHTML = function() {
		var wrapper = x$("#balls");
    	wrapper.html('<img id="ball1" src="images/green.png" style="position:absolute; top:330px; left:10px;" />');
			
	}
}
