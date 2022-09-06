import { Link } from "react-router-dom"
// Auxiliary
import arrRoutes from "../../routes"

interface NavigationProps{
	classesParent: string;
}

const Navigation = ({ classesParent }: NavigationProps) => {
	return (
		<div className={`${classesParent}__navigation navigation-block`}>
			{arrRoutes.map((route, index) => <Link className="navigation-block__element" to={route.path} key={index + route.id}>{route.name}</Link>)}
		</div>
	)
}

export default Navigation
