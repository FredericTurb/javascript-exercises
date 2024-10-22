function leapYears(myDate)
{
    

    if(myDate % 4 === 0)
    {
        if(myDate % 100 === 0)
        {
            if(myDate % 400 === 0)
            {
                return("is");
            }
            return("not");
        }
        return("is");
    }
    else
    {
        return("not");
    }
}
let myResult = leapYears(1997);
console.log(myResult);



// BY 4 = YES
// BY 100 = NO... UNLESS BY 400. 

