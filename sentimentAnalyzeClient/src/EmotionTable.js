import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
        return (
            <div>
                {/*You can remove this line and the line below. */}
                {JSON.stringify(this.props.emotions)}
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <th>emotion</th>
                            <th>value</th>
                        </tr>
                        <tr style={{backgroundColor:'red'}}> 
                            <td >Anger</td>
                            <td>{this.props.emotions.anger}</td>
                        </tr>
                        <tr style={{backgroundColor:'green'}}>
                            <td>Disgust</td>
                            <td>{this.props.emotions.disgust}</td>
                        </tr>
                        <tr style={{backgroundColor:'purple'}}>
                            <td>Fear</td>
                            <td>{this.props.emotions.fear}</td>
                        </tr>
                        <tr style={{backgroundColor:'yellow'}}>
                            <td>Joy</td>
                            <td>{this.props.emotions.joy}</td>
                        </tr>
                        <tr style={{backgroundColor:'blue'}}>
                            <td>Sadness</td>
                            <td>{this.props.emotions.sadness}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}
export default EmotionTable;
