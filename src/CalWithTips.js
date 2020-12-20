import React, {useState} from 'react';
import ReactDOM from "react-dom";
import Calendar from 'react-calendar';
import Tooltip from 'react-bootstrap/Tooltip'
import Overlay from 'react-bootstrap/Overlay'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import moment from 'moment';


function Cal() {
  const [value, onChange] = useState(new Date());
  const classes = ['01-02-2021', '01-06-2021',
                  '01-09-2021', '01-13-2021',
                  '01-16-2021', '01-20-2021',
                  '01-23-2021', '01-27-2021',
                  '01-30-2021', '02-03-2021']
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        className={['c1','c2']}
        tileClassName= {({  date, view }) => view === 'month' && classes.find(x=>x===moment(date).format('MM-DD-YYYY')) ? 'specialDate' : ''}
        tileContent = {({  date, view }) => view === 'month' && classes.find(x=>x===moment(date).format('MM-DD-YYYY')) ? <CalTileContent date={date.getDate()}/> : <br />}
      />
    </div>
  );
}
class CalToolTip extends React.Component{
  constructor (props) {
    super(props);
  }
  render(){
    return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay= {
        <Tooltip id="button-tooltip">
            {this.props.text}
        </Tooltip>}
     >
     <p><b>!</b></p>
    </OverlayTrigger>
    )
  }
}
class CalTileContent extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    switch (this.props.date){
      case 2:
      case 6:
        return <CalToolTip text="Welcome Class!" />
        break;
      case 9:
        return <CalToolTip text="Extra Office Hours" />
        break;
      case 13:
        return <CalToolTip text="Speaker from Google" />
        break;
      case 16:
      case 20:
        return <CalToolTip text="OOP in Java" />
        break;
      case 23:
      case 27:
        return <CalToolTip text="Set Theory and Logic" />
        break;
      case 30:
      case 3:
        return <CalToolTip text="Data Structures" />
        break;
        }
    return <p>fart</p>;
  };
}
export default Cal;
