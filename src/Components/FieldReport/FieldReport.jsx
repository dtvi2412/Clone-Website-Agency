import React from 'react';
import Banner from '../Banner/Banner';
import './FieldReport.css';
function FieldReport() {
  const dataBox = [
    {
      id: 0,
      author: 'Macie Stratton, Mythic',
      linkImage: 'http://agencylegend.com/images/balls/3top.png',
      linkLogo: 'http://agencylegend.com/images/balls/1logo.png',
      description:
        'Phalanx has provided us with services that have proved to be difficult to find in the industry, setting them apart from other tech teams and experts. Their specific areas of expertise have allowed for delivery of various solutions for our clients web needs. Additionally, their willingness to collaborate with our internal agency team has proven to be stelar and creates for a trustworthy relationship, knowing the projects are being completed to all standards',
    },
    {
      id: 1,
      author: 'Joseph Szala, Senior Creative, Iris Worldwide',
      linkImage: 'http://agencylegend.com/images/balls/3top.png',
      linkLogo: 'http://agencylegend.com/images/balls/3logo.png',
      description:
        'Phalanx is a versatile and agile team. We serve many different industries, and they easily scale their development expertise to meet many different needs across many different disciplines',
    },
    {
      id: 2,
      author: 'Robbie Berthum, CEO, Bull & Beard',
      linkImage: 'http://agencylegend.com/images/balls/2bottom.png',
      linkLogo: 'http://agencylegend.com/images/balls/2logo.png',
      description:
        "We've been working with Phalanx for 4 years now, his team is gold for agencies. They provide consistent wins, they're always on budget and above par, and truly get the agency side",
    },
  ];
  const renderBoxLogo = () => {
    return dataBox.map((item, index) => {
      return (
        <div key={index} className="field__ball__content">
          <strong>0{item.id + 1}</strong>
          <div className="field__img">
            <img src={item.linkLogo} alt={`img-${item.id}`} />
            <img src={item.linkImage} alt={`img-${item.id}`} />
          </div>
          <p>{item.description}</p>
          <h5>{item.author}</h5>
        </div>
      );
    });
  };
  return (
    <div className="field">
      <h1>Field Report</h1>
      <div className="field__ball">{renderBoxLogo()}</div>
      <Banner />
    </div>
  );
}

export default FieldReport;
