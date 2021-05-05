import React, { useState } from 'react'
import CommentBox from '../components/comment/CommentBox'; 
import CommentList from '../components/comment/CommentList'; 

const Comment = () =>{
    const [comments, setComments] = useState([]);
    const onAddComment = (comment) => {
        console.log('app onAddComment', comment)
        setComments((comments) =>{
            return [...comments, comment]
        })       
    }
    const onDelButton = (index) => {
        // let comments = comments.splice(index, 1);
        setComments((prevs) =>{
            console.log('index', index)
            prevs.splice(index, 1) 
            console.log('prevs', prevs)
            return [...prevs];
        });  
    }
    return(
        <div>
            <CommentBox onAddComment={onAddComment}></CommentBox>
            <CommentList comments={comments} onDelButton={onDelButton}></CommentList>
        </div>
    )
}

export default Comment;