import React from 'react';

class LikeButton extends React.Component {
    state = {
        likes: 0,
        color: "red"
    }

    colors = ['purple','blue','green','yellow','orange','red']

    likesCount = () => {
        this.setState((prev) => ({ 
            likes: prev.likes + 1,
            color: this.colors[Math.round(Math.random() * this.colors.length)]
        }))
    }

    render() {
        const { likes, color } = this.state;
        
        return(
            <span onClick={() => this.likesCount()} style={{backgroundColor: color}} className="btn m-3 p-2 text-info border">{likes} Like{likes !== 1 && 's'}</span>
        )
    }
}

export default LikeButton;