//to cause delay 
export async function MakeDelay(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

//initial delay
export var delay = 300;

//function to change delay
export const changeDelay = (val) => {
  console.log(val);
  delay = val;
};

// disable all buttons
export const disableAllButtons = (val) => {
    document.getElementById('rangeSlider').disabled = val;
    var btns = document.querySelectorAll('.btn');
    for(var i=0;i<btns.length;i++)
    {
        btns[i].disabled = val;
    }
}