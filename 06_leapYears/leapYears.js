const leapYears = function(myDate) {

    if(myDate % 4 === 0)
        {
            if(myDate % 100 === 0)
            {
                if(myDate % 400 === 0)
                {
                    return(true);
                }
                return(false);
            }
            return(true);
        }
    return(false);
};

// Do not edit below this line
module.exports = leapYears;
