import React, { Component } from "react";


class Forms extends Component{

    constructor(props){
        super(props);
        this.state={
            nom:"",
            prenom:"",
            password:"",
            checkbox: false,
            reponse: "",
            error: {status: false, message: ""}
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

        if(value.length > 5 && name === "nom"){
            this.setState({error: {status: false, message: "" }})
            // console.log(this.state.nom);
        }else if (value.length < 5 && name === "nom") {
            this.setState({error:{status:true, message: 'le nom doit contenir au minimun 5 lettres'}});
        }

        if(value.length > 8 && name === "prenom"){
            this.setState({error: {status: false, message: "" }})
            // console.log(this.state.nom);
        }else if (value.length < 8 && name === "prenom") {
            this.setState({error:{status:true, message: 'le prenom doit contenir au minimun 8 lettres'}});
        }
        
        if(value.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/) && name === "password"){
            this.setState({error: {status: false, message: "" }})
            console.log('Mot de passe valide');
        } else if(value.length < 8 && name === "password"){
            this.setState({error:{status: true, message: 'le mot de passe doit contenir: Contain at least 8 characters dont une Majuscule et un chiffre'} });
            // console.log( + this.state.error)
        }

        }
        handleSubmit(e){
            e.preventDefault();
            console.log(this.state.error.status)
            if(this.state.error.status === false){
                this.setState({reponse: "tout est ok"});
            }
            // const data = JSON.stringify(this.state)
            // console.log(data);
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
                        <div>{this.state.error.status &&  this.state.error.message}</div>
                    </label>
                    <br/>
                    <label>
                        Checkbox :
                        <input type="checkbox" name="checkbox" checked={this.state.checkbox} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <button>  Envoyer </button>
                    <div>{this.state.error.message}</div>
                </form>
                {JSON.stringify(this.state)}
            </div>
        )
    }
}

export default Forms;