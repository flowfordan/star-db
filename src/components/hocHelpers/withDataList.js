import React from "react";
import Spinner from "../common/Spinner/Spinner";

const withDataList = (View, getData) => {

    return class extends React.Component{
        
        constructor(props){
            super(props);
    
            //total pages
            //current page
            this.state = { 
                itemList: null,
                selectedItem: null,
                error: false,
                isLoading: true,
                itemsCount: 0,
                pagesCount: 1,
                itemsPerPage: 10, //from API
                currentPage: 1,
            }
        };
    

        countTotalPages = (total, perPage) => {
            return Math.ceil(total/perPage)
        }

        //set total pages
        componentDidMount(){
            getData().then((result) => {
                console.log(result)
                this.setState({
                    itemList: result.items, 
                    isLoading: false,
                    itemsCount: result.count,
                    pagesCount: this.countTotalPages(result.count, this.state.itemsPerPage),})
            }).catch(this.onError);

            console.log(this.state)
        };
    

        

        onError = (err) => {
            this.setState({
                error: true,
            isLoading: false})
        };
        
        

        render(){

            const onPageChange = () => {
            console.log('change page')
            }

            const {itemList} = this.state;

            if(!itemList){
                return <Spinner/>
            }

            return (<View data={this.state} {...this.props} onPageChange={onPageChange}/>)

        };
    }

};

export default withDataList;
