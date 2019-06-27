import React from "react";
import { Context } from "../store/appContext";
import Card_1 from "../../img/Card_1.png";
import Card_2 from "../../img/Card_2.png";
import Card_3 from "../../img/Card_3.png";
import Card_4 from "../../img/Card_4.png";
import Card_5 from "../../img/Card_5.png";

const b_cards = [Card_1, Card_2, Card_3, Card_4, Card_5];

export class BusinessCard extends React.Component {
	render() {
		return (
			//    b_cards[store.cardStyle]
			<div className="container mt-2 p-4 bg-light">
				<div className="border-fix">
					<Context.Consumer>
						{({ store }) => {
							let row = [];
							for (let i = 0; i < 3; i++) {
								let col = [];
								for (let i = 0; i < 3; i++) {
									col.push(<img className="col p-0 m-0 dashed" src={b_cards[store.cardStyle]} />);
								}
								row.push(<div className="row">{col}</div>);
							}
							return <div>{row}</div>;
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}
