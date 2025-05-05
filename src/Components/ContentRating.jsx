     import React, { Component } from 'react';
     import './ContentRating.css';

     class ContentRating extends Component {
       constructor() {
         super();
         this.state = {
             likes: 0,
             dislikes: 0,
             totalRatings: 0,
           handleLike:() => {
             this.setState((prevState) => ({
                 likes: prevState.likes + 1,
                 totalRatings: prevState.totalRatings + 1
               }));
           },
           handleDislike:() => {
             this.setState((prevState) => ({
                 dislikes: prevState.dislikes + 1,
                 totalRatings: prevState.totalRatings + 1
               }));
           }
           };
       }
       render() {
         return (
          <>
          <p>ReactJS is an open-source JavaScript library developed by Meta (formerly Facebook) for building user interfaces, especially for single-page applications.

            It allows developers to create reusable UI components and efficiently update the user interface when data changes.</p>
          <div className='content-rating'>
             <p>Texte</p>
             <div className='rating-buttons'>
             <button className="like-button" onClick={this.state.handleLike}>
                 Like ({this.state.likes})
               </button>
               <button className="dislike-button" onClick={this.state.handleDislike}>
                 Dislike ({this.state.dislikes})
               </button>
                   <p>Total Ratings : {this.state.totalRatings}</p>
             </div>

          </div>
          </>
         );
       }
     }

     export default ContentRating;