import React, {Component, Fragment} from 'react';
import Card from './subCard'

class SubjNotes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            topics : [{}]
        }
    }

    componentWillMount() {
        fetch(`http://localhost:3001/notes/${this.props.match.params.subId}/`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                data.map((t) => {
                    let str = t.name
                    t.name = str.split('.')[0]
                })
                this.setState({topics : data})
            })
    }

    render() {
        return (
            <div className="container-fluid" style={{background: '#eee'}}>
                <div className="row p-3">
                {
                    this.state.topics.map((t) => {
                        return (
                            <Fragment>
                                <Card name={t.name} link={t.id} />
                            </Fragment>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}
export default SubjNotes;