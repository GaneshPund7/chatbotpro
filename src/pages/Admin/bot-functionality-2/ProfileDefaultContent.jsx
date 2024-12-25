import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const items = [
  {
    title: (
      <Fragment>
        Do you want the chatbot to ask for preferences like seat selection, meal preference, etc.?
      </Fragment>
    ),
    actions: (
      <div className="flex gap-2">
        <button className="btn btn-sm btn-primary">Yes</button>
        <button className="btn btn-sm btn-secondary">No</button>
      </div>
    ),
  },
  {
    title: (
      <Fragment>
        Would you like the chatbot to have fallback responses for unrecognized input?
      </Fragment>
    ),
    actions: (
      <div className="flex gap-2">
        <button className="btn btn-sm btn-primary">Yes</button>
        <button className="btn btn-sm btn-secondary">No</button>
      </div>
    ),
  },
  {
    title: (
      <Fragment>
        Should the chatbot respond with predefined options or free-form text?
      </Fragment>
    ),
    actions: (
      <div className="flex gap-2">
        <button className="btn btn-sm btn-primary">Yes</button>
        <button className="btn btn-sm btn-secondary">No</button>
      </div>
    ),
  },
  {
    title: (
      <Fragment>
        Should the chatbot be able to process payments?
      </Fragment>
    ),
    actions: (
      <div className="flex gap-2">
        <button className="btn btn-sm btn-primary">Yes</button>
        <button className="btn btn-sm btn-secondary">No</button>
      </div>
    ),
  },
  {
    title: (
      <Fragment>
        Do you need to implement user authentication (e.g., login, password)?
      </Fragment>
    ),
    actions: (
      <div className="flex gap-2">
        <button className="btn btn-sm btn-primary">Yes</button>
        <button className="btn btn-sm btn-secondary">No</button>
      </div>
    ),
  },
  {
    title: (
      <Fragment>
        Do you need multi-language support for the chatbot?
      </Fragment>
    ),
    actions: (
      <div className="flex gap-2">
        <button className="btn btn-sm btn-primary">Yes</button>
        <button className="btn btn-sm btn-secondary">No</button>
      </div>
    ),
  },
  {
    title: (
      <Fragment>
        Do you want to maintain a history of chat communication with the user?
      </Fragment>
    ),
    actions: (
      <div className="flex gap-2">
        <button className="btn btn-sm btn-primary">Yes</button>
        <button className="btn btn-sm btn-secondary">No</button>
      </div>
    ),
  },
  {
    title: (
      <Fragment>
        Do you want the chatbot to ask for preferences like seat selection, meal preference, etc.?
      </Fragment>
    ),
    actions: (
      <div className="flex gap-2">
        <button className="btn btn-sm btn-primary">Yes</button>
        <button className="btn btn-sm btn-secondary">No</button>
      </div>
    ),
  },
  {
    title: (
      <Fragment>
        Do you want the chatbot to ask for preferences like seat selection, meal preference, etc.?
      </Fragment>
    ),
    actions: (
      <div className="flex gap-2">
        <button className="btn btn-sm btn-primary">Yes</button>
        <button className="btn btn-sm btn-secondary">No</button>
      </div>
    ),
  },
  {
    title: (
      <Fragment>
        Do you want the chatbot to ask for preferences like seat selection, meal preference, etc.?
      </Fragment>
    ),
    actions: (
      <div className="flex gap-2">
        <button className="btn btn-sm btn-primary">Yes</button>
        <button className="btn btn-sm btn-secondary">No</button>
      </div>
    ),
  },
  {
    title: (
      <Fragment>
        Do you want the chatbot to ask for preferences like seat selection, meal preference, etc.?
      </Fragment>
    ),
    actions: (
      <div className="flex gap-2">
        <button className="btn btn-sm btn-primary">Yes</button>
        <button className="btn btn-sm btn-secondary">No</button>
      </div>
    ),
  },
  {
    title: (
      <Fragment>
        Do you want the chatbot to ask for preferences like seat selection, meal preference, etc.?
      </Fragment>
    ),
    actions: (
      <div className="flex gap-2">
        <button className="btn btn-sm btn-primary">Yes</button>
        <button className="btn btn-sm btn-secondary">No</button>
      </div>
    ),
  },
  {
    title: (
      <Fragment>
        Do you want the chatbot to ask for preferences like seat selection, meal preference, etc.?
      </Fragment>
    ),
    actions: (
      <div className="flex gap-2">
        <button className="btn btn-sm btn-primary">Yes</button>
        <button className="btn btn-sm btn-secondary">No</button>
      </div>
    ),
  },
  {
    title: (
      <Fragment>
        Do you want the chatbot to ask for preferences like seat selection, meal preference, etc.?
      </Fragment>
    ),
    actions: (
      <div className="flex gap-2">
        <button className="btn btn-sm btn-primary">Yes</button>
        <button className="btn btn-sm btn-secondary">No</button>
      </div>
    ),
  },
  {
    title: (
      <Fragment>
        Do you want the chatbot to ask for preferences like seat selection, meal preference, etc.?
      </Fragment>
    ),
    actions: (
      <div className="flex gap-2">
        <button className="btn btn-sm btn-primary">Yes</button>
        <button className="btn btn-sm btn-secondary">No</button>
      </div>
    ),
  },
];

const renderItem = (item, index) => {
  return (
  
    <div
    
      key={index}
      className="card-group flex items-center flex-wrap sm:flex-nowrap justify-between py-4 gap-2.5"
    >
      <div className="flex flex-col gap-0.5">
        <span className="flex items-center gap-1.5 leading-none font-medium text-sm text-gray-900">
          {item.title}
        </span>
      </div>
      <div className="flex items-center gap-2.5">{item.actions}</div>
    </div>
  );
};

const ProfileDefaultContent = () => {
  return (
    <div className="card">
       

      {/* Content Section */}
      {items.map((item, index) => renderItem(item, index))}

      {/* Save and Continue Button */}
      <div className="flex justify-end mt-4 mb-4">
        <Link to="/Admin/knowledgebaseCreate" className="btn btn-primary text-lg font-medium text-white">
         Next
        </Link>
      </div>
    </div>
  );
};


export { ProfileDefaultContent };
//
