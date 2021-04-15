import React, { Component } from "react";
import { firestore } from '../../firebase'
import dummyImage from '../../assets/images/dummy.png'
import { Modal } from 'react-bootstrap'
import QuestionRowItem from "./QuestionRowItem";

export class Right extends Component {
  constructor(props) {
    super(props);
    this.state = {
      QAGames: null
    };



  }

  componentDidMount() {
    /*firestore.collection('QAGames').get().then(querySnapshot=>{
      let temp=[]
      querySnapshot.forEach(doc=>{
        temp.push({...{qid: doc.id}, ...doc.data()})
      })
      this.setState({QAGames: temp})
    })*/
  }


  render() {
    return (
      <div id="wrapper">

        

        <div className="content">

          <button type="button" className="btn btn-success" data-toggle="modal" data-target="#addClassModal" style={{marginBottom: '25px'}}>
            Add New Question
          </button>


          <div className="row">
            <div className="col-lg-12">
              <div className="hpanel">
                <div className="panel-body">
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      value={this.state.value}
                      placeholder="Search questions.."
                      onChange={(event)=>this.searchFilterFunction(event.target.value)}
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-default">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="hpanel">

                  <div>
                    <div className="panel-body">
                      <table className="table table-striped table-bordered table-hover">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Question</th>
                            <th>Correct answer</th>
                            <th>Incorrect #1</th>
                            <th>Incorrect #2</th>
                            <th>Incorrect #3</th>
                          </tr>
                        </thead>
                        <tbody>

                          {this.state.QAGames && this.state.QAGames.map((item, index)=>{
                             return <QuestionRowItem key={index}/>
                           })}

                        </tbody>
                      </table>
                    </div>
                  </div>



              </div>
            </div>
           


          </div>
        </div>

     
      </div>
    );
  }
}

export default Right;
