//show more

var n = 2;
var tiles = [{"src":"tg2.jpg", "title":"Tribute Page", "link":"tribute.html"},
             {"src":"from.jpeg", "title":"Form", "link":"ieee"}];

button = document.getElementById('btn');
grid = document.getElementById('grid');
s = 0;

function show() {
  for(var i = 0;i<n;i++)
  {
    var tile = document.createElement('a');
    tile.id = `tile${i}`;
    tile.target = '_blank'
    tile.className = 'project-tile';
    tile.href = tiles[i]["link"];
    var image = document.createElement('img');
    image.className = 'project-image';
    image.src = tiles[i]["src"];
    image.alt = 'project';
    tile.appendChild(image);
    var p = document.createElement('p');
    p.className = 'project-title';
    p.innerText = tiles[i]["title"];
    tile.appendChild(p);
    grid.appendChild(tile);    
  }
  
  
  
  button.innerText = "Less";
  var i = document.createElement('i');
  i.className = 'fas fa-chevron-up';
  button.appendChild(i);
  s = 1;
}

function hide() {
  for(var i = 0;i<n;i++)
  {
    var tile = document.getElementById(`tile${i}`);
    tile.remove();
  }
  button.innerText = "Show all";
  var i = document.createElement('i');
  i.className = 'fas fa-chevron-down';
  button.appendChild(i);
  s = 0;
}


button.addEventListener("click", (event) => { if(s==0){show();} else{hide();}});

