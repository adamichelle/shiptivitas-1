import React from 'react';
import Card from './Card';
import './Swimlane.css';

export default class Swimlane extends React.Component {
  render() {
    let className = ['Swimlane-dragColumn']
    if(this.props.name === 'Backlog') {
      className.push('backlog')
    } else if(this.props.name === 'In Progress') {
      className.push('in-progress')
    } else if(this.props.name === 'Complete') {
      className.push('complete')
    }

    const cards = this.props.clients.map(client => {
      return (
        <Card
          key={client.id}
          id={client.id}
          name={client.name}
          description={client.description}
          status={client.status}
        />
      );
    })
    return (
      <div className="Swimlane-column">
        <div className="Swimlane-title">{this.props.name}</div>
        <div className={className.join(' ')} ref={this.props.dragulaRef}>
          {cards}
        </div>
      </div>);
  }

}
