//Sleep
function sleep(ms)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

//Animation Slider
var sl = 3100-document.getElementById('slider').value;

//bars class
var bars = document.getElementById('bars');

// total number of bars
var n;
n = 0;

//Randomize function
function randomize() {
  bar = document.getElementsByClassName('bar');
  let currentIndex = bar.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

      var tempheight = bar[currentIndex].style.height;
      var tempname = bar[currentIndex].innerText;
      bar[currentIndex].style.height = bar[randomIndex].style.height;
      bar[currentIndex].innerText = bar[randomIndex].innerText;
      bar[randomIndex].style.height = tempheight;
      bar[randomIndex].innerText = tempname;
  }
}

//Set bar height and number
function setBar()
{
  var bar = document.getElementsByClassName('bar');
  for(var i = 0;i<n;i++)
  {
    var h = (n-i)*80/n;
    bar[i].style.height = `${h}%`;
    bar[i].innerText = `${n-i}`;
  }
}

//changes number of bars on screen
function change()
{
  let child = document.getElementsByClassName('bar');
  for(var i = n-1;i>=0;i--)
  {
    bars.removeChild(child[i]);
  }
  n = document.getElementById('input').value;
  for(var i = 0;i<n;i++)
  {
    var div = document.createElement('div');
    div.className = 'bar';
    bars.appendChild(div);
  }

  setBar();
}

//mark current iteration
function setColor(i)
{
  var bar = document.getElementsByClassName('bar');
  bar[i].style.backgroundColor = 'rgb(215, 68, 42)';
  console.log('set');
}

function deColor(i)
{
  var bar = document.getElementsByClassName('bar');
  bar[i].style.backgroundColor = "";
  console.log('de');
}


//Selection Sort
async function selSort()
{
  document.getElementById("input").disabled = true;
  document.getElementById("button").disabled = true;
  document.getElementById("ssort").disabled = true;
  document.getElementById("bsort").disabled = true;
  document.getElementById('random').disabled = true;
  var bar = document.getElementsByClassName('bar');

  for (var i=0;i<n;i++)
  {
    var min = i;
    setColor(min);
    for(var j = i+1;j<n;j++)
    {
      var h = parseInt(bar[j].innerText)
      var m = parseInt(bar[min].innerText)
      if(j>0 && (j-1)!=min)
      {
        deColor(j-1);
        setColor(j);
      }

      if(m>h)
      {
        deColor(min);
        min = j;
        setColor(min);
      }
      await sleep(sl/2);
    }

    var tempheight = bar[i].style.height;
    var tempname = bar[i].innerText;
    bar[i].style.height = bar[min].style.height;
    bar[i].innerText = bar[min].innerText;
    bar[min].style.height = tempheight;
    bar[min].innerText = tempname;

    deColor(j-1);
    deColor(min);
    await sleep(sl);

  }

  document.getElementById("input").disabled = false;
  document.getElementById("button").disabled = false;
  document.getElementById("ssort").disabled = false;
  document.getElementById("bsort").disabled = false;
  document.getElementById('random').disabled = false;
}

//Bubble sort
async function bubSort()
{
  document.getElementById("input").disabled = true;
  document.getElementById("button").disabled = true;
  document.getElementById("ssort").disabled = true;
  document.getElementById("bsort").disabled = true;
  var bar = document.getElementsByClassName('bar');

  for (var i=0;i<n;i++)
  {

    
    for(var j = 0;j<n-i-1;j++)
    {
      var l = parseInt(bar[j].innerText);
      var r = parseInt(bar[j+1].innerText);

      setColor(j);
      setColor(j+1);
      if(l>r)
      {
        var tempheight = bar[j].style.height;
        var tempname = bar[j].innerText;
        bar[j].style.height = bar[j+1].style.height;
        bar[j].innerText = bar[j+1].innerText;
        bar[j+1].style.height = tempheight;
        bar[j+1].innerText = tempname;
       
      }
      
      await sleep(sl);
      deColor(j);
      deColor(j+1);
    }
 

  }

  document.getElementById("input").disabled = false;
  document.getElementById("button").disabled = false;
  document.getElementById("ssort").disabled = false;
  document.getElementById("bsort").disabled = false;
}

/*//Merge
async function merge(l,m,r)
{
  var bar = document.getElementsByClassName('bar');

    var n1 = m - l + 1;
    var n2 = r - m;

    var L = new Array(n1);
    var R = new Array(n2);
    var Lh = new Array(n1);
    var Rh = new Array(n2);

    for (var i = 0; i < n1; i++)
    {    L[i] = parseInt(bar[l + i].innerText);
         Lh[i] = bar[l + i].style.height;
    }
    for (var j = 0; j < n2; j++)
    {    R[j] = parseInt(bar[m + 1 + j].innerText);
        Rh[j] = bar[m + 1 + j].style.height;
    }

    var i = 0;

    var j = 0;

    var k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            bar[k].innerText = L[i];
            bar[k].style.height = Lh[i];
            i++;
        }
        else {
          bar[k].innerText = R[j];
          bar[k].style.height = Rh[j];
            j++;
        }
        k++;

    }

    while (i < n1) {
      bar[k].innerText = L[i];
      bar[k].style.height = Lh[i];
        i++;
        k++;

    }

    while (j < n2) {
      bar[k].innerText = R[j];
      bar[k].style.height = Rh[j];
        j++;
        k++;

    }
    
    
    console.log(11);
}

//Merge sort
async function merSort(l,r)
{
  if(l>=r){
  
  await sleep(5000);
        return;
    }
    var m =l+ parseInt((r-l)/2);
    merSort(l,m);
    merSort(m+1,r);
    merge(l,m,r);
    
}*/


//Event listeners
document.getElementById('input').addEventListener("keypress", (event)=> { if (event.keyCode === 13) { event.preventDefault(); change(); } });
document.getElementById('button').addEventListener("click",change);
document.getElementById('random').addEventListener("click",randomize);
document.getElementById('ssort').addEventListener("click",selSort);
document.getElementById('bsort').addEventListener("click",bubSort);
/*document.getElementById('msort').addEventListener("click",function(){merSort(0,n-1);});*/
document.getElementById('slider').oninput = function(){ sl = 3000-this.value; }

//running
console.log("running");
