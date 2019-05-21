import React, { Component } from 'react';
import Modal from '../Modal/modal';
import Button from '../Button/button';
import './login-board.scss';

class LoginBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      tiles: '16',
      password: [],
      submit: false,
      numbers:['0','1','2','3','4','5','6','7','8','9',false,false,false,false,false,false]
      };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  _isMounted = false;

  componentWillMount() {
    this.shuffle(this.state.numbers);
    this._isMounted = true;
  }

  shuffle(numbers) {
    for (let i = numbers.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[randomIndex]] = [numbers[randomIndex], numbers[i]];
    }
    this.setState({
      numbers
    })
}

  handleInputChange = (e) => {
    this.setState({
      password: this.state.password.concat([e.target.value]),
    })
  }

  removeInput = (e) => {
    this.setState({
      password: [],
    })
  }

  onSubmit = () => {
    this.setState({
      submit: !this.state.submit
    })
  }

  render() {
    return (
      <div className="login-board">
        <h1 className='login-board__login-title'>Logga in med personlig kod</h1>
        <input placeholder='Ange din kod' value={this.state.password.join('')} onChange={this.handleInputChange} type='password' readonly/>
        {this._isMounted && 
          <div className="login-board__tile-wrapper">
            {this.state.numbers.map((item,i) => <Button key={i} label={item} value={item} onClick={this.handleInputChange} />)}
          </div>
        }
        <div className='login-board__button__wrapper'>
          <Button width='extra-wide' onClick={this.onSubmit} color='green' label='Logga in'/>
          <Button width='wide' onClick={this.removeInput} color='pink' label='X'/>
        </div>
        {this.state.submit && <Modal message={this.state.password} onClick={this.onSubmit}/>}
      </div>
    );
  }
  }

export default LoginBoard;