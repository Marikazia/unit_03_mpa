import { useLocation } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import { useParams } from "react-router-dom";

function Category(props) {
	let url = useLocation();
	let data = props.data.nav;
	const listItem = data.map(item => <li key={item.link}><a href={`${url.pathname}${item.link}`}>{item.text}</a></li>);

	return (
		<>
			<h1>Category</h1>
			<ul>
				{listItem}
				{/* <li><a href={`${url.pathname}/notebook`}>Ноутбуки</a></li>
				<li><a href={`${url.pathname}/monitor`}>Мониторы</a></li>
				<li><a href={`${url.pathname}/cellphone`}>Мобильные телефоны</a></li> */}
			</ul>
		</>
	);

}

export default Category;