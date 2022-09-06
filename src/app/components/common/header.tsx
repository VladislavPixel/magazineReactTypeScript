// Components
import Navigation from "./navigation"

const Header = () => {
	return (
		<header className="wrapper__header header-block">
			<div className="header-block__container">
				<h1 className="header-block__title">React JS + TypeScript</h1>
				<Navigation classesParent="header-block" />
			</div>
		</header>
	)
}

export default Header
