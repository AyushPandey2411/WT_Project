import React from 'react';
import './NewsFeed.css';
const NewsFeed = () => {
  return (
    <section id="news-feed-section">
      <h2>News Feed</h2>
      
      <article className="news-article">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Ch6_Zde2BHqoey1Yse42euEz0tM9KE41Bg&s" alt="Farmer Agitation" />
        <div className="article-details">
          <h3 className="article-title">Farmers' Agitation Intensifies, Demands Remain Unresolved</h3>
          <p className="article-summary">The ongoing farmers' protest against new agricultural laws has intensified as farmers refuse to budge until their demands are met. The government faces mounting pressure to address the concerns of farmers.</p>
          <p className="article-meta">By Correspondent | January 15, 2024</p>
        </div>
      </article>
    
      <article className="news-article">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZ1FJ2lrpKmnWzjIhya8xUalBpyhjx6JU-Q&s"alt="Parliament Election" />
        <div className="article-details">
          <h3 className="article-title">Upcoming Parliament Election: Parties Gear Up for Intense Campaigning</h3>
          <p className="article-summary">With the upcoming Parliament election on the horizon, political parties are gearing up for intense campaigning across the country. The election is expected to be closely contested, with each party vying for voter support.</p>
          <p className="article-meta">By Political Desk | February 1, 2024</p>
        </div>
      </article>
    
      <article className="news-article">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwBhUBiqvYFrcxpyTYvwGBdk4D_CZ1FP2u7A&s" alt="UPSC Exam" />
        <div className="article-details">
          <h3 className="article-title">UPSC Civil Services Exam 2024: Record Number of Applicants Expected</h3>
          <p className="article-summary">The UPSC Civil Services Examination 2024 is set to witness a record number of applicants as aspirants prepare rigorously for the prestigious exam. The competition is expected to be fierce, with candidates aiming for top ranks.</p>
          <p className="article-meta">By Education Desk | March 10, 2024</p>
        </div>
      </article>
    
      <article className="news-article">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO3oF0O1bSHmf4ADm9Q6daf_hay4lnKAvWzw&s" alt="Ambani Wedding" />
        <div className="article-details">
          <h3 className="article-title">Ambani Wedding Extravaganza: Lavish Celebrations Enthrall Guests</h3>
          <p className="article-summary">The Ambani family's grand wedding celebration captivates attention as the extravagant affair dazzles guests with opulent ceremonies and lavish festivities. The star-studded event is the talk of the town.</p>
          <p className="article-meta">By Lifestyle Correspondent | April 5, 2024</p>
        </div>
      </article>
    </section>
  );
};

export default NewsFeed;
