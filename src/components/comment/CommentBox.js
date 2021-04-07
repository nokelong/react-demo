import React from 'react';

class CommentBox extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit(event) {
        this.props.onAddComment(this.state.value);
        this.setState({
            value: ""
        })
        event.preventDefault()
    }
    render() {
        return (
            <form className="Comment-form" onSubmit={(event)=> this.handleSubmit(event)}>
                <div>留言板</div>
                <div className="form-title">
                    <p>留言内容</p>
                    <input placeholder="请输入留言内容" value={this.state.value} onChange={this.handleInputChange}/>
                </div>
                <div>已有评论{this.props.commentLength}</div>
                <button className="Comment-button">提交</button>
            </form>
        );
    }
}

export default CommentBox;