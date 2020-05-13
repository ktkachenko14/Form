import React, {Component} from "react"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            age: '',
            gender: '',
            place: 'Paris',
            diet: false,
            listDiet: []
            
        
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    
    handleChange(event){
       if(event.target.name === "firstname"){
            this.setState({
                firstname : event.target.value
      
        });
       }
       if(event.target.name === "lastname"){
        this.setState({
            lastname : event.target.value
        });
       }

       if(event.target.name === "age"){
        this.setState({
            age : event.target.value
        });
        }

       if(event.target.type === "radio"){
            this.setState({
                [event.target.name]: event.target.value,
                gender: event.target.value
            });
        }
        if(event.target.name === "places"){
            this.setState({
                place: event.target.value
            });
        }
       
        if(event.target.type === "checkbox"){
            this.setState({
                [event.target.checked]: true,
            
                listDiet:[...this.state.listDiet, event.target.value] 
            });
        }

          
        
    }

    handleSubmit(event) {
        alert('Form submitted, ' + this.state.firstname + ' ' + this.state.lastname);
        event.preventDefault();
      }

    render() {
        return (
            <main>
               <form onSubmit={this.handleSubmit}>
                    <input placeholder="First Name" type = "text" value={this.state.firstname} onChange={this.handleChange} name="firstname"></input><br />
                    <input placeholder="Last Name" type = "text" value = {this.state.lastname} onChange = {this.handleChange} name="lastname"/><br />
                    <input placeholder="Age" type="text" value = {this.state.age} onChange = {this.handleChange} name="age" /><br />
                    
                    <input type="radio" name="gender" value="female"   onChange={this.handleChange}></input>
                    <span>Female</span>
                    <input type="radio" name="gender" value="male"   onChange={this.handleChange}></input>
                    <span>Male</span>
                    <br />
                    
                    <select  value={this.state.place} name="places" onChange={this.handleChange}>
                        <option  value="Kyiv"  >Kyiv</option>
                        <option  value="Paris"  >Paris</option>
                        <option  value="Madrid"  >Madrid</option>
                        <option  value="Rome"  >Rome</option>
                        <option  value="Dubai"  >Dubai</option>
                    </select>
                    <br />
                    
                    <input type="checkbox"
                            onChange={this.handleChange}
                            name="sweet" value="sweet"
                            ></input>
                    <span>Sweet</span>
                    <input type="checkbox"
                            onChange={this.handleChange}
                            name="alcohol" value="alcohol"
                           ></input>
                    <span>Alcohol</span>
                    <input type="checkbox"
                            onChange={this.handleChange}
                            name="gluten" value="gluten"
                           ></input>
                    <span>Gluten</span>
                    <input type="checkbox"
                            onChange={this.handleChange}
                            name="noneDiet" value="no restrictions"
                           ></input>
                    <span>No restrictions</span>
                    <br />
                    
                    <button>Submit</button>
                    </form>
                <hr />
                <h2><font color="#3AC1EF">Entered information:</font></h2>
                <p>Your name: {this.state.firstname} {this.state.lastname}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.place}</p>
                <p>
                    Your dietary restrictions: 
                    {this.state.listDiet.map(x=> <span> {x} </span>)} 
                    
                </p>
            </main>
        );
    }
}

export default App;
