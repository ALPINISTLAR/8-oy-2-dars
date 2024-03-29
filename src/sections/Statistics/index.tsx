import React, { Component } from 'react';
import Card from './Card';

import IconBrandRecognition from '../../images/icon-brand-recognition.svg';
import IconDetailedRecords from '../../images/icon-detailed-records.svg';
import IconFullyCustomizable from '../../images/icon-fully-customizable.svg';

interface StatisticsTextItem {
  title: string;
  paragraph: string;
  image: string; // Yoki istalgan tipda o'zgartiring
}

const statisticsText: StatisticsTextItem[] = [
  {
    title: 'Brand Recognition',
    paragraph: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instill confidence in your content.',
    image: IconBrandRecognition,
  },
  {
    title: 'Detailed Records',
    paragraph: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    image: IconDetailedRecords,
  },
  {
    title: 'Fully Customizable',
    paragraph: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    image: IconFullyCustomizable,
  },
];

class Statistics extends Component {
  render() {
    return (
      <section className="statistics">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>

        <div className="statistics__cards-grid">
          {statisticsText.map(({ title, paragraph, image }, index) => (
            <Card key={index} title={title} paragraph={paragraph} image={image} />
          ))}
        </div>
      </section>
    );
  }
}

export default Statistics;
