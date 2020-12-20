import React from 'react'
import moment from 'moment'
moment.locale('ru');

class MyTime extends  React.Component{

    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            timeZone: this.props.timeZone,
            id: this.props.id,
            time: moment().utcOffset(this.props.timeZone*60).format('DD:MM HH:mm:ss')
        }
        this.handleRemove = this.handleRemove.bind(this)
    }

    handleRemove(id) {
        this.props.onRemove(id);
    }

    render() {
        return (
            <div>
                <span> name: {this.state.name}</span>
                <span> [ TZ: {this.state.timeZone} ] </span>
                <span> {this.state.time} </span>
                <button onClick={() => this.handleRemove(this.props.id)}>✘</button>
            </div>
        )
    }


    componentDidMount() {
        this.interval = setInterval(() => {
            const m = moment().utcOffset(this.state.timeZone*60).format('DD MMMM HH:mm:ss') //.add(this.state.timeZone,'hours')
            this.setState({time:m})
        }, 1000)
    }

    // componentDidUpdate(prevState) {
    // }

    componentWillUnmount() {
        console.log(`Close: name:${this.props.name} ID:${this.props.id} TZ:${this.props.timeZone}`)
        clearInterval(this.interval)
    }

}

export default MyTime