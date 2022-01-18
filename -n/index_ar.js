function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (False, g, w) {var pug_indent = [];
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
pug_mixins["icon-list"] = pug_interp = function(listIcone,listName,idList){
var block = (this && this.block), attributes = (this && this.attributes) || {};
// iterate listIcone
;(function(){
  var $$obj = listIcone;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var element = $$obj[pug_index0];
if (x == False) {
var x = 0
}
pug_html = pug_html + "\u003Ca" + (pug_attr("href", "#" + idList[x], true, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli\u003E\u003Ci" + (pug_attr("class", pug_classes([element], [true]), false, true)+pug_attr("fa-fw", true, true, true)) + "\u003E\u003C\u002Fi\u003E " + (pug_escape(null == (pug_interp = listName[x]) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Fa\u003E";
var x = x + 1
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var element = $$obj[pug_index0];
if (x == False) {
var x = 0
}
pug_html = pug_html + "\u003Ca" + (pug_attr("href", "#" + idList[x], true, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli\u003E\u003Ci" + (pug_attr("class", pug_classes([element], [true]), false, true)+pug_attr("fa-fw", true, true, true)) + "\u003E\u003C\u002Fi\u003E " + (pug_escape(null == (pug_interp = listName[x]) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Fa\u003E";
var x = x + 1
    }
  }
}).call(this);

};
pug_mixins["item-article"] = pug_interp = function(imagepath,imagetab,h3,p){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"image\"\u003E \u003Cimg" + (pug_attr("src", imagepath, true, true)+pug_attr("alt", imagetab, true, true)) + "\u003E\u003C\u002Fdiv\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"text\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3\u003E" + (pug_escape(null == (pug_interp = h3) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp\u003E" + (pug_escape(null == (pug_interp = p) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"more\"\u003E\u003Ca\u003ERead More\u003C\u002Fa\u003E\u003Ci class=\"fas fa-long-arrow-alt-right\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["testimonials-item"] = pug_interp = function(i,h3,p1,star,p2){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["item" + i], [true]), false, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"content\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3\u003E" + (pug_escape(null == (pug_interp = h3) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp\u003E" + (pug_escape(null == (pug_interp = p1) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"icon\"\u003E ";
for(w = 1 ; w <= star; w++)
{
pug_html = pug_html + "\u003Ci class=\"filled-icon fas fa-star\"\u003E\u003C\u002Fi\u003E";
}
for(w = 1 ; w <= (5 - star) ; w++)
{
pug_html = pug_html + "\u003Ci class=\"far fa-star\"\u003E\u003C\u002Fi\u003E";
}
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp\u003E" + (pug_escape(null == (pug_interp = p2) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_html = pug_html + "\n\u003Chtml lang=\"en\"\u003E\n  \u003Chead\u003E\n    \u003Cmeta charset=\"UTF-8\"\u003E\n    \u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"\u003E\n    \u003Cmeta name=\"description\" content=\"this page for zero template\"\u003E\n    \u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\n    \u003Ctitle\u003EAhmed El-Mondy\u003C\u002Ftitle\u003E\n    \u003Clink rel=\"stylesheet\" href=\"css\u002Fall.min.css\"\u003E\n    \u003Clink rel=\"stylesheet\" href=\"css\u002Fnormalize.css\"\u003E\n    \u003Clink rel=\"stylesheet\" href=\"css\u002Fresetme.css\"\u003E\n    \u003Clink rel=\"stylesheet\" href=\"css\u002Fstyle.css\"\u003E\n    \u003Clink rel=\"shortcut icon\" href=\"favicon\u002Ffavicon2.ico\" type=\"image\u002Fx-icon\"\u003E\n    \u003Clink rel=\"preconnect\" href=\"https:\u002F\u002Ffonts.googleapis.com\"\u003E\n    \u003Clink" + (" rel=\"preconnect\" href=\"https:\u002F\u002Ffonts.gstatic.com\""+pug_attr("crossorigin", true, true, true)) + "\u003E\n    \u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Cairo:wght@200;300;400;500;600;700;800;900&amp;family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap\" rel=\"stylesheet\"\u003E\n  \u003C\u002Fhead\u003E\n  \u003Cbody\u003E \n    \u003Cheader\u003E \n      \u003Cdiv class=\"container\"\u003E \n        \u003Cdiv class=\"logo\"\u003E\u003Ca href=\"index.html\"\u003EAhmed Mahmoud\u003C\u002Fa\u003E\n          \u003Cdiv\u003E🤝\u003C\u002Fdiv\u003E\u003Ca href=\"index.html\"\u003EAhmed El-Mondy\u003C\u002Fa\u003E\n        \u003C\u002Fdiv\u003E";
var listheader = ["articles", "gallery", "features", "other links"]
var idlist0 = ["articles", "gallery", "features", "otherlinks"]
pug_html = pug_html + "\n        \u003Cul\u003E";
// iterate listheader
;(function(){
  var $$obj = listheader;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var item = $$obj[pug_index1];
if (z == False) {
var z = 0
}
if (item != listheader[3]) {
if (z <= 2) {
}
pug_html = pug_html + "\n          \u003Cli\u003E\u003Ca" + (pug_attr("href", "#" + idlist0[z], true, true)) + "\u003E" + (pug_escape(null == (pug_interp = item) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\n          \u003Cli\u003E\u003Ca" + (pug_attr("href", "#" + idlist0[3], true, true)) + "\u003E" + (pug_escape(null == (pug_interp = item) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\n            \u003Cul class=\"mega-menu\"\u003E\u003Cimg src=\"image\u002Fmegamenu.png\" alt=\"megamenu\"\u003E";
var mega_icon1 = ["fas fa-comments","fas fa-user","far fa-building","far fa-check-circle"]
var maga_menu1 = [ "THEY SAID ABOUT US", "OUR FRIENDS", "Services", "Our Skills"]
var id_List1 = ["testimonials","teammembers","services","our-skills"]
pug_html = pug_html + "\n              \u003Cul\u003E";
pug_indent.push('                ');
pug_mixins["icon-list"](mega_icon1,maga_menu1,id_List1);
pug_indent.pop();
pug_html = pug_html + "\n              \u003C\u002Ful\u003E";
var mega_icon2 = ["far fa-calendar-alt","far fa-play-circle","fas fa-server","far fa-chart-bar"]
var maga_menu2 = ["Events", "Top Videos", "Stats", "Contact With Us"]
var id_List2 = ["events","topvideos","stats","discount"]
pug_html = pug_html + "\n              \u003Cul\u003E";
pug_indent.push('                ');
pug_mixins["icon-list"](mega_icon2,maga_menu2,id_List2);
pug_indent.pop();
pug_html = pug_html + "\n              \u003C\u002Ful\u003E\n            \u003C\u002Ful\u003E\n          \u003C\u002Fli\u003E";
}
var z = z + 1
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var item = $$obj[pug_index1];
if (z == False) {
var z = 0
}
if (item != listheader[3]) {
if (z <= 2) {
}
pug_html = pug_html + "\n          \u003Cli\u003E\u003Ca" + (pug_attr("href", "#" + idlist0[z], true, true)) + "\u003E" + (pug_escape(null == (pug_interp = item) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\n          \u003Cli\u003E\u003Ca" + (pug_attr("href", "#" + idlist0[3], true, true)) + "\u003E" + (pug_escape(null == (pug_interp = item) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\n            \u003Cul class=\"mega-menu\"\u003E\u003Cimg src=\"image\u002Fmegamenu.png\" alt=\"megamenu\"\u003E";
var mega_icon1 = ["fas fa-comments","fas fa-user","far fa-building","far fa-check-circle"]
var maga_menu1 = [ "THEY SAID ABOUT US", "OUR FRIENDS", "Services", "Our Skills"]
var id_List1 = ["testimonials","teammembers","services","our-skills"]
pug_html = pug_html + "\n              \u003Cul\u003E";
pug_indent.push('                ');
pug_mixins["icon-list"](mega_icon1,maga_menu1,id_List1);
pug_indent.pop();
pug_html = pug_html + "\n              \u003C\u002Ful\u003E";
var mega_icon2 = ["far fa-calendar-alt","far fa-play-circle","fas fa-server","far fa-chart-bar"]
var maga_menu2 = ["Events", "Top Videos", "Stats", "Contact With Us"]
var id_List2 = ["events","topvideos","stats","discount"]
pug_html = pug_html + "\n              \u003Cul\u003E";
pug_indent.push('                ');
pug_mixins["icon-list"](mega_icon2,maga_menu2,id_List2);
pug_indent.pop();
pug_html = pug_html + "\n              \u003C\u002Ful\u003E\n            \u003C\u002Ful\u003E\n          \u003C\u002Fli\u003E";
}
var z = z + 1
    }
  }
}).call(this);

pug_html = pug_html + "\n        \u003C\u002Ful\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fheader\u003E\n    \u003Csection class=\"landing\"\u003E\n      \u003Cdiv class=\"container\"\u003E\n        \u003Cdiv class=\"box\"\u003E\n          \u003Cdiv class=\"text\"\u003E\n            \u003Ch1\u003EWelcome, To Our World\u003C\u002Fh1\u003E\n            \u003Cp\u003EHere we going to share everything about our life. Books our reading, Games our Playing, Stories and Events\u003C\u002Fp\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"image\"\u003E\u003Cimg src=\"image\u002Flanding-image.png\" alt=\"landing-image\"\u003E\u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"icon\"\u003E\u003Ca href=\"#articles\"\u003E\u003Ci class=\"fas fa-angle-double-down fa-2x\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fsection\u003E\n    \u003Cdiv class=\"up\"\u003E\u003Ca href=\"#\"\u003E\u003Ci class=\"fas fa-arrow-up\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E \u003C\u002Fdiv\u003E\n    \u003Csection class=\"articles\" id=\"articles\"\u003E\n      \u003Cdiv class=\"container\"\u003E \n        \u003Ch2 class=\"main-h2\"\u003EARTICLES\u003C\u002Fh2\u003E\n        \u003Cdiv class=\"box\"\u003E \n          \u003Cdiv class=\"item\"\u003E";
pug_indent.push('            ');
pug_mixins["item-article"]("image/cat-01.jpg","cat-01","Test Title","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit");
pug_indent.pop();
pug_html = pug_html + "\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"item\"\u003E";
pug_indent.push('            ');
pug_mixins["item-article"]("image/cat-02.jpg","cat-02","Test Title","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit");
pug_indent.pop();
pug_html = pug_html + "\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"item\"\u003E";
pug_indent.push('            ');
pug_mixins["item-article"]("image/cat-03.jpg","cat-03","Test Title","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit");
pug_indent.pop();
pug_html = pug_html + "\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"item\"\u003E";
pug_indent.push('            ');
pug_mixins["item-article"]("image/cat-04.jpg","cat-04","Test Title","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit");
pug_indent.pop();
pug_html = pug_html + "\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"item\"\u003E";
pug_indent.push('            ');
pug_mixins["item-article"]("image/cat-05.jpg","cat-05","Test Title","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit");
pug_indent.pop();
pug_html = pug_html + "\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"item\"\u003E";
pug_indent.push('            ');
pug_mixins["item-article"]("image/cat-06.jpg","cat-06","Test Title","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit");
pug_indent.pop();
pug_html = pug_html + "\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"item\"\u003E";
pug_indent.push('            ');
pug_mixins["item-article"]("image/cat-07.jpg","cat-07","Test Title","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit");
pug_indent.pop();
pug_html = pug_html + "\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"item\"\u003E";
pug_indent.push('            ');
pug_mixins["item-article"]("image/cat-08.jpg","cat-08","Test Title","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit");
pug_indent.pop();
pug_html = pug_html + "\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fsection\u003E\n    \u003Csection class=\"gallery\" id=\"gallery\"\u003E\n      \u003Cdiv class=\"spikes\"\u003E\u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"container\"\u003E\n        \u003Ch2 class=\"main-h2\"\u003EGALLERY\u003C\u002Fh2\u003E\n        \u003Cdiv class=\"box\"\u003E ";
for (var i = 1; i <= 6; i++)
{
pug_html = pug_html + "\n          \u003Cdiv class=\"image\"\u003E \u003Cimg" + (pug_attr("src", "image/gallery-0" + i +".png", true, true)+pug_attr("alt", "gallery-0" + i, true, true)) + "\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fsection\u003E\n    \u003Csection class=\"features\" id=\"features\"\u003E\n      \u003Cdiv class=\"container\"\u003E \n        \u003Ch2 class=\"main-h2\"\u003EFEATURES\u003C\u002Fh2\u003E\n        \u003Cdiv class=\"box\"\u003E";
var head = ["Goals", "Planning", "Trips"]
var prag = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima"]
for (var y = 1; y <= 3; y++)
{
pug_html = pug_html + "\n          \u003Cdiv" + (pug_attr("class", pug_classes(["item" + y], [true]), false, true)) + "\u003E \n            \u003Cdiv class=\"image\"\u003E\u003Cimg" + (pug_attr("src", "image/features-0" + y + ".jpg", true, true)+pug_attr("alt", "features-0" + y, true, true)) + "\u003E\u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"content\"\u003E \n              \u003Ch3\u003E" + (pug_escape(null == (pug_interp = head[y - 1]) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\n              \u003Cp\u003E" + (pug_escape(null == (pug_interp = prag[y - 1]) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\n            \u003C\u002Fdiv\u003E\u003Ca href=\"#\"\u003E\n              \u003Cbottom\u003EMore\u003C\u002Fbottom\u003E\u003C\u002Fa\u003E\n          \u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fsection\u003E\n    \u003Csection class=\"testimonials\" id=\"testimonials\"\u003E \n      \u003Cdiv class=\"container\"\u003E \n        \u003Ch2 class=\"main-h2\"\u003ETHEY SAID ABOUT US\u003C\u002Fh2\u003E\n        \u003Cdiv class=\"box\"\u003E";
pug_indent.push('          ');
pug_mixins["testimonials-item"](1,"Mohamed Farag","Full Stack Developer",4,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus");
pug_indent.pop();
pug_indent.push('          ');
pug_mixins["testimonials-item"](2,"Mohamed Ibrahim","Full Stack Developer",4,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus");
pug_indent.pop();
pug_indent.push('          ');
pug_mixins["testimonials-item"](3,"Shady Nabil","Full Stack Developer",4,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus");
pug_indent.pop();
pug_indent.push('          ');
pug_mixins["testimonials-item"](4,"Amr Hendawy","Full Stack Developer",5,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus");
pug_indent.pop();
pug_indent.push('          ');
pug_mixins["testimonials-item"](5,"Sherief Ashraf","Full Stack Developer",3,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus");
pug_indent.pop();
pug_indent.push('          ');
pug_mixins["testimonials-item"](6,"Osama Mohamed","Full Stack Developer",3,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus");
pug_indent.pop();
pug_html = pug_html + "\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fsection\u003E\n    \u003Csection class=\"team-members\" id=\"teammembers\"\u003E\n      \u003Cdiv class=\"container\"\u003E \n        \u003Ch2 class=\"main-h2\"\u003EOUR FRIENDS\u003C\u002Fh2\u003E\n        \u003Cdiv class=\"box\"\u003E";
var image_team = ["team-01.jpg","team-02.jpg","team-03.jpg","team-04.jpg","team-05.jpg","team-06.jpg","team-07.jpg","team-08.jpg"]
var name = ["Name","Name","Name","Name","Name","Name","Name","Name"]
var descripton = ["Simple Short Description","Simple Short Description","Simple Short Description","Simple Short Description","Simple Short Description","Simple Short Description","Simple Short Description","Simple Short Description"]
var link_social = ["id1","id2","id3","id4"]
// iterate image_team
;(function(){
  var $$obj = image_team;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var img = $$obj[index];
pug_html = pug_html + "\n          \u003Cdiv class=\"item\"\u003E\n            \u003Cdiv class=\"image\"\u003E\u003Cimg" + (pug_attr("src", "image/" + img, true, true)+pug_attr("alt", img, true, true)) + "\u003E\u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"content\"\u003E\n              \u003Cdiv class=\"social\"\u003E";
var i = 0;
pug_html = pug_html + "\u003Ca" + (pug_attr("href", "#" + link_social[i++], true, true)) + "\u003E\u003Ci class=\"fab fa-facebook-f\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003Ca" + (pug_attr("href", "#" + link_social[i++], true, true)) + "\u003E\u003Ci class=\"fab fa-twitter\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003Ca" + (pug_attr("href", "#" + link_social[i++], true, true)) + "\u003E\u003Ci class=\"fab fa-linkedin-in\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003Ca" + (pug_attr("href", "#" + link_social[i++], true, true)) + "\u003E\u003Ci class=\"fab fa-youtube\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\n              \u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"text\"\u003E\n                \u003Ch3\u003E" + (pug_escape(null == (pug_interp = name[index]) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\n                \u003Cp\u003E" + (pug_escape(null == (pug_interp = descripton[index]) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var img = $$obj[index];
pug_html = pug_html + "\n          \u003Cdiv class=\"item\"\u003E\n            \u003Cdiv class=\"image\"\u003E\u003Cimg" + (pug_attr("src", "image/" + img, true, true)+pug_attr("alt", img, true, true)) + "\u003E\u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"content\"\u003E\n              \u003Cdiv class=\"social\"\u003E";
var i = 0;
pug_html = pug_html + "\u003Ca" + (pug_attr("href", "#" + link_social[i++], true, true)) + "\u003E\u003Ci class=\"fab fa-facebook-f\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003Ca" + (pug_attr("href", "#" + link_social[i++], true, true)) + "\u003E\u003Ci class=\"fab fa-twitter\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003Ca" + (pug_attr("href", "#" + link_social[i++], true, true)) + "\u003E\u003Ci class=\"fab fa-linkedin-in\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003Ca" + (pug_attr("href", "#" + link_social[i++], true, true)) + "\u003E\u003Ci class=\"fab fa-youtube\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\n              \u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"text\"\u003E\n                \u003Ch3\u003E" + (pug_escape(null == (pug_interp = name[index]) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\n                \u003Cp\u003E" + (pug_escape(null == (pug_interp = descripton[index]) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fsection\u003E\n    \u003Csection class=\"services\" id=\"services\"\u003E\n      \u003Cdiv class=\"spikes\"\u003E\u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"container\"\u003E \n        \u003Ch2 class=\"main-h2\"\u003ESERVICES\u003C\u002Fh2\u003E\n        \u003Cdiv class=\"box\"\u003E";
var service = ["Security","Fixing Issues","Location","Coding","Security","Marketing"]
var service_icon = ["fas fa-user-shield","fas fa-tools","fas fa-map-marked-alt","fas fa-laptop-code","fas fa-palette","fas fa-bullhorn"]
// iterate service
;(function(){
  var $$obj = service;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var icon = $$obj[index];
pug_html = pug_html + "\n          \u003Cdiv class=\"item\"\u003E\n            \u003Cdiv class=\"content\"\u003E \u003Ci" + (pug_attr("class", pug_classes([service_icon[index] + " fa-4x"], [true]), false, true)) + "\u003E\u003C\u002Fi\u003E\n              \u003Ch3\u003E" + (pug_escape(null == (pug_interp = icon) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\n            \u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"info\"\u003E \n              \u003Cdiv class=\"num\"\u003E\u003C\u002Fdiv\u003E\u003Ca href=\"#\"\u003E\u003Cspan\u003EDetails\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var icon = $$obj[index];
pug_html = pug_html + "\n          \u003Cdiv class=\"item\"\u003E\n            \u003Cdiv class=\"content\"\u003E \u003Ci" + (pug_attr("class", pug_classes([service_icon[index] + " fa-4x"], [true]), false, true)) + "\u003E\u003C\u002Fi\u003E\n              \u003Ch3\u003E" + (pug_escape(null == (pug_interp = icon) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\n            \u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"info\"\u003E \n              \u003Cdiv class=\"num\"\u003E\u003C\u002Fdiv\u003E\u003Ca href=\"#\"\u003E\u003Cspan\u003EDetails\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fsection\u003E\n    \u003Csection class=\"our-skills\" id=\"our-skills\"\u003E\n      \u003Cdiv class=\"container\"\u003E \n        \u003Ch2 class=\"main-h2\"\u003EOUR SKILLS\u003C\u002Fh2\u003E\n        \u003Cdiv class=\"box\"\u003E\n          \u003Cdiv class=\"image\"\u003E \u003Cimg src=\"image\u002Fskills.png\" alt=\"skills\"\u003E\u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"content\"\u003E ";
var head_skills = ["HTML", "CSS", "JavaScript", "Python"]
var width_data = ["80%","85%","70%","80%"] 
for (var q = 1 ; q <= head_skills.length; q++)
{
var d = q - 1
pug_html = pug_html + "\n            \u003Cdiv" + (pug_attr("class", pug_classes(["item" + q], [true]), false, true)) + "\u003E\n              \u003Ch3\u003E" + (pug_escape(null == (pug_interp = head_skills[d]) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\n              \u003Cdiv class=\"rang\"\u003E\n                \u003Cdiv" + (" class=\"rang-width\""+pug_attr("data-width", width_data[q - 1], true, true)) + "\u003E\u003C\u002Fdiv\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fsection\u003E\n    \u003Csection class=\"latest-events\" id=\"events\"\u003E\u003Cimg src=\"image\u002Fdots.png\" alt=\"dots\"\u003E\u003Cimg src=\"image\u002Fdots.png\" alt=\"dots\"\u003E\n      \u003Cdiv class=\"container\"\u003E \n        \u003Ch2 class=\"main-h2\"\u003ELATEST EVENTS\u003C\u002Fh2\u003E\n        \u003Cdiv class=\"box\"\u003E\n          \u003Cdiv class=\"image\"\u003E \u003Cimg src=\"image\u002Fevents.png\" alt=\"events\"\u003E\u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"content\"\u003E\n            \u003Cdiv class=\"time\"\u003E\n              \u003Cdiv class=\"data\"\u003E\n                \u003Cp\u003E000\u003C\u002Fp\u003E\u003Cspan\u003EDays\u003C\u002Fspan\u003E\n              \u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"data\"\u003E\n                \u003Cp\u003E00\u003C\u002Fp\u003E\u003Cspan\u003EHours\u003C\u002Fspan\u003E\n              \u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"data\"\u003E\n                \u003Cp\u003E00\u003C\u002Fp\u003E\u003Cspan\u003EMinutes\u003C\u002Fspan\u003E\n              \u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"data\"\u003E\n                \u003Cp\u003E00\u003C\u002Fp\u003E\u003Cspan\u003ESeconds\u003C\u002Fspan\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n            \u003Ch3\u003ETech Masters Event 2021\u003C\u002Fh3\u003E\n            \u003Cp\u003ELorem ipsum dolor sit amet consectetur adipisicing elit. Et vero tenetur doloremque iusto ut adipisci quam ratione aliquam excepturi nulla in harum, veritatis porro\u003C\u002Fp\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n        \u003Cform\u003E\n          \u003Cinput type=\"email\" name=\"subscribe\" placeholder=\"Enter Your Email\"\u003E\n          \u003Cinput type=\"submit\" value=\"Subscribe\"\u003E\n        \u003C\u002Fform\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fsection\u003E\n    \u003Csection class=\"top-videos\" id=\"topvideos\"\u003E\n      \u003Cdiv class=\"container\"\u003E \n        \u003Ch2 class=\"main-h2\"\u003ETOP VIDEOS\u003C\u002Fh2\u003E\n        \u003Cdiv class=\"box\"\u003E\n          \u003Cdiv class=\"content\"\u003E \n            \u003Cdiv class=\"head\"\u003E\n              \u003Ch3\u003ETop Videos\u003C\u002Fh3\u003E\u003Ci class=\"fas fa-random\"\u003E\u003C\u002Fi\u003E\n            \u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"box-item\"\u003E";
var video_pra = ["Smile For See Me", "I Am The Friend", "Oh My Friend, My Life Companion", "Oh, You Are One Of Us", "Are you free", "Where Is The Friend", "Fragrant Friend"]
var video_time = ["05:18", "03:18", "05:25", "04:16", "07:48", "03:12", "08:10"]
var src_list = ["https://www.youtube.com/embed/jnQmPaSmUwE", "https://www.youtube.com/embed/uG9CTkCGHEg", "https://www.youtube.com/embed/2nvtCZ-qoMM", "https://www.youtube.com/embed/j1lr0At_ERw", "https://www.youtube.com/embed/WR66FJNdex8", "https://www.youtube.com/embed/6gPnXHMLSOE", "https://www.youtube.com/embed/v82g09o-cXw"]
pug_html = pug_html + "\n              \u003Cul\u003E";
for (var h = 0 ; h < video_pra.length ; h ++)
{
pug_html = pug_html + "\n                \u003Cli" + (" class=\"item\""+pug_attr("data-src", src_list[h], true, true)) + "\u003E\n                  \u003Cp\u003E" + (pug_escape(null == (pug_interp = video_pra[h]) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\n                  \u003Ctime\u003E" + (pug_escape(null == (pug_interp = video_time[h]) ? "" : pug_interp)) + "\u003C\u002Ftime\u003E\n                \u003C\u002Fli\u003E";
}
pug_html = pug_html + "\n              \u003C\u002Ful\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"video\"\u003E\n            \u003Ciframe" + (" width=\"560\" height=\"315\" src=\"https:\u002F\u002Fwww.youtube.com\u002Fembed\u002FjnQmPaSmUwE\" title=\"#{video_pra[0]}\""+pug_attr("picture-in-picture", true, true, true)+pug_attr("allowfullscreen", true, true, true)+" enablejsapi=\"1\"") + "\u003E\u003C\u002Fiframe\u003E\n            \u003Cp\u003E" + (pug_escape(null == (pug_interp = video_pra[0]) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fsection\u003E\n    \u003Csection class=\"our-awesome-stats\" id=\"stats\"\u003E\n      \u003Cdiv class=\"container\"\u003E \n        \u003Ch2\u003EOur Awesome Stats\u003C\u002Fh2\u003E\n        \u003Cdiv class=\"box\"\u003E";
var stats_icon = ["far fa-user", "fas fa-code", "fas fa-globe-asia", "far fa-money-bill-alt"]
var stats_num = ["150", "135", "50", "5000"]
var stats_span = ["Friends", "Projects", "Countries", "Fake Money"]
for (g=0 ; g < stats_span.length ; g ++)
{
pug_html = pug_html + "\n          \u003Cdiv class=\"item\"\u003E\u003Ci" + (pug_attr("class", pug_classes([stats_icon[g] + " "+ "fa-2x fa-fw"], [true]), false, true)) + "\u003E\u003C\u002Fi\u003E\n            \u003Cp" + (pug_attr("data-num", stats_num[g], true, true)) + "\u003E0\u003C\u002Fp\u003E\u003Cspan\u003E" + (pug_escape(null == (pug_interp = stats_span[g]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\n          \u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fsection\u003E\n    \u003Csection class=\"discount\" id=\"discount\"\u003E\n      \u003Cdiv class=\"box\"\u003E\u003Cimg src=\"image\u002Fdiscount-background1.jpg\" alt=\"discount-background1\"\u003E\u003Cimg src=\"image\u002Fdiscount-background2.jpg\" alt=\"discount-background2\"\u003E\n        \u003Cdiv class=\"data\"\u003E\n          \u003Ch2\u003EWhy Contact\u003C\u002Fh2\u003E\n          \u003Cp\u003ELorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi asperiores consectetur, recusandae ratione provident necessitatibus, cumque delectus commodi fuga praesentium beatae. Totam vel similique laborum dicta aperiam odit doloribus corporis.\u003C\u002Fp\u003E\n          \u003Cdiv class=\"image\"\u003E\u003Cimg src=\"image\u002Fdiscount.png\" alt=\"discount\"\u003E\u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cform\u003E\n        \u003Cdiv class=\"content\"\u003E\n          \u003Ch3\u003EContact With Us\u003C\u002Fh3\u003E\n          \u003Cinput type=\"text\" name=\"\" placeholder=\"Your Name\"\u003E\n          \u003Cinput type=\"email\" name=\"\" placeholder=\"Your Email\"\u003E\n          \u003Cinput type=\"tel\" name=\"\" placeholder=\"Your Phone\"\u003E\n          \u003Ctextarea name=\"\" cols=\"30\" rows=\"10\" placeholder=\"Tell Us About Your Needs\"\u003E\u003C\u002Ftextarea\u003E\n          \u003Cinput type=\"submit\" value=\"Send\"\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fform\u003E\n    \u003C\u002Fsection\u003E\n    \u003Cfooter\u003E\n      \u003Cdiv class=\"container\"\u003E \n        \u003Cdiv class=\"box info\"\u003E \n          \u003Ch2\u003E AHMED\u003C\u002Fh2\u003E\n          \u003Cdiv class=\"social\"\u003E \u003Ci class=\"fab fa-facebook-f fa-fw\"\u003E\u003C\u002Fi\u003E\u003Ci class=\"fab fa-twitter fa-fw\"\u003E\u003C\u002Fi\u003E\u003Ci class=\"fab fa-youtube fa-fw\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\n          \u003Cp\u003ELorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste aspernatur\u003C\u002Fp\u003E\n        \u003C\u002Fdiv\u003E\n        \u003Cul class=\"box link\"\u003E\n          \u003Cli\u003E\u003Ca href=\"#\"\u003EImportant Link 1\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n          \u003Cli\u003E\u003Ca href=\"#\"\u003EImportant Link 2\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n          \u003Cli\u003E\u003Ca href=\"#\"\u003EImportant Link 3\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n          \u003Cli\u003E\u003Ca href=\"#\"\u003EImportant Link 4\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n          \u003Cli\u003E\u003Ca href=\"#\"\u003EImportant Link 5\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n        \u003C\u002Ful\u003E\n        \u003Cdiv class=\"box address\"\u003E\n          \u003Cdiv class=\"item\"\u003E\u003Ci class=\"fas fa-map-marker-alt fa-fw\"\u003E\u003C\u002Fi\u003E\n            \u003Cp\u003EEgypt, Giza, Inside The Sphinx, Room Number 220\u003C\u002Fp\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"item\"\u003E\u003Ci class=\"far fa-clock fa-fw\"\u003E \u003C\u002Fi\u003E\n            \u003Cp\u003EBusiness Hours: From 10:00 To 18:00\u003C\u002Fp\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"item\"\u003E\u003Ci class=\"fas fa-phone-volume fa-fw\"\u003E\u003C\u002Fi\u003E\n            \u003Cp\u003E+20123456789 \u003Cbr\u003E+20198765432\u003C\u002Fp\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"box image\"\u003E ";
for (var i = 1; i <= 6; i++)
{
pug_html = pug_html + "\n          \u003Cdiv class=\"item\"\u003E\u003Cimg" + (pug_attr("src", "image/gallery-0" + i +".png", true, true)+pug_attr("alt", "gallery-0" + i, true, true)) + "\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"desginer\"\u003E\n        \u003Cp\u003E" + (pug_escape(null == (pug_interp = "Made With 💖 By Eng.Ahmed Abd El-Fattah") ? "" : pug_interp)) + "\u003C\u002Fp\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Ffooter\u003E\n    \u003Cscript src=\"js\u002Fmain.js\"\u003E\u003C\u002Fscript\u003E\n  \u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E";}.call(this,"False" in locals_for_with?locals_for_with.False:typeof False!=="undefined"?False:undefined,"g" in locals_for_with?locals_for_with.g:typeof g!=="undefined"?g:undefined,"w" in locals_for_with?locals_for_with.w:typeof w!=="undefined"?w:undefined));;return pug_html;}