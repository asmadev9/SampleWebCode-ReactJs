import React, { Component } from "react";
import { firestore } from '../../firebase'
import dummyImage from '../../assets/images/dummy.png'
import { Modal } from 'react-bootstrap'
import GameRowCard from "./GameRowCard";
import {Link} from "react-router-dom";

export class Right extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      value:"",
      scheduleGames: null,
      loadingGames: true
    };
    this.arrayholder = [];

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);


  }

  componentDidMount() {
    firestore
    .collection('schedule_games')
    .orderBy("startTime", "desc")
    .get()
    .then(querySnapshot=>{
      let temp=[]
      querySnapshot.forEach(doc=>{
        temp.push({...{gid: doc.id}, ...doc.data()})
      })
      this.setState({scheduleGames: temp})
      this.setState({loadingGames: false})
    })
  }
  

  handleClose() {
      this.setState({ showModal: false });
  }

  handleShow() {
      this.setState({ showModal: true });
  }



  render() {
    return (
      <div id="wrapper">

        

        <div className="content">

          <Link to={`/admin/schedule-game`}>
            <button type="button" className="btn btn-success" style={{marginBottom: '25px'}}>
              Schedule game
            </button>
          </Link>


          <div className="row projects">

            {this.state.loadingGames &&
              <h3 style={{textAlign: 'center'}}>Loading...</h3>
            }


            <div className="col-lg-12">
              <div className="hpanel hgreen">
               {this.state.scheduleGames && this.state.scheduleGames.map((item, index)=>{
                 return <GameRowCard game={item} key={index} />
               })}
              </div>
            </div>
           


          </div>
        </div>

     




      </div>
    );
  }
}

export default Right;
