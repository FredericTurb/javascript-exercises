

function removeFromArray(array, ...args)
{
    let howMany = args.length;
    let cleanArray = [];

    cleanArray = array;

    let count = 0;

    for(let i = 0; i < array.length; i++)
    {
        for(let j = 0; j < args.length; j++)
        {
            if(array[i] === args[j])
            {
                array.splice(i, 1);
                i--;
            }
        }
    }
    console.log(array);
}

removeFromArray([1, 2, 3, 4], 3, 2);   // RESULT = [1, 4]

//_____________
// [1, 2, 3, 4]
// [2, 4]

// SPLICE = (WHERE REMOVE, HOW MANY)
