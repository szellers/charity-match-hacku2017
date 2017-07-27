import React, { Component } from 'react';

export default class MainPageSearchResultCard extends Component {
	render() {
		const {
			title,
			desc,
			charity,
			date,
			location,
			onClick
		} = this.props;

		return (
			<div className="search-result-card" onClick={onClick}>
				<h3 className="common-title search-result-card__title">{title}</h3>
				<p className="common-text search-result-card__desc">{desc}</p>

				<p className="search-result-card__charity">{charity}</p>
				<p className="search-result-card__date">{date} @ {location}</p>

				<div className="search-result-card__going-container">
					<h6 className="search-result-card__going-more common-text">+ 17 more</h6>
					<div className="search-result-card__going-img-container">
						<img className="search-result-card__going-img search-result-card__going-img-1" />
						<img className="search-result-card__going-img search-result-card__going-img-2" />
						<img className="search-result-card__going-img search-result-card__going-img-3" />
						<img className="search-result-card__going-img search-result-card__going-img-4" />
						<img className="search-result-card__going-img search-result-card__going-img-5" />
					</div>
				</div>
			</div>
		);
	}
}
