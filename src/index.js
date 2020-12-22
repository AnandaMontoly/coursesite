import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Car from "./app.js";
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
        <h1>What will the schedule be?</h1>
        <p>
        Workshops will be held on Saturday at 10 AM EST and Wednesdays at 2 PM EST starting on January 2nd. The Wednesday and Saturday sessions each week will cover the same
        material, so feel free to attend either of them. For the second week of workshops, a speaker will be coming on January 13th so the corresponding Saturday
        session will be extra office hours.
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
        <h1>Welcome Class</h1>
        <p>
          This page isn't filled out yet (don't want to spoil the surprise) but this is where you'll be able to find information
          pertaining to the first class of this workshop series. On this page, you'll be able to access course activities,
          the slides used during the lecture, and a recording of the lecture's Saturday session.
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
                <Nav.Link eventKey="first">First Class</Nav.Link>
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
  render () {
    return (<div style={{backgroundColor:"#fffffc"}}>
        <Header />
        <Tabs />
      </div>
    )
  }
}
function HomePage = () => {
  return (
    <Page />
  )
}
ReactDOM.render(
    <Router>
      <Route path='/' render={HomePage} />
    </Router>, document.getElementById('root'));
