import React from 'react';

const Card = ({ title, subtitle, link, imagemLink, tags }) => (
  <a href={link}>
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={imagemLink} alt={title} />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-size-6-desktop is-size-7-touch">{title}</p>
            <p className="subtitle is-size-6-desktop is-size-7-touch">
              {subtitle}
            </p>
            <div className="tags">
              {tags.map(tag => (
                <span
                  className="tag is-size-9-desktop is-size-10-touch"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
);

export default Card;
