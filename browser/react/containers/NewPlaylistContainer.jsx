import React from 'react';
import NewPlayList from '../components/NewPlaylist'
import axios from 'axios'

export default class NewPlaylistContainer extends React.Component{
    constructor(){
        super()
        this.state={
            inputValue:"",
            buttonValidate:true,
            hiddenDiv: true
        }
            this.FilterChange = this.FilterChange.bind(this);
            this.onSubmitEvent = this.onSubmitEvent.bind(this);
        }
      
        FilterChange(e) {   
          const value= e.target.value
          this.setState({ inputValue: value });
          if(value.length<16 && value.length>0){
              this.setState({
                  buttonValidate:false,
                  hiddenDiv:true
                })
          }else{
              this.setState({
                  buttonValidate:true,
                  hiddenDiv:false
            })
          }
        }

        onSubmitEvent(e){
            e.preventDefault()
            this.props.createPlaylist(e.target.input.value)
            this.setState({inputValue:""})
        }

        render(){
            return (
                <NewPlayList FilterChange={this.FilterChange}
                onSubmitEvent={this.onSubmitEvent} stateValue={this.state.inputValue} buttonValidate={this.state.buttonValidate} hiddenDiv={this.state.hiddenDiv}/>
            )
        }
}