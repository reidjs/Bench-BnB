import React from 'react'
import { Link, Redirect } from 'react-router-dom'
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "", 
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    // console.log(user);
    // console.log("Attempting to ", this.props.processForm, "user")
    this.props.processForm(user);
  }

  handleChange(e) {
    // console.log(e.target.value)
    // console.log(e.target.name)
    const key = e.target.name
    this.setState({[key] : e.target.value});
    // debugger
  }

  componentDidMount() {
    // if (this.props.loggedIn) {
      console.log('Form render!')
      console.log(this.props)
      
    // }
    if (this.props.loggedIn) {
      console.log('here')
      console.log(this.props.history.push('/'));
    }
  }

  render() {
    let text;
    let path;
    let linkText;
    // console.log(this.props.formType)
    if (this.props.formType === 'signup') {
      text = "Sign Up"
      path = "/login"
      linkText = 'Log in'
    } else {
      text = "Log In"
      path = "/signup"
      linkText = 'Sign up'
    }
    const errorList = this.props.errors.map((error) => 
      <li key={error}>{error}</li>
    )
    // console.log(errorList);
    return (
      <div>
        <h2>{text}</h2>
        <ul>
          {errorList}
        </ul>
        <Link to={path}>{linkText}</Link>
        <form onSubmit={this.handleSubmit}>
          Username:
          <input 
            type="text" 
            name="username" 
            onChange={this.handleChange} 
            value={this.state.username} /><br/>
          Password: 
          <input 
            type="password" 
            name="password" 
            onChange={this.handleChange} 
            value={this.state.password} /><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}


export default SessionForm;