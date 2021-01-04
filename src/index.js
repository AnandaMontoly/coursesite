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
        material, so feel free to attend either of them. For the second week of workshops, a speaker will be coming on January 13th so the corresponding Saturday
        session will be extra office hours.<br /><br /> You can join a Saturday class meeting with <a href="https://smith.zoom.us/j/98318277983">this link here</a>.
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
          but the rest are related to material that you will later go over.
        </p>
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
          A set is<br />A)  a collection of non repeating elements disregarding order<br />B) a group of ordered elements<br />C) a collection of elements which can repeat <br />D) a finite collection of elements<br /><br />IF A and B are two sets where A&#61; &#123;a, b, c&#125; and B &#61; &#123;c, a, b&#125;:<br />A) A is equal to B<br />B) A is not equal to B|<br />C) you cannot tell if they are equal or not<br />D) A is greater than B<br /><br />IF A and B are two sets where A&#61; &#123;a, b, c, d&#125; and B &#61; &#123;c, a, b&#125;:<br />A) B is a subset of A<br />B) A - B &#61; B - A<br />C) A U B &#61; B<br />D) B is not a subset of A<br /><br />IF A and B are two sets where A&#61; &#123;a, b, c, d&#125; and B &#61; &#123;c, a, b&#125;:<br />A) B - A &#61; 0 and |A| - |B| &#61; 1<br />B) B - A &#61; B and |A| - |B| &#61; 0<br />C) B - A &#61; A and |A| - |B| &#61; 1<br />D)  B - A &#61; 0 and |A| - |B| &#61; 3<br /><br />See set D, D&#61;&#123; x | x is an integer and 0 &lt;&#61;  x  &lt;&#61;  9&#125;.  What is D <br />A)  is the set of all digits<br />B)  is the set of all positive numbers less than 10<br />C)  is an interval between 0 and 9 that is [0,9]<br />D) is a set of &#123;0,1,2,3,4,5,6,7,8,9,10&#125;<br /><br />We call CARDINAL of a set the size of the set( |D|&#61;size of D). <br />If D&#61;&#123;x|x is an integer and 0&lt;&#61;x &lt;&#61;9&#125;. Choose:<br />A) |D| &#61; 10<br />B) |D|&#61; 9<br />C) |D| &#61; 8<br />D) D is infinite<br /><br />We say x is a MEMBER of set A if x is an element of A. <br />If D&#61;&#123;x|x is an integer and 0&lt;x&lt;5&#125;. Choose correct statement:<br />A) 0 is member of D<br />B) 5 is member of D<br />C) 1 is member of D<br />D) 6 is member of D<br /><br />UNION of 2 sets: A U B&#61;&#123;x|x member of A or x member of B&#125;. <br />Consider A&#61;&#123;a,b,c,d&#125; and B &#61;&#123;a,f&#125; then   <br />A) A U B  &#61;  &#123;a,b,c,d&#125;<br />B) A U B  &#61;  &#123;a,b,c,d,f&#125;<br />C) A U B  &#61;  &#123;a,a,b,c,d,f&#125;<br />D) A U B  &#61;  &#123;a&#125;<br /><br />UNION of 2 sets: A U B&#61;&#123;x|x member of A or x member of B&#125;. <br />Consider A&#61;&#123;a,b&#125; and  B &#61;&#123;b,a,f&#125; then   <br />A) A U B  &#61;  &#123;a,b,a,b,f&#125;<br />B) A U B  &#61;  &#123;a,b,f&#125;<br />C) A U B  &#61;  &#123;a,a,b,c,d,f&#125;<br />D) A U B  &#61;  &#123;a&#125;<br /><br />INCLUSION. Set A is included in set B  when all  x in A are in B. <br />Which statement is false?<br />A) A &#61;&#123;e,b&#125;  and B&#61;&#123;a,b,c,d,e&#125; then A is included in B<br />B) A &#61;&#123;a,b,c,d,e&#125; and B&#61;&#123;a,b,c,d,e&#125; then A is included in B<br />C) A &#61;&#123;m , b&#125; and B&#61;&#123;a,b,c,d,e&#125; then A is included in B<br />D) A &#61;&#123;e , b&#125; and B&#61;&#123;a,b,e&#125; then A is included in B<br /><br />INCLUSION. Set A is included in set B  when all  x in A are in B. <br />Which statement is false?<br />A)  We have  for all sets A is included in A  <br />B)  The empty set is included in all sets<br />C)  A is included in the union of A with B<br />D)  A is included in the interestion of A and B.<br /><br />SET INTERSECTION:\tA Intersection B &#61; &#123;x |x is in  A  and x is in  B&#125;. <br />If A&#61;&#123;a,b,c,d&#125; and B &#61;&#123;a,f&#125; then:<br />A) A  Intersection  B &#61; &#123;a,a&#125;<br />B) A  Intersection  B &#61; &#123;a,f&#125;<br />C) A  Intersection  B &#61; 0 (the empty set)<br />D) A  Intersection  B &#61; &#123;a&#125;<br /> <br />SET DIFFERENCE: A - B &#61; &#123; x | x is in A and x is NOT in B&#125;.<br />If A &#61; &#123;a,b,c,d&#125; and  B &#61; &#123;a,f&#125;  then  <br />A) A - B &#61; &#123; b,c,d,f &#125; and then B - A &#61; &#123; f &#125;<br />B) A - B &#61; &#123;a,b,c &#125; and then B - A &#61; &#123; f &#125;<br />C) A - B &#61; &#123; f &#125; and then B - A &#61; &#123; f &#125;<br />D) A - B &#61; &#123; b,c,d &#125; and then B - A &#61; &#123; f &#125;<br /><br />DISJOINT. Two sets are disjoint if  there intersection is empty. <br />Which sets are not disjoint?<br />A) A &#61; &#123; b,c,d &#125; and B &#61; &#123; f &#125;<br />B) A &#61; &#123; b,c,d &#125; and B &#61; &#123; a,f &#125;<br />C) A &#61; &#123; b,c,d &#125; and B &#61; &#123; b,e,f&#125;<br />D) A &#61; &#123; b,c,d &#125; and B &#61; &#123; f &#125;<br /><br />Which statement is false?<br />A) If  A – B &#61; A and B – A &#61;  B then A and B are disjoint<br />B) If A Intersection B &#61; 0 then   A – B &#61;  A <br />C) If A  U  B  &#61; |A| + |B| then A - B &#61; A ?<br />D) A – B &#61; B – A <br /><br />Can A – B &#61; A where A is not the empty set?<br />A) yes if A and B are disjoint<br />B) yes if A is included in B<br />C) yes if B is included in A<br />D)yes only if B the empty set<br /><br />Let  A &#61; &#123; n | n &#61; 2 k + 1 and n &lt; 100 and k is integer  0 &lt;&#61; k &lt; 50 &#125;.<br />What is  |A| &#61; ?<br />A) 50<br />B) 48<br />C) 49<br />D) 51<br /><br />Let  A U B &#61; &#123;a,b,c,d,e&#125; and A - B &#61;&#123;a , b&#125; and B - A &#61; &#123;e&#125;. <br />Find A Intersection B &#61; ?<br />A) A Intersection B &#61; &#123;c , d&#125;<br />B)  A Intersection B &#61; &#123;a,b,c , d&#125;<br />C)  A Intersection B &#61; &#123;c,d,e&#125;<br />D)  cannot determine<br /><br />If A is included in B. Which statement is false?<br />A)  A Intersection B &#61; A<br />B)  A U B &#61; B<br />C)  A - B &#61; 0<br />D)  B - A &#61; 0<br /><br />If A &#61; &#123;x |x &#61; 2k + 1&#125; and B &#61; &#123;x | x &#61; 2k&#125; k is an integer k &gt;&#61; 0, <br />find A Intersection B &#61; ? <br />A)  1<br />B)  2<br />C)  3<br />D)  0<br /><br />Which statement is always false?<br />A) (A – B) U (B - A) &#61; (A U B)<br />B)  (A – B) U  B &#61;  A U B  <br />C)  (A- B) U A &#61; A <br />D)  (A Intersection B) - B  &#61; 0  <br /><br />Which statement is always false?<br />A) (A Intersection B) U B &#61; B<br />B)  (A  U  B ) U B &#61;  A U B  <br />C)  (A U B) - A &#61; 0 <br />D)  (A Intersection B) U (A U B) &#61; A  <br /><br />Find A and B, two NON-disjoint sets if A U B&#61;&#123;a,b,c&#125;, <br />a is in A-B and B-A&#61;&#123;b&#125;:<br />A) A&#61; &#123;a,c&#125; , B &#61; &#123;b,c&#125;<br />B) A&#61; &#123;a&#125; , B &#61; &#123;b,c&#125;<br />C) A&#61; &#123;a&#125; , B &#61; &#123;b&#125;<br />D) A&#61; &#123;a,b,c&#125; , B &#61; &#123;b,c&#125;<br /> <br />If  |A|&#61;20 and |B|&#61; 15  and |A U B|&#61;30  find |A interestion B |&#61; ?<br />A) 5<br />B) 10<br />C) 0<br />D) 15<br /><br />If  |A|&#61;20 and |B|&#61;15 and |A Intersection B |&#61;15 find |A U B| &#61; ?<br />A) 20<br />B) 10<br />C) 0<br />D) 15<br /><br />Find sets A and B is |A| &#61; 2, |B| &#61; 2 and  A U B &#61; &#123;a,b,c,d&#125; <br />and  A - B is included in &#123;a,b&#125;:<br />A) A &#61; &#123;a,b&#125;, B &#61; &#123;c,d&#125;<br />B) A &#61; &#123;a,c&#125;, B &#61; &#123;d,b&#125;<br />C) A &#61; &#123;c,d&#125;, B &#61; &#123;a,b&#125;<br />D) all answers are right, as A and B are disjoint<br /><br />


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
                <Nav.Link eventKey="first">First Workshop</Nav.Link>
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
