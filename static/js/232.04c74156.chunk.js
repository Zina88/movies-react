"use strict";(self.webpackChunkmovies_react=self.webpackChunkmovies_react||[]).push([[232],{7642:function(n,t,e){e.d(t,{Z:function(){return T}});var i,r,o,a,s,p,c,x,d=e(2791),m=e(7689),u=e(168),l=e(6444),h=e(1087),f=l.ZP.div(i||(i=(0,u.Z)(["\nmin-width: 320px;\npadding-top: 30px;\n\n@media (min-width: 768px) {\n   min-width: 768px;\n}\n\n@media (min-width: 1200px) {\n  min-width: 1200px;\n}\n\n"]))),g=l.ZP.ul(r||(r=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n\n  margin-bottom: -7px;\n  \n@media (min-width: 768px) {  \n    margin-right: -7px;\n    grid-template-columns: repeat(3, 1fr);\n}\n\n@media (min-width: 1200px) {\n    grid-template-columns: repeat(5, 1fr);\n}\n  "]))),v=l.ZP.li(o||(o=(0,u.Z)(["\n  position: relative;\n  list-style: none;\n  text-align: center;\n  margin-bottom: 7px;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);\n  transition: all 300ms linear; \n\n  @media (min-width: 768px) { \n    margin-right: 7px;\n  }\n\n&:hover {\n  scale: 1.01;\n  box-shadow: 0px 1px 1px rgba(200, 101, 247, 0.22), 0px 4px 4px rgba(200, 101, 247, 0.16), 1px 4px 6px rgba(200, 101, 247, 0.26);\n}\n"]))),Z=l.ZP.img(a||(a=(0,u.Z)(["\n  margin-bottom: 8px;\n  width: 100%\n  \n"]))),w=l.ZP.h2(s||(s=(0,u.Z)(["\n  font-size: 22px;\n  margin-bottom: 8px;\n\n  @media (min-width: 768px) { \n    font-size: 18px;\n  }\n\n  @media (min-width: 1200px) { \n    margin-bottom: 10px;\n    font-size: 20px;\n  }\n"]))),b=l.ZP.div(p||(p=(0,u.Z)(["\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center; \n  font-size: 20px;\n  margin-bottom: 15px;\n\n @media (min-width: 768px) { \n  font-size: 14px;\n  }\n\n    @media (min-width: 1200px) { \n    margin-bottom: 10px;\n    font-size: 12px;\n  }\n"]))),j=(0,l.ZP)(h.rU)(c||(c=(0,u.Z)(["\ncolor: inherit;\n"]))),_=l.ZP.b(x||(x=(0,u.Z)(["\ncolor: ",";\nmargin-right: 10px;\n"])),(function(n){return n.theme.colors.accent})),P=e(2628),E=e(3121),S=e(184);function T(n){var t=n.movies,e=(0,m.TH)();return(0,S.jsxs)(f,{children:[(0,S.jsx)(g,{children:t.map((function(n,t){var i=n.title,r=n.vote_average,o=n.vote_count,a=n.poster_path,s=n.id;return(0,S.jsx)(v,{children:(0,S.jsxs)(j,{to:"/movies/".concat(s),state:{from:e},children:[(0,S.jsx)(Z,{src:a?"https://image.tmdb.org/t/p/w400/".concat(a):P,alt:i}),(0,S.jsx)(w,{children:i.length>20?i.slice(0,20)+"...":i}),(0,S.jsxs)(b,{children:[(0,S.jsxs)("p",{children:["vote average:",(0,S.jsx)(_,{children:r?r.toFixed(1):"-"})]}),(0,S.jsxs)("p",{children:["vote count: ",(0,S.jsx)(_,{children:o})]})]})]})},t)}))}),(0,S.jsx)(d.Suspense,{fallback:(0,S.jsx)(E.Z,{}),children:(0,S.jsx)(m.j3,{})})]})}},4232:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var i,r,o=e(2982),a=e(885),s=e(2791),p=e(4165),c=e(5861),x={NODE_ENV:"production",PUBLIC_URL:"/movies-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_KEY,d=function(){var n=(0,c.Z)((0,p.Z)().mark((function n(t){var e,i;return(0,p.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("https://api.themoviedb.org/3/","trending/movie/week?page=").concat(t,"&api_key=").concat(x));case 2:return e=n.sent,n.next=5,e.json();case 5:return i=n.sent,n.abrupt("return",i);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=d,u=e(7642),l=e(168),h=e(6444),f=h.ZP.div(i||(i=(0,l.Z)(["\n  padding: 15px;\n"]))),g=h.ZP.h1(r||(r=(0,l.Z)(["\n  margin-bottom: 15px;\n"]))),v=e(184);function Z(){var n=(0,s.useState)([]),t=(0,a.Z)(n,2),e=t[0],i=t[1],r=(0,s.useState)(1),p=(0,a.Z)(r,2),c=p[0],x=p[1],d=(0,s.useState)(!0),l=(0,a.Z)(d,2),h=l[0],Z=l[1],w=(0,s.useState)(0),b=(0,a.Z)(w,2),j=b[0],_=b[1];(0,s.useEffect)((function(){h&&m(c).then((function(n){i([].concat((0,o.Z)(e),(0,o.Z)(n.results))),x((function(n){return n+1})),_(n.total_results)})).finally((function(){return Z(!1)}))}),[h,c,e]),(0,s.useEffect)((function(){return document.addEventListener("scroll",P),function(){document.removeEventListener("scroll",P)}}));var P=function(n){n.target.documentElement.scrollHeight-(n.target.documentElement.scrollTop+window.innerHeight)<100&&e.length<j&&Z(!0)};return(0,v.jsxs)(f,{children:[(0,v.jsx)(g,{children:"Trending Today"}),(0,v.jsx)(u.Z,{movies:e})]})}},2628:function(n,t,e){n.exports=e.p+"static/media/No_Poster.68ae350692995e841a18.png"}}]);
//# sourceMappingURL=232.04c74156.chunk.js.map