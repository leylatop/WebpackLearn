import React from 'react';
import SecondsBottom from './SecondsBottom';
import SecondsTop from './SecondsTop';

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

    // render() {
    //     let state = this.state;
    //     let props = this.props;
    //     return (
    //         <div className="cont">
    //             <SecondsTop {...props}/>
    //             {/*三种传值的方法*/}
    //             <SecondsBottom seconds={this.state.seconds}/>
    //             <SecondsBottom seconds={state.seconds}/>
    //             <SecondsBottom {...state}/>
    //         </div>
    //     );
    // }
    render() {
        let state = this.state;
        return (
            <div className="cont">
                <SecondsTop {...this.props} />
                {/*这里我写了三中传值方法*/}
                <SecondsBottom {...state}/>
            </div>
        );
    }
}

export default Seconds;