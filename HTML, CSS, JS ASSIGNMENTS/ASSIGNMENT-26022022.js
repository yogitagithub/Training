function btn() {

    var nums = new Array(10);
    for(var i = 0; i < nums.length; i++)
    {
        var input = document.getElementById('num' + i);
        nums[i] = new Number(input.value);
        console.log(nums[i]);
    }

    var max = nums[0];
    var min = nums[0];

    for(var j = 0; j < nums.length; j++)
    {
        if(nums[j] > max)
        {
            max = nums[j];
        }
        if(nums[j] < min)
        {
            min = nums[j];
        }
    }

    console.log(max);
    console.log(min);

    var disp = document.getElementById("display");
    disp.innerHTML = "Max value is : "+max+"<br>"+" Min value is : "+min;
}