import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
//Task 1
class DishDetail extends Component {
    //Task 2
    renderDish(dish) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        } 
    //Task 3
    renderComments(comments) {
        if (comments != null) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        { comments.map((comment) => {
                            return(
                                <li key={comment.id}>
                                    <br/><li>{comment.comment}</li>
                                    <br/><li>-- {comment.author}, {comment.date}</li>
                                </li>
                            );
                        })}      
                    </ul>
                </div>    
            );
        } 
        else {
            return(
                <div></div>
            );
        } 
    }

    render() {
        if (this.props.dish != null){
            return(
                    <div className="row">
                        {this.renderDish(this.props.dish)}
                        {this.renderComments(this.props.dish.comments)}
                    </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }
}

export default DishDetail;