import React, {Component} from 'react';
import {connect} from 'react-redux'
import {deletePost} from '../actions/postActions';

class Post extends Component{

    handleClick = () =>{
        this.props.deletePost(this.props.posts.id);
        this.props.history.push('/');
    }

    render(){
        const posta = this.props.posts? (
            <div className="post card" key={this.props.posts.id}>
            <div className="card-content">
                <span className="card-title">{this.props.posts.title}</span>
                <p>{this.props.posts.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>Delete Post</button>
                </div>
            </div>
            </div>
        )
        : (
        <div className="center">No posts to show</div>
    );
        return(
            <div className="container">
                <h4>{posta}</h4>
            </div>
        )
    }
}

//state = state of the store
//ownProps= les props de ce component
const mapStateToProps = (state,ownProps) => {
    let id = ownProps.match.params.post_id;
    //let posta = state.posts.filter(xx=>xx.id === id);
    return{
        //we can use find if we have to return one line
        posts: state.posts.find(post => post.id === id)
    }
}
//Elle nous permet de mapper nos dispatches a notre component props

//elle prend en parametre la methode dispatch

/*Daba hna on declenche deletepost au click qui a son tour dispatch
l'action et meme des infos "PAYLOAD" au reducer*/
const mapDispatchToProps= (dispatch) => {

    return{
        deletePost: (id) => { dispatch(deletePost(id))}
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Post);