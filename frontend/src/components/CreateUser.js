import React, { Component } from 'react'
import axios from 'axios'
//import swal from 'sweetalert';
//import { useForm } from 'react-hook-form'

export default class CreateUser extends Component {

    state = {
        users: [],
        useremail: '',
        userpassword: '',
        username: ''
        

    }

    async componentDidMount() {
        this.getUsers();
     }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({users: res.data});
    }


    onChangeUsername = (e) => {
        this.setState({
            
            username: e.target.value
        })
    }

    onChangeUseremail = (e) => {
        this.setState({

            useremail: e.target.value
        })
    }

    onChangeUserpassword = (e) => {
        this.setState({

            userpassword: e.target.value
        })
    }

    onSubmit = async e => {
        e.preventDefault();
    
        let res = await axios.get('http://localhost:4000/api/users');

        //console.log(res);
        console.log(res);

       /*    if(res.status === 301){
            alert.show('Usuario Existente');
            }
            if(res.status === 302){
                alert.show('Emaild alredy exist.');
            }
            
            else {

                await axios.post('http://localhost:4000/api/users', {
                useremail: this.state.useremail,
                username: this.state.username,
                userpassword: this.state.userpassword
  
                })
            } 

         
          this.setState({ useremail: '' , username: '', userpassword: ''});
          this.getUsers();
          
        */}
    
    deleteUser = async (id) => {
       await axios.delete('http://localhost:4000/api/users/' + id)
       this.getUsers();
    }
    render() {
        return (
            <div className="row">
               <div className="col-md-4">
                  <div className="card card-body">
                      <h3>Create New User</h3>
                      <form onSubmit={this.onSubmit}>
                      <h5>User Name</h5>
                          <div className="form-group">
                              <input 
                              type="text" 
                              required={ "true"}
                              placeholder="Name"
                              pattern="[A-Za-z0-9]+"
                              title="Only letter A-Z"
                              className="form-control" 
                              value={this.state.username}
                              onChange={this.onChangeUsername}/>
                          </div>
                          <h5>Email</h5>
                          <div className="form-group">
                              <input 
                              type="email"
                              required="true" 
                              placeholder="e.g. characters@characters.domain"
                              pattern=  "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                              title="Example: characters@characters.domain"
                              className="form-control" 
                              value={this.state.useremail}
                              onChange={this.onChangeUseremail}/>
                          </div>
                          <h5>Password</h5>
                          <div className="form-group">
                              <input 
                              type="password" 
                              required="true"
                              placeholder="Password"
                              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                              title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                              className="form-control" 
                              value={this.state.userpassword}
                              onChange={this.onChangeUserpassword}
                              />
                          </div>
                          <button type="submit" className="btn btn-primary">
                              Create User
                          </button>
                      </form>
                  </div>
                   </div> 
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => (
                                <li className="list-group-item list-group-item-action" 
                                key={user._id}
                                onDoubleClick={() => this.deleteUser(user._id)}
                                >
                                {user.useremail}
                                </li>))
                        }
                    </ul>

                </div>
                       
            </div>
        )
    }
}
