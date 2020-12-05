import React from 'react';

function Articles({articles}) {
    

    console.log("WTF WTF WTF: "+JSON.stringify(articles))

    
    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {articles.map((cnt, idx) => (
                <tr data-testid="article" key={"article-index"+idx}>
                    <td key={'title'+idx} data-testid="article-title">{articles[idx].title}</td>
                    <td key={'upvotes'+idx} data-testid="article-upvotes">{articles[idx].upvotes}</td>
                    <td key={'date'+idx} data-testid="article-date">{articles[idx].date}</td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
