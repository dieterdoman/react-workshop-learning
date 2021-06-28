import React, { Component } from "react";
import { Button, Image, Form } from 'semantic-ui-react';
import NumberInput from 'semantic-ui-react-numberinput';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import menImage from './men.jpg';
import elvesImage from './elves.jpg';
import dwarvesImage from './dwarf.jpg';
import hobbitsImage from './hobbits.jpg';
import wizardsImage from './wizard.jpg';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fellowshipName: '',
            men: '2',
            elves: '1',
            dwarves: '1',
            hobbits: '4',
            wizards: '1'
        };
    }

    changeFellowshipName = (e) => {
        this.setState({fellowshipName: e.target.value});
    };

    changeMen = (newValue) => {
        this.setState({ men: newValue });
    };

    changeElves = (newValue) => {
        this.setState({elves: newValue});
    };

    changeDwarves = (newValue) => {
        this.setState({dwarves: newValue});
    };

    changeHobbits = (newValue) => {
        this.setState({wizards: newValue});
    };

    changeWizards = (newValue) => {
        this.setState({elves: newValue});
    };

    render() {
        return (
           <div className="fellowship-creator">
               <Form>
                <Form.Field>
                  <label>Fellowship Name</label>
                  <input placeholder='Fellowship name' value={this.state.fellowshipName} onChange={this.changeFellowshipName}/>
                </Form.Field>
                <Form.Field>
                    <label>Men:</label>
                    <Image src={menImage} size='medium' />
                    <br/>
                    <NumberInput value={this.state.men} onChange={this.changeMen} />
                </Form.Field>
                <Form.Field>
                    <label>Elves:</label>
                    <Image src={elvesImage} size='medium' />
                    <br/>
                    <NumberInput value={this.state.elves} onChange={this.changeElves} />
                </Form.Field>
                <Form.Field>
                    <label>Dwarves:</label>
                    <Image src={dwarvesImage} size='medium' />
                    <br/>
                    <NumberInput value={this.state.dwarves} onChange={this.changeDwarves} />
                </Form.Field>
                <Form.Field>
                    <label>Hobbits:</label>
                    <Image src={hobbitsImage} size='medium' />
                    <br/>
                    <NumberInput value={this.state.hobbits} onChange={this.changeHobbits} />
                </Form.Field>
                <Form.Field>
                    <label>Wizards:</label>
                    <Image src={wizardsImage} size='medium' />
                    <br/>
                    <NumberInput value={this.state.wizards} onChange={this.changeWizards} />
                </Form.Field>
                <Button type='submit' onClick={() => alert(JSON.stringify(this.state))}>Declare the fellowship</Button>
              </Form>
          </div>
       );
    }
}

export default App;
