(function(){
  var node = document.getElementsByClassName("screw-it").item(0);
  var iii = 0;
  var message = ["Screw It!"];

  var toggleRandomNodeStyle = function(){
    var item = node.cloneNode(true),
        theta = Math.round(Math.random()*360),
        cos = Math.cos(theta),
        sin = Math.sin(theta),
        a = Math.round(Math.random() * 100) / 10,
        x = Math.round(Math.random() * 500),
        y = Math.round(Math.random() * 500);
      
    item.style.display = "block";
    item.className = Math.random() > 0.5 ? "screw-it horiz" : "screw-it vert";
    item.style.top = "0";
    item.style.left = "0";
    item.style.transform = "matrix(" +
                                  (a * cos) + ", " +
                                  (a * sin) + ", " +
                                  ((-1) * a * sin) + ", " +
                                  (a * cos) + ", " +
                                  (a * x * cos - a * y * sin) + ", " +
                                  (a * x * sin - a * y * cos) + ")";

    node.parentNode.appendChild(item);
  };

  var clickHandle = function(){
    alert(message[iii]);

    iii = (iii === message.length - 1 ? 0 : iii + 1);


  }

  window.setInterval(toggleRandomNodeStyle, 100);

  window.onclick = clickHandle;

}());