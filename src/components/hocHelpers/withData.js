import React from "react";
import Spinner from "../Spinner/Spinner";
import SwapiService from "../../services/swapiService";

const withData = (View, getData) => {

    return class extends React.Component{
        
        constructor(props){
            super(props);
    
            this.state = {
                
                itemList: null,
                selectedItem: null,
                error: false,
                isLoading: true
                 
            }
        };
    
        
        componentDidMount(){
            getData().then((itemList) => {
                this.setState({
                    itemList, 
                    isLoading: false})
            }).catch(this.onError);
        };
    
        onError = (err) => {
            this.setState({
                error: true,
            isLoading: false})
        };
        
        
        render(){

            const {itemList} = this.state;

            if(!itemList){
                return <Spinner/>
            }

            return (<View data={this.state} {...this.props} />)

        };
    }

};

export default withData;
