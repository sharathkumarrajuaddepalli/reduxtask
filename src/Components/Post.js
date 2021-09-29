import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {deletePost} from '../actions/postAction'

class Post extends React.Component{
    constructor(props){
        super(props);
        this.state={
            post: null
        }
    }
    // componentDidMount(){
    //     let id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
    //         .then(res =>{
    //             this.setState({
    //                 post: res.data
    //             })
                
    //         })
        
    // }
    handleClick=()=>{
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
render(){
    console.log(this.props);
    const post = this.props.post ? (<div>
        <h4>{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
            <button onClick={this.handleClick}>Delete Post</button>
        </div>
    </div>): (<div>
        Loading posts...</div>);
    return(
        <div className="container">
            <h4>{post}</h4>
        </div>
    );
}
}
const mapStateToProps =(state,ownProps)=>{
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post=> post.id===id)
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        deletePost: (id) =>{
            dispatch(deletePost(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);