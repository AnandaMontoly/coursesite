(this.webpackJsonpcoursesite=this.webpackJsonpcoursesite||[]).push([[0],{45:function(e,t,r){},52:function(e,t,r){"use strict";r.r(t);var o=r(7),a=r(8),n=r(10),s=r(9),c=r(2),i=r(0),l=r.n(i),h=r(12),u=r.n(h),d=function(e){Object(n.a)(r,e);var t=Object(s.a)(r);function r(e){var a;return Object(o.a)(this,r),(a=t.call(this,e)).mood=function(){"jamming"==a.state.music?a.setState({music:"sad"}):a.setState({music:"jamming"})},a.state={color:"red",music:"jamming"},a}return Object(a.a)(r,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h2",{children:["My name is Car. I am ",this.state.color,". I am a ",this.props.cartype.brand," car."]}),Object(c.jsxs)("p",{children:["I low key be ",this.state.music]}),Object(c.jsx)("button",{type:"button",onClick:this.mood,children:"change your mood"})]})}}]),r}(l.a.Component),j=(l.a.Component,r(45),r(21)),b=r(36),m=r(33),O=r(18),f=r(13),p=r(35),x=r(38),g=r(37),v=r(34),y=r(39),w=r(31),k=r.n(w);var C=function(e){Object(n.a)(r,e);var t=Object(s.a)(r);function r(e){return Object(o.a)(this,r),t.call(this,e)}return Object(a.a)(r,[{key:"render",value:function(){return Object(c.jsx)(y.a,{placement:"right",delay:{show:250,hide:400},overlay:Object(c.jsx)(v.a,{id:"button-tooltip",children:this.props.text}),children:Object(c.jsx)("p",{children:Object(c.jsx)("b",{children:"!"})})})}}]),r}(l.a.Component),S=function(e){Object(n.a)(r,e);var t=Object(s.a)(r);function r(e){return Object(o.a)(this,r),t.call(this,e)}return Object(a.a)(r,[{key:"render",value:function(){switch(this.props.date){case 2:case 6:return Object(c.jsx)(C,{text:"Welcome Class!"});case 9:return Object(c.jsx)(C,{text:"Extra Office Hours"});case 13:return Object(c.jsx)(C,{text:"Speaker from Google"});case 16:case 20:return Object(c.jsx)(C,{text:"OOP in Java"});case 23:case 27:return Object(c.jsx)(C,{text:"Set Theory and Logic"});case 30:case 3:return Object(c.jsx)(C,{text:"Data Structures"})}return Object(c.jsx)("p",{children:"fart"})}}]),r}(l.a.Component),I=function(){var e=Object(i.useState)(new Date),t=Object(x.a)(e,2),r=t[0],o=t[1],a=["01-02-2021","01-06-2021","01-09-2021","01-13-2021","01-16-2021","01-20-2021","01-23-2021","01-27-2021","01-30-2021","02-03-2021"];return Object(c.jsx)("div",{children:Object(c.jsx)(g.a,{onChange:o,value:r,className:["c1","c2"],tileClassName:function(e){var t=e.date;return"month"===e.view&&a.find((function(e){return e===k()(t).format("MM-DD-YYYY")}))?"specialDate":""},tileContent:function(e){var t=e.date;return"month"===e.view&&a.find((function(e){return e===k()(t).format("MM-DD-YYYY")}))?Object(c.jsx)(S,{date:t.getDate()}):Object(c.jsx)("br",{})}})})},D=function(e){Object(n.a)(r,e);var t=Object(s.a)(r);function r(){return Object(o.a)(this,r),t.call(this)}return Object(a.a)(r,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"What is Intro to Intro?"}),Object(c.jsxs)("p",{children:["Intro to Intro to Data Structures is a January bridge workshop series targeted at Smith College students who have already taken CSC 111 or another intro Python programming course and want to prepare for CSC 212, Data Structures. Over the course of the series, participants will be introduced to concepts of set theory, logic, the command line, and Java. A software engineer from Google will come for a Q and A as well. The workshop curriculum was designed with the active guidance of the CSC 111 and CSC 212 professors. Office hours will be held once weekly.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"Participants should come into the workshop series comfortable with programming in Python and a willingness to ask questions. A basic idea of what ",Object(c.jsx)("a",{href:"https://en.wikipedia.org/wiki/Object-oriented_programming",alt:"Wikipedia article on Object Oriented Programming.",children:"Object-Oriented Programming"})," entails is also recommended."]}),Object(c.jsx)("h1",{children:"What will the schedule be?"}),Object(c.jsxs)("p",{children:["Workshops will be held on Saturday at 10 AM EST and Wednesdays at 2 PM EST starting on January 2nd. The Wednesday and Saturday sessions each week will cover the same material, so feel free to attend either of them. For the second week of workshops, a speaker will be coming on January 13th so the corresponding Saturday session will be extra office hours.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsxs)(m.a,{children:[Object(c.jsx)(j.a,{xs:3}),Object(c.jsx)(j.a,{xs:6,children:Object(c.jsx)(I,{})}),Object(c.jsx)(j.a,{xs:3})]})]})]})}}]),r}(l.a.Component),P=function(e){Object(n.a)(r,e);var t=Object(s.a)(r);function r(){return Object(o.a)(this,r),t.call(this)}return Object(a.a)(r,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Supplemental Reading"}),Object(c.jsxs)("p",{children:["For those of you who would like to learn more about the ideas we've touched on this class, here are a few resources that I really like. Note! Like all things in this class, these readings are NOT mandatory. While they can help you out and make you feel more comfortable with the material, you don't need them to succeed. Also like everything in the class, these readings are completely free *cough cough*.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("h3",{children:"How to Prove It"}),Object(c.jsx)("a",{href:"http://users.metu.edu.tr/serge/courses/111-2011/textbook-math111.pdf",alt:"PDF of How to Prove It",children:"How to Prove It"})," is one of the classic textbooks on discrete mathematics and logic. For those of you who want to develop a deeper understanding of sets, relations, and logic, this is a great resource. Other ideas touched on in the book, including proofs and induction (!!!) will show up over and over again in your computer science career. Notably, algorithms, theory of computation, and of course, discrete math will explore these ideas.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("h3",{children:"A Common Sense Guide to Data Structures and Algorithms"}),Object(c.jsx)("a",{href:"https://github.com/bat67/awesome-algorithm-books/blob/master/classic%20algorithms/A%20Common-Sense%20Guide%20to%20Data%20Structures%20and%20Algorithms%20-%20Level%20Up%20Your%20Core%20Programming%20Skills.epub",alt:"EPUB of a Common Sense Guide",children:"A Common Sense Guide to Data Structures and Algorithms"})," is a great guide to data structures for beginners. It is the most accessible textbook that I've found on the topic from a learning perspective. One note - this file is an epub file instead of a pdf. If you don't already have an epub viewer installed on your computer, you can download the Nook book viewer from Barnes and Noble or the Calibre open source epub reader. I've linked the Calibre reader ",Object(c.jsx)("a",{href:"https://calibre-ebook.com/download",alt:"Calibre Download Guide",children:"here."}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("h3",{children:"W3Schools"}),Object(c.jsx)("a",{href:"https://www.w3schools.com/java/",children:"W3Schools"})," is an ",Object(c.jsx)("i",{children:"amazing"})," resource for those of you who want to practice more Java. There are activities which let you try out your code, guides to new concepts, and lots and lots of examples. I highly recommend it for those of you who want to try out some Java.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("h3",{children:"Reducible"}),Object(c.jsx)("a",{href:"https://www.youtube.com/channel/UCK8XIGR5kRidIw2fWqwyHRA/videos",alt:"Reducible YouTube Channel",children:"Reducible"})," is a YouTube channel dedicated to talking through data structures and algorithms concepts with clear graphics. For those audiovisual learners out there, I highly recommend his videos. Not all will be relevant to either these workshops or CSC 212 (Dynamic Programming, Fourier Transformations, etc) but the rest are related to material that you will later go over."]})]})}}]),r}(l.a.Component),A=function(e){Object(n.a)(r,e);var t=Object(s.a)(r);function r(e){return Object(o.a)(this,r),t.call(this,e)}return Object(a.a)(r,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Welcome Class"}),Object(c.jsx)("p",{children:"This page isn't filled out yet (don't want to spoil the surprise) but this is where you'll be able to find information pertaining to the first class of this workshop series. On this page, you'll be able to access course activities, the slides used during the lecture, and a recording of the lecture's Saturday session."})]})}}]),r}(l.a.Component),T=function(e){Object(n.a)(r,e);var t=Object(s.a)(r);function r(e){return Object(o.a)(this,r),t.call(this,e)}return Object(a.a)(r,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"About the Workshops"}),Object(c.jsxs)("p",{children:["Funding for this workshop series was provided by the Smith research fund with professor Mihaela Malita as the advisor. These workshops are being taught by Ananda Montoly, Computer Science student at Smith College, with professors Mihaela Malita and Jordan Crouser overseeing the curriculum. These workshops are NOT for any Smith College credit. For more information, please contact me at ",Object(c.jsx)("a",{href:"mailto:amontoly@smith.edu",children:"amontoly@smith.edu"})," or reach out to me on Discord."]})]})}}]),r}(l.a.Component),W=function(e){Object(n.a)(r,e);var t=Object(s.a)(r);function r(){return Object(o.a)(this,r),t.call(this)}return Object(a.a)(r,[{key:"render",value:function(){return Object(c.jsx)("div",{id:"encloses",children:Object(c.jsx)(O.a.Container,{id:"pagecontent",defaultActiveKey:"home",children:Object(c.jsxs)(m.a,{style:{marginLeft:"1px",marginRight:"1px"},children:[Object(c.jsx)(j.a,{sm:3,children:Object(c.jsxs)(f.a,{variant:"pills",className:"flex-column",children:[Object(c.jsx)(f.a.Item,{children:Object(c.jsx)(f.a.Link,{eventKey:"home",children:"Home"})}),Object(c.jsx)(f.a.Item,{children:Object(c.jsx)(f.a.Link,{eventKey:"first",children:"First Class"})}),Object(c.jsx)(f.a.Item,{children:Object(c.jsx)(f.a.Link,{eventKey:"supp",children:"Resources"})}),Object(c.jsx)(f.a.Item,{children:Object(c.jsx)(f.a.Link,{eventKey:"about",children:"About"})})]})}),Object(c.jsx)(j.a,{sm:9,children:Object(c.jsxs)(O.a.Content,{children:[Object(c.jsx)(O.a.Pane,{eventKey:"home",children:Object(c.jsx)(D,{})}),Object(c.jsx)(O.a.Pane,{eventKey:"first",children:Object(c.jsx)(A,{})}),Object(c.jsx)(O.a.Pane,{eventKey:"supp",children:Object(c.jsx)(P,{})}),Object(c.jsx)(O.a.Pane,{eventKey:"about",children:Object(c.jsx)(T,{})})]})})]})})})}}]),r}(l.a.Component),M=function(e){Object(n.a)(r,e);var t=Object(s.a)(r);function r(){return Object(o.a)(this,r),t.call(this)}return Object(a.a)(r,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(p.a,{fluid:!0,style:{backgroundColor:"#326128",paddingTop:"25px",paddingBottom:"25px",color:"#fffffc"},children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)("h1",{children:"Intro to Intro to Data Structures"}),Object(c.jsx)("h3",{children:"J-Term 2021"})]})})})}}]),r}(l.a.Component),J=function(e){Object(n.a)(r,e);var t=Object(s.a)(r);function r(){return Object(o.a)(this,r),t.call(this)}return Object(a.a)(r,[{key:"render",value:function(){return Object(c.jsxs)("div",{style:{backgroundColor:"#fffffc"},children:[Object(c.jsx)(M,{}),Object(c.jsx)(W,{})]})}}]),r}(l.a.Component);u.a.render(Object(c.jsx)(J,{}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.498feb5f.chunk.js.map