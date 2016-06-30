import React, { Component } from 'react'

import styles1 from '../styles/special.scss'
import styles2 from '../styles/style.scss'

export default class App extends Component {
    render() {
    	console.log('here');
        return (
        	<div>
	        	<div className={styles1.test}>This is definitely a React app now!</div>
				<div className={styles2.test}>Another sentense</div>
			</div>
    	)
    }

}