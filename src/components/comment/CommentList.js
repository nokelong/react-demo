import React from 'react';
class CommentList extends React.Component {
    constructor(props) {
        super(props);
       
    }
    onDelButton(index) {
        console.log(index)
        this.props.onDelButton(index)
    }
    render() {
        const { comments } = this.props;
        return ( <div className="comment-list-warp">
            <label>评论列表</label>
            <ul className="comment-ul">
                {
                    comments.map((comment, index) =>
                        <li key={index} data-index={index}>
                            <strong>{comment}</strong>
                            <button onClick={(index) => this.onDelButton(index)}>删除改评论</button>
                        </li>
                    )
                }
            </ul>
        </div>
        )
    }
}

export default CommentList;
