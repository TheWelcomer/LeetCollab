import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { createRoot } from 'react-dom/client';
import { Card, Avatar, Input, Typography } from 'antd';
import './index.css'


const domNode = document.getElementById('root');
const root = createRoot(domNode);

const { Search } = Input;
const { Text } = Typography;
const { Meta } = Card;

const client = new W3CWebSocket('ws://127.0.0.1:8000');

export default class App extends Component {

    state = {
        userName: '',
        isLoggedIn: false,
        messages:[]
    }

    onButtonClicked = (value) => {
        client.send(JSON.stringify({
            type: "message",
            msg: value,
            user: this.state.userName
        }));
        this.setState({ searchVal: ''})
    }

    componentDidMount() {
        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };
        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            console.log('get reply! ', dataFromServer);
            if (dataFromServer.type === 'message') {
                this.setState((state) =>
                ({
                    messages: [...state.messages,
                    {
                        msg: dataFromServer.msg,
                        user: dataFromServer.user
                    }]
                })
            );
        }
    };
}

    render() {
        return (
            <div className="main">
                {this.state.isLoggedIn ?
                    <div>
                        <div className="title">
                            <Text type="secondary" style={{ fontSize: '36px' }}>User: {this.state.userName}</Text>
                        </div>
                        <div className="question">Algorithm Problem</div>
                        <div className="answer">
                            <label for="freeform">Input your answer here:</label><br></br>
                            <textarea id="freeform" name="freeform" rows="30" cols="50"></textarea>
                            <button type="button">Undo</button>
                            <button type="button">Redo</button>
                            <button type="button">Submit</button>
                        </div>
                        <div className="chatbox">
                            <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: 2 }} id="messages">
                                {this.state.messages.map(message =>
                                    <Card key={message.msg} style={{ width: 500, margin: '4px 2px 0 2px', alignSelf: this.state.userName === message.user ? 'flex-end' : 'flex-start' }} loading={false}>
                                        <Meta
                                            avatar={
                                                <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{message.user[0].toUpperCase()}</Avatar>
                                            }
                                            title={message.user}
                                            description={message.msg}
                                        />
                                    </Card>
                                )}
                            </div>
                        </div>
                        <div className="bottom">
                            <Search
                                placeholder="input message and send"
                                enterButton="Send"
                                value={this.state.searchVal}
                                size="large"
                                onChange={(e) => this.setState({ searchVal: e.target.value })}
                                onSearch={value => this.onButtonClicked(value)}
                            />
                        </div>
                    </div>
                :
                    <div style={{ padding: '200px 40px' }}>
                        <Search
                            placeholder="Enter Username"
                            enterButton="Login"
                            size="large"
                            onSearch={value => this.setState({ isLoggedIn: true, userName: value })}
                        />
                    </div>
                }
            </div>
        )
    }
}

root.render(<App />);