import React from 'react';
import {CustomList} from '../components/CustomList';
import {CustomSelect} from '../components/CustomSelect';
import {Task} from '../components/Task';

class MyCourses extends React.Component {
  render() {
    return (
      <div>
        <h1>mis cursos</h1>
        <CustomList items={['item 1', 'item 2', 'item 3']} />

        <CustomSelect items={[
          {
            text:'OP 1',
            value: 1
          },
          {
            text:'OP 2',
            value: 2
          }
        ]} />
        <Task name="Tarea 1" />
      </div>
    );
  }
}

export { MyCourses };
