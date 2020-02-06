import React, { Component } from 'react'
import{ Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'

class Home extends Component {

  render(){
      //condition ? value_if_true : value_if_false
      //Ternary Operator
    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A pokeball"/>
            <div className="card-content">
            <Link to={'/'+post.id}>
              <span className="card-title red-text">{post.title}</span>
            </Link>
              
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    )
  }
}
//the state attribute get acces to store state's
/*cette fonction tell to redux wich data we want  and i wich props
w've applied ths data object*/
const mapStateToProps = (state) => {
  return{
    posts: state.posts
  }
}

export default connect(mapStateToProps,)(Home)