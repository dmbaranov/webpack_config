import React, { Component } from 'react'

import style1 from '../styles/special.scss'
import style2 from '../styles/style.scss'

export default class App extends Component {
    render() {
    	console.log('here');
        return (
        	<div>
	        	<div className={style1.test}>This is definitely a React app now!</div>
				<div className={style2.test}>Another sentense</div>
			</div>
    	)
    }

}