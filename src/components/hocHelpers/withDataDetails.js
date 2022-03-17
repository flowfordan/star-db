import React from "react";
import DetailsTeaser from "../common/DetailsTeaser/DetailsTeaser";


const withDataDetails = (View, getData, getImage) => {

    
    return class extends React.Component{

        constructor(props){
            super(props);
             this.state = {
                currentItem: null,
                image: null,
                isLoading: true,
                error: false
            };
        };
    
        componentDidMount(){
            this.updateItem();
            this.setState({isLoading: false})
        };
    
    
        componentDidUpdate(prevProps){
            if(this.props.itemId != prevProps.itemId){
               this.updateItem();
               this.setState({isLoading: true})
            }
            
        };
    
        updateItem(){
            const {itemId } = this.props;
            
            if(!itemId) {
                return;
            }
    
            getData(itemId)
            .then((currentItem) => {
                this.setState({
                currentItem, 
                isLoading: false,
                image: getImage(currentItem)})
            }).catch(this.onError);
        };
    
        onError = (err) => {
            this.setState({
                error: true,
            isLoading: false})
        };

        render(){

            const {currentItem, isLoading} = this.state;

            if(!currentItem && !isLoading){
                return(
                    <DetailsTeaser />   
                )
            }

            return (<View data={this.state} {...this.props}/>)
        };
    };

};

export default withDataDetails;
