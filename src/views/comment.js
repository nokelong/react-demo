import React, { useState } from 'react'
import CommentBox from '../components/comment/CommentBox'; 
import CommentList from '../components/comment/CommentList'; 

const Comment = () =>{
    const [comments, setComments] = useState([]);
    return(
        <div>
            <CommentBox></CommentBox>
            <CommentList comments={comments}></CommentList>
        </div>
    )
}

export default Comment;