import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseTitle : ''
    }

    componentDidMount () {
        this.loadedTitle()
    }

    componentDidUpdate () {
        this.loadedTitle()
    }

    loadedTitle () {
        const query = new URLSearchParams(this.props.location.search);
        console.log(query)
        for(let param of query.entries()){
            console.log(param)
            if (this.state.courseTitle !== param[1]) {
                this.setState({courseTitle : param[1]})

            }
        }
        console.log(query)
    }
    render () {
        console.log(this.props)
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
            </div>
        );
    }
}

export default Course;