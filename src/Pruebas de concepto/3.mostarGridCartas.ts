/*

HTML:
<div class="principal">
        <div class="caja">
          <img src="" alt="" id="oculto">
        </div>
        <div class="caja">
          <img src="" alt="" id="oculto">
        </div>
        <div class="caja">
          <img src="" alt="" id="oculto">
        </div>
        <div class="caja">
          <img src="" alt="" id="oculto">
        </div>
        <div class="caja">
          <img src="" alt="" id="oculto">
        </div>
        <div class="caja">
          <img src="" alt="" id="oculto">
        </div>
        <div class="caja">
          <img src="" alt="" id="oculto">
        </div>
        <div class="caja">
          <img src="" alt="" id="oculto">
        </div>
        <div class="caja">
          <img src="" alt="" id="oculto">
        </div>
        <div class="caja">
          <img src="" alt="" id="oculto">
        </div>
        <div class="caja">
          <img src="" alt="" id="oculto">
        </div>
        <div class="caja">
          <img src="" alt="" id="oculto">
        </div>
      </div>
    </div>

CSS:
.principal {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: black;
  border-radius: 20px;
  padding: 30px;
}

.caja {
  margin: 10px;
}

img {
  display: flex;
  height: 150px;
  width: 150px;
  border: solid 1px;
  border-radius: 20px;
  background: linear-gradient(to right top, #05193799, #004d7a99, #00879399, #00bf7299, #a8eb1299);
}

img:hover {
  background-color: red;
}
*/