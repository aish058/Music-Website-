function run() {
  function reqListener() {
    var myObj = JSON.parse(this.responseText);

    var a = myObj["track"];
    document.getElementById("id4").innerHTML = " ";
    /* document.getElementById("id4").style.color = " white";
    documet.getElementById("id4").style.fontFamily = "Alex Brush";*/
    var o = a[0];

    document.getElementById("id4").innerHTML =
      "Genre : " +
      o.strGenre +
      "<br/>" +
      "Album : " +
      o.strAlbum +
      "<br/>" +
      "Youtube Video Link : " +
      o.strMusicVid +
      "<br/><br/>" +
      "Something about the song : " +
      "<br/>" +
      o.strDescriptionEN;
  }

  var var1 = document.getElementById("artist1").value;
  var var2 = document.getElementById("song1").value;

  var var4 = `http://www.theaudiodb.com/api/v1/json/195003/searchtrack.php?s=${var1}&t=${var2}`;

  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", var4);
  oReq.send();
}

function display() {
  function lyrics() {
    var a = JSON.parse(this.responseText);
    console.log(a);
    var t = a.lyrics;
    var f = "";
    var c = 0;
    document.getElementById("id2").style.fontFamily =
      "Annie Use Your Telescope";
    for (let i = 0; i < t.length; i++) {
      /*if(s[i]==" ")
             {
                 t+=" ";
                 t+=" ";
             }*/

      if (t[i] == ",") {
        f += "<br/>";
      } else {
        f += t[i];
      }

      if (t[i] == " ") {
        c++;
      }
      if (c == 10) {
        f += "<br/>";
        c = 0;
      }
    }
    document.getElementById("id1").innerHTML = "Lyrics" + "<br/>";
    document.getElementById("id2").innerHTML =
      "Name of the Artist:   " +
      var1 +
      "<br/>" +
      "Name of the Song :   " +
      var2 +
      "<br/><br/>" +
      f;
    run();
  }
  var var1 = document.getElementById("artist1").value;
  var var2 = document.getElementById("song1").value;

  var yReq = new XMLHttpRequest();
  yReq.addEventListener("load", lyrics);
  var5 = `https://api.lyrics.ovh/v1/${var1}/${var2}`;
  yReq.open("GET", var5);
  yReq.send();
}
function topTen(s) {
  function reqListener() {
    document.getElementById("id2").innerHTML = " ";
    document.getElementById("id1").innerHTML = " ";
    document.getElementById("id4").innerHTML = " ";
    var xyz = JSON.parse(this.responseText);

    console.log(xyz);
    var ctr = 1;
    for (var i = 0; i < 10; i++) {
      var a = xyz["track"];
      var o = a[i];
      if (o.strMusicVid != null && o.strDescriptionEN != null) {
        document.getElementById("id2").innerHTML =
          document.getElementById("id2").innerHTML +
          (i + 1) +
          ")" +
          " " +
          "Track : " +
          o.strTrack +
          "<br/>" +
          "Album : " +
          o.strAlbum +
          "<br/>" +
          "Genre : " +
          o.strGenre +
          "<br/>" +
          "Youtube Video Link : " +
          o.strMusicVid +
          "<br/><br/>" +
          " Description :" +
          "<br/>" +
          o.strDescriptionEN +
          "<br/><br/><br/>";
      }
    }
  }
  /* var var2=document.getElementById()
  var var1=document.getElementById("artist").value;*/

  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open(
    "GET",
    `http://www.theaudiodb.com/api/v1/json/195003/track-top10.php?s=${s}`
  );
  oReq.send();
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function display1() {
  function reqListener() {
    var i;
    document.getElementById("id2").innerHTML = " ";
    document.getElementById("id1").innerHTML = " ";
    document.getElementById("id4").innerHTML = " ";
    document.getElementById("id2").innerHTML =
      "TOP SONGS TO SUIT YOUR MOOD " + "<br/><br/>";
    var myObj = JSON.parse(this.responseText);
    /*console.log(myObj);*/
    var y = myObj["items"];
    for (i = 0; i <= 4; i++) {
      var z = y[i].id.videoId;
      var v1 = "https://www.youtube.com/watch?v=";
      var v2 = v1 + z;
      //console.log(v2);

      document.getElementById("id2").innerHTML =
        document.getElementById("id2").innerHTML + "<br/>" + v2 + "<br/>";
    }
  }

  var var1 = "mood ";
  var var2 = document.getElementById("mood1").value;
  var var3 = " english songs";
  var var4 = var1 + var2 + var3;
  // console.log(var4);

  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open(
    "GET",
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${var4}&type=video&key=AIzaSyAEWoUxRn_8Xh3SbZSmnBOZXP3rGZGZdvU`
  );
  oReq.send();
}
