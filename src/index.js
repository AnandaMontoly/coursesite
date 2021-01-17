import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './Site.scss';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Cal from './CalWithTips.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';


class HomeText extends React.Component {
  constructor () {
    super();
  }
  render () {
    return (
      <div>
        <h1>What is Intro to Intro?</h1>
        <p>
          Intro to Intro to Data Structures is a January bridge workshop series targeted at Smith College students who have
          already taken CSC 111 or another intro Python programming course and want to prepare for CSC 212, Data Structures.
          Over the course of the series, participants will be introduced to concepts of set theory, logic,
          the command line, and Java. A software engineer from Google will come for a Q and A as well. The workshop curriculum was designed
          with the active guidance of the CSC 111 and CSC 212 professors. Office hours will be
          held once weekly.
          <br /><br />
          Participants should come into the workshop series comfortable with programming in Python and a willingness to ask questions. A basic idea of
          what <a href="https://en.wikipedia.org/wiki/Object-oriented_programming" alt="Wikipedia article on Object Oriented Programming.">Object-Oriented Programming</a> entails is also recommended.

        </p>
        <h1>Contact me</h1>
        You can either email me at <a href="mailto:amontoly@smith.edu">amontoly@smith.edu</a> or reach out to me on discord! Here is the discord invite link: <a href="https://discord.gg/qcysGcqvrA">https://discord.gg/qcysGcqvrA</a>


        <h1>What will the schedule be?</h1>
        <p>
        Workshops will be held on Saturday at 10 AM EST and Wednesdays at 2 PM EST starting on January 2nd. The Wednesday and Saturday sessions each week will cover the same
        material, so feel free to attend either of them. There's no need to attend both. For the second week of workshops, a speaker will be coming on January 13th so the corresponding Saturday
        session will be extra office hours.<br /><br /> You can join a Saturday class meeting with <a href="https://smith.zoom.us/j/98318277983">this link here</a>.
        Our 2 PM EST Wednesday meeting is linked <a href="https://smith.zoom.us/j/95784948992">here</a> and our Thursday 2 pm EST office hours are <a href="https://smith.zoom.us/j/93625535658">here.</a>Sunday office hours at 10 PM EST are held using <a href="https://smith.zoom.us/j/96991201918">this link!</a><br /><br />
        To sign up for the session with Google, please use <a href="http://goo.gle/2XjZJfs">this link before Tuesday, January 12th at 5 PM!</a>
        <br /><br />
        <Row>
          <Col xs={3}>
          </Col>
          <Col xs ={6}>
            <Cal />
          </Col>
          <Col xs={3}>
          </Col>
        </Row>
        </p>
      </div>
    )
  }
}

class SuppMaterial extends React.Component {
  constructor () {
    super();
  }
  render () {
    return (
      <div>
      <h1>Supplemental Reading</h1>
        <p>
          For those of you who would like to learn more about the ideas we've touched on this class, here are a few resources that I really like.
          Note! Like all things in this class, these readings are NOT mandatory. While they can help you out and make you feel more comfortable with the material,
          you don't need them to succeed. Also like everything in the class, these readings are completely free *cough cough*.
          <br /><br />
          <h3>How to Prove It</h3>
          <a href="http://users.metu.edu.tr/serge/courses/111-2011/textbook-math111.pdf" alt="PDF of How to Prove It">How to Prove It</a> is one of the classic textbooks on
          discrete mathematics and logic. For those of you who want to develop a deeper understanding of sets, relations, and logic, this is a great resource.
          Other ideas touched on in the book, including proofs and induction (!!!) will show up over and over again in your computer science career. Notably,
          algorithms, theory of computation, and of course, discrete math will explore these ideas.
          <br /><br />
          <h3>A Common Sense Guide to Data Structures and Algorithms</h3>
          <a href="https://github.com/bat67/awesome-algorithm-books/blob/master/classic%20algorithms/A%20Common-Sense%20Guide%20to%20Data%20Structures%20and%20Algorithms%20-%20Level%20Up%20Your%20Core%20Programming%20Skills.epub" alt="EPUB of a Common Sense Guide">
          A Common Sense Guide to Data Structures and Algorithms</a> is a great guide to data structures for beginners. It is the most accessible textbook that I've
          found on the topic from a learning perspective. One note - this file is an epub file instead of a pdf. If you don't already have an epub viewer installed
          on your computer, you can download the Nook book viewer from Barnes and Noble or the Calibre open source epub reader. I've linked the Calibre reader <a href="https://calibre-ebook.com/download" alt="Calibre Download Guide">here.</a>
          <br /><br />
          <h3>W3Schools</h3>
          <a href="https://www.w3schools.com/java/">W3Schools</a> is an <i>amazing</i> resource for those of you who want to practice more Java. There are activities
          which let you try out your code, guides to new concepts, and lots and lots of examples. I highly recommend it for those of you who want to try out some Java.
          <br /><br />
          <h3>Reducible</h3>
          <a href="https://www.youtube.com/channel/UCK8XIGR5kRidIw2fWqwyHRA/videos" alt="Reducible YouTube Channel">Reducible</a> is a YouTube channel dedicated to talking through data structures and algorithms concepts
          with clear graphics. For those audiovisual learners out there, I highly recommend his videos. Not all will be relevant to either these workshops or CSC 212 (Dynamic Programming, Fourier Transformations, etc)
          but the rest are related to material that you will later go over.<br /><br />
          <h3>CSC 212 Wiki</h3>
          This <a href="https://jjfiv.github.io/ds4j/Sorting2.html">wiki</a> was written by the CSC 212 professor last year for his class during the transition to virtual classes. They're an amazing source and
          I highly recommend using them as a reference. A special thanks to John Foley IV at Middlebury College for this material!
        </p>
      </div>
    )
  }
}

class GoogleText extends React.Component{
  render (){
    return (
      <div>
      <h3>Interested in Google opportunities and further resources?</h3>

      We recommend browsing the Google Students Careers page for opportunities of interest, and turning on job alerts for your search so you receive an email each time an opportunity that falls within your search becomes available!<br /><br />


      Browse opportunities and setup job alerts at: <b><a href="https://careers.google.com/students/?src=Online%2FTOPs%2FNA%20Tech%20University%20Email&utm_campaign=googlestudents-postevent&utm_medium=jobposting&utm_source=email">google.com/students.</a></b> <br /><br />


      **For more resources and tips, visit <b><a href="https://careersonair.withgoogle.com/?utm_medium=direct_message&utm_source=email&utm_campaign=coa-postevent&src=Online/TOPs/NA%20Tech%20University%20Email">Careers OnAir</a></b> for online video programming coming up, Google's <b><a href="https://techdevguide.withgoogle.com/">Tech Dev Guide</a>, and <a href="https://buildyourfuture.withgoogle.com/?utm_medium=jobposting&utm_source=email&utm_campaign=byf-postevent&src=Online/TOPs/NA%20Tech%20University%20Email">g.co/buildyourfuture.</a></b><br /><br />


      <p>Jump-start your career with Google Cloud!</p><br /><br />

      The <b><a href="https://g.co/learncloud/student-benefits">higher education learning center</a></b> from Google Cloud provides students with 200 free Qwiklab training credits, discounts on professional certifications, and up to $1000 in cloud research credits. <b><a href="http://goo.gle/virtualswag">Claim your benefits!</a></b><br /><br />

      Questions? Reach out to: <a href="cloudedusupport@google.com">cloudedusupport@google.com</a><br /><br />


      </div>
    )
  }
}

class ClassText extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div>
        <h1>Set Theory</h1>
        <p>
          In this workshop, we will introduce ourselves, go over the basics of set theory, and learn set operations. We will also explore sequences and set relations.<br />
          <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR7b2F4E0y6k3WRljpnNdyRNjWG7o1Y9QK-MHQkXRk9BXDJ1Oi06MpN_zvGTjA1ou73KgqRP59b22ul/embed?start=false&loop=false&delayms=3000" frameborder="0" width="720" height="427" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe><br />
          <h3>Zoom Recording</h3>
          You can watch a recording of the lecture portion <a href="https://smith.zoom.us/rec/share/8iTtf-gFmfvEK5o5Cyx5FdT1MnRhQFo6TnkSkPq__ZUMNjS6AIVrDLIL-9CnZRvP.mAtGPCDBC0c_e4d6">here.</a> Passcode is =1sU&c2n
          <h3>Practice Activity</h3>
          There are multiple trick questions on this activity.<br />
          1<br />A set is<br />A)  a collection of non repeating elements disregarding order<br />B) a group of ordered elements<br />C) a collection of elements which can repeat <br />D) a finite collection of elements<br />ANSWER: A<br /><br />2<br />IF A and B are two sets where A= {'{'}a, b, c{'}'} and B = {'{'}c, a, b{'}'}:<br />A) A is equal to B<br />B) A is not equal to B|<br />C) you cannot tell if they are equal or not<br />D) A is greater than B<br />ANSWER: A<br /><br />3<br />IF A and B are two sets where A= {'{'}a, b, c, d{'}'} and B = {'{'}c, a, b{'}'}:<br />A) B is a subset of A<br />B) A - B = B - A<br />C) A U B = B<br />D) B is not a subset of A<br />ANSWER: A<br /><br />4<br />IF A and B are two sets where A= {'{'}a, b, c, d{'}'} and B = {'{'}c, a, b{'}'}:<br />A) B - A = 0 and |A| - |B| = 1<br />B) B - A = B and |A| - |B| = 0<br />C) B - A = A and |A| - |B| = 1<br />D)  B - A = 0 and |A| - |B| = 3<br />ANSWER: A<br /><br />5<br />See set D, D={'{'} x | x is an integer and 0 &lt;=  x  &lt;=  9{'}'}.  What is D <br />A)  is the set of all digits<br />B)  is the set of all positive numbers less than 10<br />C)  is an interval between 0 and 9 that is [0,9]<br />D) is a set of {'{'}0,1,2,3,4,5,6,7,8,9,10{'}'}<br />ANSWER: A<br /><br />6<br />We call CARDINAL of a set the size of the set( |D|=size of D). <br />If D={'{'}x|x is an integer and 0&lt;=x &lt;=9{'}'}. Choose:<br />A) |D| = 10<br />B) |D|= 9<br />C) |D| = 8<br />D) D is infinite<br />ANSWER: A<br /><br />7<br />We say x is a MEMBER of set A if x is an element of A. <br />If D={'{'}x|x is an integer and 0&lt;x&lt;5{'}'}. Choose correct statement:<br />A) 0 is member of D<br />B) 5 is member of D<br />C) 1 is member of D<br />D) 6 is member of D<br />ANSWER: C<br /><br />8<br />UNION of 2 sets: A U B={'{'}x|x member of A or x member of B{'}'}. <br />Consider A={'{'}a,b,c,d{'}'} and B ={'{'}a,f{'}'} then   <br />A) A U B  =  {'{'}a,b,c,d{'}'}<br />B) A U B  =  {'{'}a,b,c,d,f{'}'}<br />C) A U B  =  {'{'}a,a,b,c,d,f{'}'}<br />D) A U B  =  {'{'}a{'}'}<br />ANSWER: B<br /><br />9<br />UNION of 2 sets: A U B={'{'}x|x member of A or x member of B{'}'}. <br />Consider A={'{'}a,b{'}'} and  B ={'{'}b,a,f{'}'} then   <br />A) A U B  =  {'{'}a,b,a,b,f{'}'}<br />B) A U B  =  {'{'}a,b,f{'}'}<br />C) A U B  =  {'{'}a,a,b,c,d,f{'}'}<br />D) A U B  =  {'{'}a{'}'}<br />ANSWER: B<br /><br />10<br />INCLUSION. Set A is included in set B  when all  x in A are in B. <br />Which statement is false?<br />A) A ={'{'}e,b{'}'}  and B={'{'}a,b,c,d,e{'}'} then A is included in B<br />B) A ={'{'}a,b,c,d,e{'}'} and B={'{'}a,b,c,d,e{'}'} then A is included in B<br />C) A ={'{'}m , b{'}'} and B={'{'}a,b,c,d,e{'}'} then A is included in B<br />D) A ={'{'}e , b{'}'} and B={'{'}a,b,e{'}'} then A is included in B<br />ANSWER: C<br /><br />11<br />INCLUSION. Set A is included in set B  when all  x in A are in B. <br />Which statement is false?<br />A)  We have  for all sets A is included in A  <br />B)  The empty set is included in all sets<br />C)  A is included in the union of A with B<br />D)  A is included in the interestion of A and B.<br />ANSWER: D <br /><br />12<br />SET INTERSECTION:\tA Intersection B = {'{'}x |x is in  A  and x is in  B{'}'}. <br />If A={'{'}a,b,c,d{'}'} and B ={'{'}a,f{'}'} then:<br />A) A  Intersection  B = {'{'}a,a{'}'}<br />B) A  Intersection  B = {'{'}a,f{'}'}<br />C) A  Intersection  B = 0 (the empty set)<br />D) A  Intersection  B = {'{'}a{'}'}<br />ANSWER: D <br /> <br />13<br />SET DIFFERENCE: A - B = {'{'} x | x is in A and x is NOT in B{'}'}.<br />If A = {'{'}a,b,c,d{'}'} and  B = {'{'}a,f{'}'}  then  <br />A) A - B = {'{'} b,c,d,f {'}'} and then B - A = {'{'} f {'}'}<br />B) A - B = {'{'}a,b,c {'}'} and then B - A = {'{'} f {'}'}<br />C) A - B = {'{'} f {'}'} and then B - A = {'{'} f {'}'}<br />D) A - B = {'{'} b,c,d {'}'} and then B - A = {'{'} f {'}'}<br />ANSWER: D <br /><br />14<br />DISJOINT. Two sets are disjoint if  there intersection is empty. <br />Which sets are not disjoint?<br />A) A = {'{'} b,c,d {'}'} and B = {'{'} f {'}'}<br />B) A = {'{'} b,c,d {'}'} and B = {'{'} a,f {'}'}<br />C) A = {'{'} b,c,d {'}'} and B = {'{'} b,e,f{'}'}<br />D) A = {'{'} b,c,d {'}'} and B = {'{'} f {'}'}<br />ANSWER: C<br /><br />15<br />Which statement is false?<br />A) If  A – B = A and B – A =  B then A and B are disjoint<br />B) If A Intersection B = 0 then   A – B =  A <br />C) If A  U  B  = |A| + |B| then A - B = A ?<br />D) A – B = B – A <br />ANSWER: D<br /><br />16<br />Can A – B = A where A is not the empty set?<br />A) yes if A and B are disjoint<br />B) yes if A is included in B<br />C) yes if B is included in A<br />D)yes only if B the empty set<br />ANSWER: A<br /><br />17<br />Let  A = {'{'} n | n = 2 k + 1 and n &lt; 100 and k is integer  0 &lt;= k &lt; 50 {'}'}.<br />What is  |A| = ?<br />A) 50<br />B) 48<br />C) 49<br />D) 51<br />ANSWER: A<br /><br />18<br />Let  A U B = {'{'}a,b,c,d,e{'}'} and A - B ={'{'}a , b{'}'} and B - A = {'{'}e{'}'}. <br />Find A Intersection B = ?<br />A) A Intersection B = {'{'}c , d{'}'}<br />B)  A Intersection B = {'{'}a,b,c , d{'}'}<br />C)  A Intersection B = {'{'}c,d,e{'}'}<br />D)  cannot determine<br />ANSWER: A<br /><br />19<br />If A is included in B. Which statement is false?<br />A)  A Intersection B = A<br />B)  A U B = B<br />C)  A - B = 0<br />D)  B - A = 0<br />ANSWER: D<br /><br />20<br />If A = {'{'}x |x = 2k + 1{'}'} and B = {'{'}x | x = 2k{'}'} k is an integer k &gt;= 0, <br />find the cardinality of A Intersection B = ? <br />A)  1<br />B)  2<br />C)  3<br />D)  0<br />ANSWER: D<br /><br />21<br />Which statement is always false?<br />A) (A – B) U (B - A) = (A U B)<br />B)  (A – B) U  B =  A U B  <br />C)  (A- B) U A = A <br />D)  (A Intersection B) - B  = 0  <br />ANSWER: A<br /><br />22<br />Which statement is always false?<br />A) (A Intersection B) U B = B<br />B)  (A  U  B ) U B =  A U B  <br />C)  (A U B) - A = 0 <br />D)  (A Intersection B) U (A U B) = A  <br />ANSWER: D<br /><br />23<br />Find A and B, two NON-disjoint sets if A U B={'{'}a,b,c{'}'}, <br />a is in A-B and B-A={'{'}b{'}'}:<br />A) A= {'{'}a,c{'}'} , B = {'{'}b,c{'}'}<br />B) A= {'{'}a{'}'} , B = {'{'}b,c{'}'}<br />C) A= {'{'}a{'}'} , B = {'{'}b{'}'}<br />D) A= {'{'}a,b,c{'}'} , B = {'{'}b,c{'}'}<br />ANSWER: A<br /> <br />24<br />If  |A|=20 and |B|= 15  and |A U B|=30  find |A interestion B |= ?<br />A) 5<br />B) 10<br />C) 0<br />D) 15<br />ANSWER: A<br /><br />25<br />If  |A|=20 and |B|=15 and |A Intersection B |=15 find |A U B| = ?<br />A) 20<br />B) 10<br />C) 0<br />D) 15<br />ANSWER: A<br /><br />26<br />Find sets A and B is |A| = 2, |B| = 2 and  A U B = {'{'}a,b,c,d{'}'} <br />and  A - B is included in {'{'}a,b{'}'}:<br />A) A = {'{'}a,b{'}'}, B = {'{'}c,d{'}'}<br />B) A = {'{'}a,c{'}'}, B = {'{'}d,b{'}'}<br />C) A = {'{'}c,d{'}'}, B = {'{'}a,b{'}'}<br />D) all answers are right, as A and B are disjoint<br />ANSWER: D<br /><br />


          <h3>Outside Resources</h3>
          <a href="https://www.khanacademy.org/math/statistics-probability/probability-library#basic-set-ops">Khan Academy videos</a><br />
          <a href="https://en.wikipedia.org/wiki/Set_theory">Wikipedia article on set theory</a>
        </p>
      </div>
    )
  }
}

class AboutText extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div>
        <h1>About the Workshops</h1>
        <p>
          Funding for this workshop series was provided by the Smith research fund with professor Mihaela Malita as the advisor. These workshops
          are being taught by Ananda Montoly, Computer Science student at Smith College, with professors Mihaela Malita and Jordan Crouser overseeing the curriculum.
          These workshops are NOT for any Smith College credit.
          For more information, please contact me at <a href="mailto:amontoly@smith.edu">amontoly@smith.edu</a> or reach out to me on Discord.
        </p>
      </div>
    )
  }
}

class LogicText extends React.Component {
  render () {
    return (
      <div>
      <h1>Logic</h1>
      <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQSvcA7yn7U5Gm44MR_7N8WCvZdgSRYs_zwVsGKleq7CL1674czW2dH4MATAxV16ntI3sj3gMjD_sp6/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      <a href="https://smith.zoom.us/rec/share/qdZ4cq-Av6SPMHt7jpSoRtDAbBdgg00CD9Ri3zdumiLnm260O0yZWaqjcl5uQ0TZ.t6FSGV4Sf2Byzd0P">Link to the Zoom recording for this lecture.</a> Passcode is ?j@1M+2J
      <h1>Practice Problems</h1>
      1<br />This operator represents the logical AND.<br />A. ++<br />B. ||<br />C. &&<br />D. @<br /><br />2<br />This operator takes an operand and reverses its truth/falsehood.<br />A. ||<br />B. relational<br />C. arithmetic<br />D. !<br /><br />3<br />What is logical is equivalent with ( not(x and y)), where x, y are boolean variables?<br />A. x or y <br />B. not(x) and not(y) <br />C. not(x) and y<br />D. not(x) or not(y)<br /><br />4<br />What is the value of: (true && false) || false ?<br />A. true<br />B. false<br />C. error<br />D. i don't know<br /><br />5<br />What is the value of (! (true && p) || ! false ), where p is a boolean variable:<br />A. truesometimes<br />B. false<br />C. depends on the value of p<br />D. true whatever the value of p<br /><br />6<br />What is the value of: (! (true && p) || ! p ), where p is a boolean variable:<br />A. truesometimes<br />B. false<br />C. depends on the value of p<br />D. true whatever the value of p<br /><br />7<br />What is the value of: (! (p && !p) || ! p ), where p is a boolean variable:<br />A. truesometimes<br />B. false<br />C. depends on the value of p<br />D. true whatever the value of p<br /><br />8<br />What is the value of: (! p ||  p ), where p is a boolean variable:<br />A. truesometimes<br />B. false<br />C. depends on the value of p<br />D. true whatever the value of p<br /><br />9<br />What is the value of: (! p &&  p) , where p is a boolean variable:<br />A. truesometimes<br />B. false<br />C. depends on the value of p<br />D. false whatever the value of p<br /><br />10<br />If exp = (!x && y) || y ) is false, what would be the value for x and y?><br />A. y = true and x = true<br />B. y = false and x = false<br />C. y = false and x = true<br />D. y = false (does not matter what x is )<br /><br />11<br />When (!x && y) || (x && !y)  will be true?<br />A. y = true, x = true<br />B. y = false, x = false<br />C. never<br />D. when x and y have different truth values<br /><br />

      </div>
    )
  }
}

class Tabs extends React.Component {
  constructor () {
    super();
  }
  render() {
    return (
    <div id="encloses">
      <Tab.Container id="pagecontent" defaultActiveKey="home">
        <Row style={{marginLeft:"1px", marginRight:"1px"}}>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="first">Sets Workshop</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="google">Google Workshop</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="logic">Logic Workshop</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="supp">Resources</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="about">About</Nav.Link>
              </Nav.Item>

            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="home">
                <HomeText />
              </Tab.Pane>
              <Tab.Pane eventKey="first">
                <ClassText />
              </Tab.Pane>
              <Tab.Pane eventKey="google">
                <GoogleText />
              </Tab.Pane>
              <Tab.Pane eventKey="logic">
                <LogicText />
              </Tab.Pane>
              <Tab.Pane eventKey="supp">
                <SuppMaterial />
              </Tab.Pane>
              <Tab.Pane eventKey="about">
                <AboutText />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
  }
}
class Header extends React.Component {
  constructor() {
    super();
  }
  render () {
    return (
      <div>
        <Jumbotron fluid style={{backgroundColor:"#326128", paddingTop:"25px", paddingBottom:"25px", color:"#fffffc"}}>
          <Container>
            <h1>Intro to Intro to Data Structures</h1>
            <h3>J-Term 2021</h3>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}

class Page extends React.Component {
  constructor () {
    super();
  }
  componentDidMount(){
    document.title = "Course Site"
  }

  render () {
    return (<div style={{backgroundColor:"#fffffc"}}>
        <Header />
        <Tabs />
      </div>
    )
  }
}

const HomePage = () => {
  return (
    <Page />
  );
};

ReactDOM.render(
    <Router>
      <Route path='/' render={HomePage} />
    </Router>, document.getElementById('root'));
