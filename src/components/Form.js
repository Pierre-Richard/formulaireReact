import React, { Component } from 'react'; 
import './Form.css';
class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            nom: '',
            prenom: '',
            checkbox: false
        };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        const name = e.target.name;
        const type = e.target.type;
        const value = type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({
            [name]: value
        })
    }

     render() {
         console.log('render')
        return (
            <div className="formulaire">
                <div className="Form">
                    <label>
                        Nom :
                        <input type="text" name="nom" value={this.state.nom} onChange={this.handleChange} id='nom'/>
                    </label>
                    <br />
                    <label>
                        Prénom :
                        <input type="text" name="prenom" value={this.state.prenom} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Password :
                        <input type="password" name="password" />
                    </label>
                    <br />
                    <label>
                        file
                        <input type="file" name="file" />
                    </label>
                    <br />
                    <label>
                        button radio :
                        <input type="radio" name="radio" />
                    </label>
                    <br />
                    <label>
                        checkbox :
                        <input type="checkbox" checked={this.state.isGoing} name="checkbox" onChange={this.handleChange} />
                    </label>
                    <br />
                    <input type="submit" value="Envoyer" />
                    {JSON.stringify(this.state)}
                </div>
            </div>
        )
        
     }
}

export default Form;
