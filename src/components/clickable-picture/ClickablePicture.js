import React from 'react';

class ClickablePicture extends React.Component {
    state = {
        clicked: false
    }


    togglePicture = () => {
        this.setState((prev) => ({
            clicked: prev.clicked ? false : true
        }))
    }

    render() {
        const { img, imgClicked } = this.props;

        return(
            <img
                onClick={() => this.togglePicture()}
                className="w-25 h-25 btn my-3"
                src={this.state.clicked ? imgClicked : img}
                alt="toggleGoogles" />
        )
    }
}

export default ClickablePicture;