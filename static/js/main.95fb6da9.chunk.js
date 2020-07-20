(this["webpackJsonpreact-firebase-auth"]=this["webpackJsonpreact-firebase-auth"]||[]).push([[0],{31:function(e,a,t){e.exports=t(51)},36:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(29),c=t.n(l),s=(t(36),t(10)),o=t(11),m=t(13),i=t(12),u=t(7),p=t(3),d=t(19),h=t.n(d);h.a.initializeApp({apiKey:"AIzaSyDid7wdYVVIQ403LURGpoYv_TPRyZ4RtiY",authDomain:"fir-project-2c749.firebaseapp.com",databaseURL:"https://fir-project-2c749.firebaseio.com",projectId:"fir-project-2c749",storageBucket:"fir-project-2c749.appspot.com",messagingSenderId:"326945188628",appId:"1:326945188628:web:aa5531e0a440c6e9a07001"});new h.a.auth.GoogleAuthProvider;var E=h.a.auth(),v=h.a,g=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).logOutUser=function(){v.auth().signOut().then(window.location="/")},n.state={user:""},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.onAuthStateChanged((function(a){a&&e.setState({user:a})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Navbar"},r.a.createElement("nav",{className:"navbar navbar-expand-sm bg-primary navbar-dark"},r.a.createElement("div",{className:"container fluid"},r.a.createElement(u.b,{to:"/home",className:"navbar-brand"},"REACTJS FIREBASE"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{className:"nav-link",to:"/home"},"HOME")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{className:"nav-link",to:"/about"},"ABOUT")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement(u.b,{className:"nav-link dropdown-toggle",id:"navbardrop","data-toggle":"dropdown"},r.a.createElement("i",{className:"fa fa-user"})),r.a.createElement("div",{className:"dropdown-menu"},r.a.createElement(u.b,{className:"dropdown-item"},this.state.user.displayName),r.a.createElement(u.b,{onClick:this.logOutUser,className:"dropdown-item"},"Sing Out"))))))))}}]),t}(n.Component),b=function(e){return v.auth().onAuthStateChanged((function(e){e?console.log("Hello",e.displayName):(window.location="/",console.log("Please Login!"))})),r.a.createElement("div",{className:"Home"},r.a.createElement(g,null),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Home page!")))},f=t(22),N=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleChange=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault();var a=n.state,t=a.email,r=a.password;v.auth().signInWithEmailAndPassword(t,r).then((function(e){n.props.history.push("/home"),console.log(e)})).catch((function(e){n.setState({error:e}),alert(e)}))},n.state={email:"",password:"",error:null},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password;return r.a.createElement("div",{className:"Login container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 offset-md-4"},r.a.createElement("div",{className:"card shadow-lg mt-5"},r.a.createElement("div",{className:"card-header"},r.a.createElement("span",{className:"card-title"},"SIGN IN")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"input-group form-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-envelope"}))),r.a.createElement("input",{type:"email",className:"form-control",name:"email",value:a,onChange:this.handleChange,placeholder:"E-mail"})),r.a.createElement("div",{className:"input-group form-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-key"}))),r.a.createElement("input",{type:"password",className:"form-control",name:"password",value:t,onChange:this.handleChange,placeholder:"Password"})),r.a.createElement("div",{className:"form-check mb-3"},r.a.createElement("label",{className:"form-check-label"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",value:""}),"Remember Me")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Sign In",className:"btn btn-primary btn-block"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("p",{align:"center"},"Don't have an account?\xa0",r.a.createElement(u.b,{to:"/register"},"Sing Up")))))))))}}]),t}(n.Component),w=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleChange=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault();var a=n.state,t=a.email,r=a.username,l=a.password;v.auth().createUserWithEmailAndPassword(t,l).then((function(){v.auth().currentUser.updateProfile({displayName:r}).then((function(){n.props.history.push("/home")}))})).catch((function(e){n.setState({error:e}),alert(e)}))},n.state={username:"",email:"",password:"",error:null},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.username,n=e.password;return r.a.createElement("div",{className:"Register container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 offset-md-4"},r.a.createElement("div",{className:"card shadow-lg mt-5"},r.a.createElement("div",{className:"card-header"},r.a.createElement("span",{className:"card-title"},"SIGN UP")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"input-group form-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-envelope"}))),r.a.createElement("input",{type:"email",className:"form-control",name:"email",value:a,onChange:this.handleChange,placeholder:"E-mail"})),r.a.createElement("div",{className:"input-group form-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fa fa-user"}))),r.a.createElement("input",{type:"text",className:"form-control",name:"username",value:t,onChange:this.handleChange,placeholder:"User name"})),r.a.createElement("div",{className:"input-group form-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-key"}))),r.a.createElement("input",{type:"password",className:"form-control",name:"password",value:n,onChange:this.handleChange,placeholder:"Password"})),r.a.createElement("div",{className:"form-group mt-4"},r.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block",value:"Sign Up"})),r.a.createElement("div",{className:"from-group",align:"center"},r.a.createElement(u.b,{to:"/"},"Sign In"))))))))}}]),t}(n.Component),y=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"No Match container",align:"center"},r.a.createElement("h1",{className:"text-danger"},"400 - BAD REQUEST"),r.a.createElement("p",null,"Your browser sent an invalid request."),r.a.createElement("hr",null),r.a.createElement("p",null,"nginx"))}}]),t}(n.Component),O=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){v.auth().onAuthStateChanged((function(e){e?console.log("Hello",e.displayName):(window.location="/",console.log("Please Login!"))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"About"},r.a.createElement(g,null),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"About page!")))}}]),t}(n.Component),j=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).logOutUser=function(){v.auth().signOut().then(window.location="/")},n.state={user:""},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.onAuthStateChanged((function(a){a&&e.setState({user:a})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{basename:"/"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/home",render:function(a){return r.a.createElement(b,Object.assign({},a,{logOutUser:e.logOutUser,user:e.state.user}))}}),r.a.createElement(p.a,{exact:!0,path:"/about",component:O}),r.a.createElement(p.a,{exact:!0,path:"/",component:N}),r.a.createElement(p.a,{exact:!0,path:"/register",component:w}),r.a.createElement(p.a,{exact:!0,component:y}))))}}]),t}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.95fb6da9.chunk.js.map