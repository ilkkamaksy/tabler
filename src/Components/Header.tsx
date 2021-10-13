import React from 'react'
import '../styles/Header.css'

const Header = ():React.ReactElement => (
	<header className="App-header">
		<div className="container">
			<div className="header-col col--start">
				<span id="logo"></span>
				<span id="title">Mord Software</span>
			</div>
			
		</div>
	</header>
)

export default Header