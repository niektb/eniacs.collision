/*  This is a general javascript library for miscellaneous useful functions */

//This method is used to debug the application
//Change the iDebugLevel to turn it on/off
var iDebugLevel = 1;
var dbAlert = function(message,errorLevel)
{
    try
    {
        if (errorLevel == null)
        {
            alert(message);
        }
        else
        {
            if (errorLevel <= iDebugLevel)
            {
                alert(message);
            }
        }
    }
    catch(e) {}
};

var IsNumeric = function(val) {

    if (isNaN(parseFloat(val))) 
    {
          return false;
    }
    return true
};

