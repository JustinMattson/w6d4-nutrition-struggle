(function(t){function e(e){for(var s,n,i=e[0],c=e[1],l=e[2],u=0,p=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},o=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Home"}}},[t._v("AppName")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"Home"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"Profile"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Profile"}}},[t._v("Profile")])],1):t._e()]),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v(" Login ")])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],c=a("bc3a"),l=a.n(c),d=a("335d"),u={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),console.log("this.$auth.user: "),console.log(this.$auth.user),this.$store.dispatch("getProfile")},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}}},p=u,h=a("2877"),f=Object(h["a"])(p,n,i,!1,null,null,null),m=f.exports,v={name:"App",async beforeCreate(){await Object(d["c"])(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"),this.$store.dispatch("getDays"))},components:{Navbar:m}},y=v,b=Object(h["a"])(y,r,o,!1,null,null,null),g=b.exports,_=a("8c4f"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home container"},[a("form",{staticClass:"form-inline",on:{submit:function(e){return e.preventDefault(),t.createDay(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"date"}},[t._v("Date")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newDay.date,expression:"newDay.date"}],attrs:{type:"date",id:"date",required:""},domProps:{value:t.newDay.date},on:{input:function(e){e.target.composing||t.$set(t.newDay,"date",e.target.value)}}})]),a("button",{staticClass:"btn btn-outline-success",attrs:{type:"submit"}},[t._v("Create Day")])]),a("ul",t._l(t.days,(function(e){return a("li",{key:e.id},[a("router-link",{attrs:{to:{name:"Day",params:{id:e.id}}}},[t._v(t._s(e.date))])],1)})),0)])},$=[],D={name:"home",data(){return{newDay:{}}},computed:{days(){return this.$store.state.days}},methods:{createDay(){this.$store.dispatch("createDay",{...this.newDay}),this.newDay={}}}},C=D,x=Object(h["a"])(C,w,$,!1,null,null,null),F=x.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about text-center"},[a("h1",[t._v("Welcome "+t._s(t.profile.name))]),a("img",{staticClass:"rounded",attrs:{src:t.profile.picture,alt:""}}),a("p",[t._v(t._s(t.profile.email))])])},k=[],O={name:"Profile",computed:{profile(){return this.$store.state.profile}}},j=O,A=(a("976b"),Object(h["a"])(j,P,k,!1,null,"32d06450",null)),B=A.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home container"},[a("h1",[t._v(t._s(t.day.date)+" - ("+t._s(t.total)+")")]),t._l(t.foods,(function(e){return a("div",{key:e.id},[a("p",[t._v(t._s(e.name)+" - "+t._s(e.cal))])])})),a("form",{staticClass:"form-inline",on:{submit:function(e){return e.preventDefault(),t.searchFood(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"search"}},[t._v("Search")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",id:"search",placeholder:"search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),a("button",{staticClass:"btn btn-outline-success",attrs:{type:"submit"}},[t._v("search")])]),t._l(t.results,(function(e){return a("div",{key:e.id},[t._v(" "+t._s(e.name)+" - "+t._s(e.cal)+" "),a("button",{staticClass:"btn btn-outline-success",attrs:{type:"button"},on:{click:function(a){return t.addNutritionFood(e)}}},[t._v("Add Food")])])}))],2)},H=[];const N=l.a.create({baseURL:"https://trackapi.nutritionix.com/v2/natural/nutrients",timeout:3e3,headers:{"x-app-key":"8120134b8a361912934e53e415fffd2c","x-app-id":"814a7db9"}});var S={name:"home",mounted(){this.$store.dispatch("getDayById",this.$route.params.id),this.$store.dispatch("getFoodByDayId",this.$route.params.id)},data(){return{newFood:{},results:[],search:""}},computed:{day(){return this.$store.state.activeDay},foods(){return this.$store.state.activeFoods},total(){let t=0;return this.foods.forEach(e=>t+=e.cal),t}},methods:{addFood(){this.$store.dispatch("addFood",{...this.newFood,day:this.day.id}),this.newFood={}},addNutritionFood(t){this.$store.dispatch("addFood",{...t,day:this.day.id})},async searchFood(){let t=await N.post("",{query:this.search});this.results=t.data.foods.map(t=>({name:t.food_name,cal:t.nf_calories}))}}},T=S,I=Object(h["a"])(T,E,H,!1,null,null,null),q=I.exports;s["a"].use(_["a"]);const M=[{path:"/",name:"Home",component:F},{path:"/profile",name:"Profile",component:B,beforeEnter:d["b"]},{path:"/days/:id",name:"Day",component:q,beforeEnter:d["b"]}],U=new _["a"]({routes:M});var z=U,J=a("2f62");s["a"].use(J["a"]);let L=location.host.includes("localhost")?"http://localhost:3000/":"/",R=l.a.create({baseURL:L+"api",timeout:3e3,withCredentials:!0});var W=new J["a"].Store({state:{profile:{},days:[],activeFoods:[],activeDay:{}},mutations:{setProfile(t,e){t.profile=e},setDays(t,e){t.days=e},addDays(t,e){t.days.push(e)},setActiveDay(t,e){t.activeDay=e},setActiveFoods(t,e){t.activeFoods=e},addFood(t,e){t.activeFoods.push(e)}},actions:{setBearer({},t){R.defaults.headers.authorization=t},resetBearer(){R.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await R.get("profile");t("setProfile",e.data)}catch(e){console.error(e)}},async getDays({commit:t,dispatch:e}){try{let e=await R.get("days");t("setDays",e.data)}catch(a){console.error(a)}},async getDayById({commit:t,dispatch:e},a){try{let e=await R.get("days/"+a);t("setActiveDay",e.data)}catch(s){console.error(s)}},async createDay({commit:t,dispatch:e},a){try{let e=await R.post("days",a);t("addDay",e.data)}catch(s){console.error(s)}},async getFoodByDayId({commit:t,dispatch:e},a){try{let e=await R.get("days/"+a+"/foods");t("setActiveFoods",e.data)}catch(s){console.error(s)}},async addFood({commit:t,dispatch:e},a){try{let e=await R.post("foods",a);t("addFood",e.data)}catch(s){console.error(s)}}}});const Y="troy-tenant.auth0.com",G="https://troy-student.com",K="aJIq7rj4w39wYc7BHakp7HqYrF8zPd78";s["a"].use(d["a"],{domain:Y,clientId:K,audience:G,onRedirectCallback:t=>{z.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:z,store:W,render:function(t){return t(g)}}).$mount("#app")},"93a3":function(t,e,a){},"976b":function(t,e,a){"use strict";var s=a("93a3"),r=a.n(s);r.a}});