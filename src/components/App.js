import React from"react";
import SearchBar from "./SearchBar"
import Youtube from "../api/youtube"
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail"

class App extends React.Component {
    state = {videos : [], SelectedVideo : null}

    componentDidMount(){
        this.onTermSubbit('building')
    }

    onClickFunc = (video)=>{
        this.setState({SelectedVideo:video})
    }

    onTermSubbit = async(term) => {

        const response = await Youtube.get('/search',{
            params:{
                q: term
            }
        // }).then(data =>{
        //     this.setState({videos :data.data.items})
        // },(err)=>console.log(err))
        
    }
    )
    this.setState({videos :response.data.items, SelectedVideo:response.data.items[0]})
    }

    render(){
        return (
            <div className ="ui container">
                <SearchBar onTermSubbit={this.onTermSubbit}/>
                <div className="ui grid">
                <div className="grid row">
                <div className="eleven wide column">
                    <VideoDetail video={this.state.SelectedVideo}/>
                </div>
                <div className="five wide column">
                    <VideoList videos={this.state.videos} onClickFunc={this.onClickFunc}/>                
                </div>
                </div>
                </div>

            </div>
            )
    }
}

export default App

