import React, {useState} from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {
    
    const [sortedArticles, setSortedArticles] = useState([...articles]);

    const sortByDate = (oldArticles) => {
        // Must create new array otherwise Articles subcomponent 
        // won't detect change (rerender)
        const articles = [...oldArticles];
        articles.sort((a, b) => { return new Date(b.date).getTime() - new Date(a.date).getTime() });
        setSortedArticles(articles);
    }    
    
    const sortByUpvotes = (oldArticles) => {
        // Must create new array otherwise Articles subcomponent won't 
        // detect change (rerender)
        const articles = [...oldArticles];
        articles.sort((a, b) => { return  b.upvotes - a.upvotes });
        setSortedArticles(articles);
    }    
    
    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={(evt) => sortByUpvotes(articles)}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={(evt) => sortByDate(articles)}>Most Recent</button>
            </div>
            <Articles articles={sortedArticles}/>
        </div>
    );

}

export default App;
