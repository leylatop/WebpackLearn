import React from 'react';
import SecondsBottom from './SecondsBottom';

class Seconds extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        let state = this.state;
        return (
            <div className="cont">
                <div className="top">
                    <i className="bd_logo1" />
                    这是{this.props.title}
                </div>
                {/*三种传值的方法*/}
                <SecondsBottom seconds={this.state.seconds}/>
                <SecondsBottom seconds={state.seconds}/>
                <SecondsBottom {...state}/>
            </div>
        );
    }
}

export default Seconds;