import React from 'react';

class Dice extends React.Component {

    state = {
        diceNumber: '-empty'
    }

    newNumber = () => {
        this.setState({
            diceNumber: Math.ceil(Math.random() * 6)
        })
    }

    render() {
        const { diceNumber } = this.state;

        return(
            <img src={`/img/dice${diceNumber}.png`} alt="dice" onClick={() => this.newNumber()} className="btn w-25"/>
        )
    }
}

export default Dice;