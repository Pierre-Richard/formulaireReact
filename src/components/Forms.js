import React, { Component } from "react";


class Forms extends Component{

    constructor(props){
        super(props);
        this.state={
            nom:"",
            prenom:"",
            password:"",
            checkbox: false,
            error: false
        }
        this.handleChange = this.hanldeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
        hanldeChange(e){
            const name = e.target.name
            const type = e.target.type
            const value = type === "checkbox" ? e.target.checked : e.target.value
            this.setState({
                [name]: value
            })

        // switch (name) {
        //     case 'nom':
        //         console.log('c le nom');
        //         break;
        
        //     default:
        //         break;
        // }
        if(value.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/) && name === "password"){
            console.log('Mot de passe valide');
        } else if(value.length > 8 && name === "password" ){
            console.log('le mot de passe doit contenir: Contain at least 8 characters')
        }
        }
        handleSubmit(e){
            e.preventDefault()
            const data = JSON.stringify(this.state)
            console.log(data);
        }

    
    
    render(){
        return(
            <div onSubmit={this.handleSubmit}>
                <h1>Bienvenue dans mon formulaire</h1>
                <form>
                    <label>
                        Nom :
                        <input type="text" name="nom" value={this.state.nom} onChange={this.handleChange} />
                        
                    </label>
                    <br/>
                    <label>
                        Prénom :
                        <input type="text" name="prenom" value={this.state.prenom} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                        Password :
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        <div>{this.state.error ? "pas d erreur" : "erreur"}</div>
                    </label>
                    <br/>
                    <label>
                        Checkbox :
                        <input type="checkbox" name="checkbox" value={this.state.checkbox} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <input type="submit" value="Envoyer" />
                </form>
                {JSON.stringify(this.state)}
            </div>
        )
    }
}

export default Forms;