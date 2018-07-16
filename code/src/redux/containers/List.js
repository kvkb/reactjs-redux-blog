import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {articles: state.articles};
};

const ConnectedList = ({articles}) => (
    <div className="list-container">
        {
            articles.map(item => (
                <section key={item.id}>
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                </section>
            ))
        }
    </div>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;