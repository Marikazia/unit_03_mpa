// import { NavLink } from "react-router-dom";


function Header(props) {
	let data = props.data.nav;
	const listItem = data.map(item => <li key={item.link}><a href={item.link}>{item.text}</a></li>);
  return (
		<>
			<ul>
				{listItem}
				{/* <li><a href="/">Главная</a></li>
				<li><a href="/about">O сайте</a></li>
				<li><a href="/cat">Категории</a></li> */}
			</ul>
		</>
  );
}

export default Header;