import{s as K,f as g,a as x,g as h,h as U,c as y,W as j,d as C,j as o,a4 as Q,i as D,x as i,Y as P,N as B,Z as X,M as ee,l as G,m as J}from"../chunks/scheduler.35986cdd.js";import{S as te,i as se,b as R,d as W,m as Y,a as M,t as A,c as ae,e as Z,g as re}from"../chunks/index.f0d1f3f0.js";import{g as ne}from"../chunks/navigation.d418afde.js";import{u as le}from"../chunks/user.3f6287d3.js";import{l as oe,a as ie}from"../chunks/index.0e7f8c4e.js";import{s as ue,b as ce}from"../chunks/localStorage.baf29d92.js";import{B as fe}from"../chunks/Button.040683f0.js";import{A as pe}from"../chunks/Alert.4ad3e0b7.js";function V(l){let t,e;return t=new pe({props:{class:"mb-4",variant:"filled",$$slots:{default:[me]},$$scope:{ctx:l}}}),{c(){R(t.$$.fragment)},l(s){W(t.$$.fragment,s)},m(s,d){Y(t,s,d),e=!0},i(s){e||(M(t.$$.fragment,s),e=!0)},o(s){A(t.$$.fragment,s),e=!1},d(s){Z(t,s)}}}function me(l){let t;return{c(){t=G("Failed to login")},l(e){t=J(e,"Failed to login")},m(e,s){D(e,t,s)},d(e){e&&C(t)}}}function de(l){let t;return{c(){t=G("Sign In")},l(e){t=J(e,"Sign In")},m(e,s){D(e,t,s)},d(e){e&&C(t)}}}function ge(l){let t,e,s,d,$,f,T="Sign in to Splearn",I,S,u,r,k,b,q='<a href="/reset-password" class="text-green-500 hover:underline">Forgot password?</a>',L,m,N,_,E,w,z='New to Splearn? <a href="/sign-up" class="text-green-500 hover:underline">Create an account</a>.',H,F,O,a=l[3]&&V(l);return _=new fe({props:{loading:l[2],color:"green",size:"md",type:"submit",$$slots:{default:[de]},$$scope:{ctx:l}}}),{c(){t=g("div"),e=g("div"),s=g("img"),$=x(),f=g("h1"),f.textContent=T,I=x(),a&&a.c(),S=x(),u=g("form"),r=g("input"),k=x(),b=g("p"),b.innerHTML=q,L=x(),m=g("input"),N=x(),R(_.$$.fragment),E=x(),w=g("p"),w.innerHTML=z,this.h()},l(n){t=h(n,"DIV",{class:!0});var p=U(t);e=h(p,"DIV",{class:!0});var c=U(e);s=h(c,"IMG",{class:!0,width:!0,src:!0,alt:!0}),$=y(c),f=h(c,"H1",{class:!0,"data-svelte-h":!0}),j(f)!=="svelte-1ckw4il"&&(f.textContent=T),I=y(c),a&&a.l(c),S=y(c),u=h(c,"FORM",{});var v=U(u);r=h(v,"INPUT",{class:!0,type:!0,placeholder:!0}),k=y(v),b=h(v,"P",{class:!0,"data-svelte-h":!0}),j(b)!=="svelte-111hxia"&&(b.innerHTML=q),L=y(v),m=h(v,"INPUT",{class:!0,type:!0,placeholder:!0}),N=y(v),W(_.$$.fragment,v),v.forEach(C),E=y(c),w=h(c,"P",{class:!0,"data-svelte-h":!0}),j(w)!=="svelte-74096v"&&(w.innerHTML=z),c.forEach(C),p.forEach(C),this.h()},h(){o(s,"class","mx-auto rounded-lg"),o(s,"width","80"),Q(s.src,d="/splearn.jpeg")||o(s,"src",d),o(s,"alt","splearn"),o(f,"class","text-2xl text-center font-semibold mb-4 text-gray-800"),o(r,"class","mb-4 p-2 border rounded w-full text-gray-700"),o(r,"type","text"),o(r,"placeholder","Username or email"),o(b,"class","mt-4 text-gray-500"),o(m,"class","mb-6 p-2 border rounded w-full text-gray-700"),o(m,"type","password"),o(m,"placeholder","Password"),o(w,"class","mt-4 text-center text-gray-500"),o(e,"class","bg-white p-8 rounded-lg shadow-md w-96"),o(t,"class","flex justify-center items-center h-screen bg-gray-100")},m(n,p){D(n,t,p),i(t,e),i(e,s),i(e,$),i(e,f),i(e,I),a&&a.m(e,null),i(e,S),i(e,u),i(u,r),P(r,l[0]),i(u,k),i(u,b),i(u,L),i(u,m),P(m,l[1]),i(u,N),Y(_,u,null),i(e,E),i(e,w),H=!0,F||(O=[B(r,"input",l[5]),B(m,"input",l[6]),B(u,"submit",X(l[4]))],F=!0)},p(n,[p]){n[3]?a?p&8&&M(a,1):(a=V(n),a.c(),M(a,1),a.m(e,S)):a&&(re(),A(a,1,1,()=>{a=null}),ae()),p&1&&r.value!==n[0]&&P(r,n[0]),p&2&&m.value!==n[1]&&P(m,n[1]);const c={};p&4&&(c.loading=n[2]),p&256&&(c.$$scope={dirty:p,ctx:n}),_.$set(c)},i(n){H||(M(a),M(_.$$.fragment,n),H=!0)},o(n){A(a),A(_.$$.fragment,n),H=!1},d(n){n&&C(t),a&&a.d(),Z(_),F=!1,ee(O)}}}function he(l,t,e){let s="",d="",$=!1,f=!1;const T=r=>{le.update(()=>({user:r.user,token:r.token}))},I=async()=>{e(2,$=!0),e(3,f=!1),oe.post("/auth/login",{username:s,password:d}).then(r=>{if(r.ok){const{token:k}=r.data;T(r.data),ue("user",JSON.stringify(r.data.user)),ie.setHeader("Authorization",`Bearer ${k}`),ce(k),ne("/",{replaceState:!0})}else e(3,f=!0);e(2,$=!1)}).catch(()=>{e(3,f=!0)})};function S(){s=this.value,e(0,s)}function u(){d=this.value,e(1,d)}return[s,d,$,f,I,S,u]}class ke extends te{constructor(t){super(),se(this,t,he,ge,K,{})}}export{ke as component};