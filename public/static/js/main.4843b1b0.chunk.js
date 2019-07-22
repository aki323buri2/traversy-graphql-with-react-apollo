(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,a,n){e.exports=n.p+"static/media/logo.7dab9996.png"},49:function(e,a,n){e.exports=n(65)},54:function(e,a,n){},63:function(e,a,n){},65:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),l=n(40),r=n.n(l),s=(n(54),n(48)),m=n(18),u=n(17),i=n(14),o=n(22),h=n(23),p=n(29),E=n(24),d=n(30),g=n(25),b=n(16),f=n.n(b),_=n(28),y=n.n(_),N=n(41),v=n.n(N);function k(e){var a=e.launch,n=a.flight_number,t=a.launch_date_local,l=a.launch_success,r=a.mission_name;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission: ",c.a.createElement("span",{className:y()({"text-success":l,"text-danger":!l})},r)),c.a.createElement("p",null,"Date: ",c.a.createElement(v.a,{format:"YYYY-MM-DD HH:mm"},t))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(u.b,{to:"/launch/".concat(n),className:"btn btn-secondary"},"Launch Details"))))}function w(){return c.a.createElement("div",{className:"my-3"},c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = Danger"))}function j(){var e=Object(g.a)(["\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n"]);return j=function(){return e},e}var O=f()(j()),x=function(e){function a(){return Object(o.a)(this,a),Object(p.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"display-4 my-3"},"Launches"),c.a.createElement(w,null),c.a.createElement(m.b,{query:O},function(e){var a=e.loading,n=e.error,t=e.data;return a?c.a.createElement("h4",null,"Loading..."):(n&&console.log(n),c.a.createElement(c.a.Fragment,null,t.launches.map(function(e){return c.a.createElement(k,{key:e.flight_number,launch:e})})))}))}}]),a}(t.Component);function D(){var e=Object(g.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return D=function(){return e},e}var L=f()(D()),I=function(e){function a(){return Object(o.a)(this,a),Object(p.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),c.a.createElement(c.a.Fragment,null,c.a.createElement(m.b,{query:L,variables:{flight_number:e}},function(e){var a=e.loading,n=e.error,t=e.data;if(a)return c.a.createElement("h4",null,"Loading...");n&&console.log(n);var l=t.launch,r=l.mission_name,s=l.flight_number,m=l.launch_year,i=l.launch_success,o=l.rocket,h=o.rocket_id,p=o.rocket_name,E=o.rocket_type;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Mission: ",r)),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",s),c.a.createElement("li",{className:"list-group-item"},"Launch Year: ",m),c.a.createElement("li",{className:"list-group-item"},"Launch Successful: "," ",c.a.createElement("span",{className:y()({"text-success":i,"text-danger":!i})},i?"Yes":"No"))),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",h),c.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",p),c.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",E)),c.a.createElement("hr",null),c.a.createElement(u.b,{to:"/",className:"btn btn-secondary"},"Back"))}))}}]),a}(t.Component),Y=(n(63),n(47)),q=n.n(Y),F=new s.a({uri:"/graphql"});var M=function(){return c.a.createElement(m.a,{client:F},c.a.createElement(u.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:q.a,alt:"SpaceX",style:{width:300,display:"block",margin:"auto"}}),c.a.createElement(i.a,{exact:!0,path:"/",component:x}),c.a.createElement(i.a,{exact:!0,path:"/launch/:flight_number",component:I}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[49,1,2]]]);
//# sourceMappingURL=main.4843b1b0.chunk.js.map