<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="stylus">

@font-face {
  font-family: 'icomoon';
  src:  url('./assets/font/fonts/icomoon.eot?esabds');
  src:  url('./assets/font/fonts/icomoon.eot?esabds#iefix') format('embedded-opentype'),
    url('./assets/font/fonts/icomoon.ttf?esabds') format('truetype'),
    url('./assets/font/fonts/icomoon.woff?esabds') format('woff'),
    url('./assets/font/fonts/icomoon.svg?esabds#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  // vertical-align: middle;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-buy .path1:before {
  content: "\e900";
  color: rgb(0, 0, 0);
}
.icon-buy .path2:before {
  content: "\e901";
  margin-left: -1.0556640625em;
  color: rgb(0, 0, 0);
}
.icon-buy .path3:before {
  content: "\e902";
  margin-left: -1.0556640625em;
  color: rgb(255, 255, 255);
}
.icon-classify .path1:before {
  content: "\e903";
  color: rgb(0, 0, 0);
}
.icon-classify .path2:before {
  content: "\e904";
  margin-left: -1.0556640625em;
  color: rgb(0, 0, 0);
}
.icon-classify .path3:before {
  content: "\e905";
  margin-left: -1.0556640625em;
  color: rgb(255, 255, 255);
}
.icon-collect .path1:before {
  content: "\e906";
  color: rgb(255, 247, 215);
}
.icon-collect .path2:before {
  content: "\e907";
  margin-left: -1.044921875em;
  color: rgb(255, 233, 143);
}
.icon-contact .path1:before {
  content: "\e908";
  color: rgb(0, 0, 0);
}
.icon-contact .path2:before {
  content: "\e909";
  margin-left: -1.0556640625em;
  color: rgb(255, 255, 255);
}
.icon-contact .path3:before {
  content: "\e90a";
  margin-left: -1.0556640625em;
  color: rgb(255, 255, 255);
}
.icon-contact .path4:before {
  content: "\e90b";
  margin-left: -1.0556640625em;
  color: rgb(255, 255, 255);
}
.icon-home:before {
  content: "\e90c";
}
.icon-mark .path1:before {
  content: "\e90d";
  color: rgb(255, 147, 67);
}
.icon-mark .path2:before {
  content: "\e90e";
  margin-left: -1em;
  color: rgb(255, 140, 61);
}
.icon-mark .path3:before {
  content: "\e90f";
  margin-left: -1em;
  color: rgb(254, 130, 53);
}
.icon-mark .path4:before {
  content: "\e910";
  margin-left: -1em;
  color: rgb(254, 113, 39);
}
.icon-mark .path5:before {
  content: "\e911";
  margin-left: -1em;
  color: rgb(255, 220, 197);
}
.icon-mark .path6:before {
  content: "\e912";
  margin-left: -1em;
  color: rgb(255, 255, 255);
}
.icon-navigation:before {
  content: "\e913";
}
.icon-navigation-big:before {
  content: "\e914";
}
.icon-Promotion .path1:before {
  content: "\e915";
  color: rgb(149, 239, 194);
}
.icon-Promotion .path2:before {
  content: "\e916";
  margin-left: -1em;
  color: rgb(136, 237, 191);
}
.icon-Promotion .path3:before {
  content: "\e917";
  margin-left: -1em;
  color: rgb(121, 232, 184);
}
.icon-Promotion .path4:before {
  content: "\e918";
  margin-left: -1em;
  color: rgb(105, 226, 179);
}
.icon-Promotion .path5:before {
  content: "\e919";
  margin-left: -1em;
  color: rgb(215, 255, 233);
}
.icon-Promotion .path6:before {
  content: "\e91a";
  margin-left: -1em;
  color: rgb(255, 255, 255);
}
.icon-Promotion .path7:before {
  content: "\e91b";
  margin-left: -1em;
  color: rgb(121, 232, 184);
}
.icon-Promotion .path8:before {
  content: "\e91c";
  margin-left: -1em;
  color: rgb(121, 232, 184);
}
.icon-search:before {
  content: "\e91d";
}
.icon-searchIcom:before {
  content: "\e91e";
  color: #ccc;
}
.icon-shop .path1:before {
  content: "\e91f";
  color: rgb(0, 0, 0);
}
.icon-shop .path2:before {
  content: "\e920";
  margin-left: -1.0556640625em;
  color: rgb(0, 0, 0);
}
.icon-shop .path3:before {
  content: "\e921";
  margin-left: -1.0556640625em;
  color: rgb(255, 255, 255);
}
.icon-shop .path4:before {
  content: "\e922";
  margin-left: -1.0556640625em;
  color: rgb(255, 255, 255);
}

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif,pingf
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  // margin-top 60px
.more-data
.no-more-data
  padding 50px 0
  font-size 28px
  color #cccccc
</style>
