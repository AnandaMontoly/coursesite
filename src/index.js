import React from 'react';
import ReactDOM from 'react-dom';
import Car from "./app.js";
import './Site.scss';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';

class HomeText extends React.Component {
  constructor () {
    super();
  }
  render () {
    return (
      <div>
        <p>
          Welcome to Ananda's Cool Home Page for her Cool Class
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
        <p>
          Supplemental Material
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
      <p style={{color:"red"}}>
        God isn't finished with me yet.
      </p>
    )
  }
}
class Tabbies extends React.Component {
  constructor () {
    super();
  }
  render() {
    return (
    <div id="encloses">
      <Tab.Container id="pagecontent" defaultActiveKey="first">
        <Row style={{marginLeft:"1px"}}>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">First Class</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="supp">Resources</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <HomeText />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <ClassText />
              </Tab.Pane>
              <Tab.Pane eventKey="supp">
                <SuppMaterial />
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
        <Jumbotron fluid style={{backgroundColor:"#9fb0cc"}}>
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
        <Tabbies />
      </div>
    )
  }
}

ReactDOM.render(<Page />, document.getElementById('root'));
