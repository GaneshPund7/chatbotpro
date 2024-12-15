import { useState } from 'react';
import { CardWork } from '@/partials/cards'; 

const ProfileBloggerContent = () => {
  const [activeView, setActiveView] = useState('cards');
  const items = [
    {
      title: 'Travel Assistance',
      description: 'Cloud storage and file sharing',
      image: '21.jpg',
      authorName: 'Cody Fisher'
    },
    {
      title: 'Customer Support',
      description: 'Neutrals are the epitome of timeless elegance',
      image: '3.jpg',
      authorName: 'Wade Warren'
    },
    {
      title: 'Real Estate',
      description: 'Choose the right time.',
      image: '22.jpg',
      authorName: 'Albert Flores'
    },
    {
      title: 'Trip Planning',
      description: 'Her alluring appearance radiates calmness.',
      image: '23.jpg',
      authorName: 'Kathryn Murphy'
    },
    {
      title: 'Restaurant Ordering',
      description: 'Pulled apart by reality',
      image: '14.jpg',
      authorName: 'Devon Lane'
    },
    {
      title: 'Custom Bot',
      description: 'Build your own bot tailored to your needs.',
      image: '14.jpg',
      authorName: 'Devon Lane'
    }
  ];

  const renderItem = (item, index) => {
    return (
      <CardWork
        key={index}
        title={item.title}
        image={item.image}
        description={item.description}
      />
    );
  };

  return (
    <div className="flex flex-col items-stretch gap-5 lg:gap-7.5">
      <h1 className="text-2xl font-bold text-gray-800">
        Choose a pre-made template or create a custom bot
      </h1>

      <div className="flex flex-wrap items-center gap-5 justify-between">
        <h3 className="text-lg text-gray-900 font-semibold">
          {items.length} templates
        </h3>
      </div>

      {activeView === 'cards' && (
        <div id="works_cards">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7.5">
            {items.map((item, index) => {
              return renderItem(item, index);
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export { ProfileBloggerContent };
