import React, { Component } from 'react';
import { Table } from 'reactstrap';

class HistoryTable extends Component {
  handleData(lottoType, data) {
    let dataRows;
    if (lottoType === 'lottoMax') {
      dataRows = data.map((entry) => {
        return (
          <RenderRow
            key={entry.id}
            dateHistory={entry.date}
            number1={entry.numbers[0]}
            number2={entry.numbers[1]}
            number3={entry.numbers[2]}
            number4={entry.numbers[3]}
            number5={entry.numbers[4]}
            number6={entry.numbers[5]}
            number7={entry.numbers[6]}
            specialnum={entry.bonus}
            type={'lottoMax'}
          />
        );
      });
    } else {
      dataRows = data.map((entry) => {
        return (
          <RenderRow
            key={entry.id}
            dateHistory={entry.date}
            number1={entry.numbers[0]}
            number2={entry.numbers[1]}
            number3={entry.numbers[2]}
            number4={entry.numbers[3]}
            number5={entry.numbers[4]}
            number6={entry.numbers[5]}
            specialnum={entry.bonus}
            type={'lotto649'}
          />
        );
      });
    }
    return dataRows;
  }

  render() {
    const { type, data } = this.props;
    console.log('the type of this lottery is: ', type);
    console.log('the data of this lottery is: ', data);

    const dataRows = this.handleData(type, data);
    return (
      <Table striped>
        <thead>
          <RenderHead type={type} />
        </thead>
        <tbody>{dataRows}</tbody>
      </Table>
    );
  }
}

const RenderHead = (props) => {
  console.log('head type is', props.type);
  if (props.type === 'lottoMax') {
    return (
      <tr>
        <th>日期</th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>
        <th>6</th>
        <th>7</th>
        <th>特殊号码</th>
      </tr>
    );
  } else {
    return (
      <tr>
        <th>日期</th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>
        <th>6</th>
        <th>特殊号码</th>
      </tr>
    );
  }
};

const RenderRow = (props) => {
  console.log(props.dateHistory);

  if (props.type === 'lottoMax') {
    return (
      <tr>
        <th scope="row">{props.dateHistory}</th>
        <th>{props.number1}</th>
        <th>{props.number2}</th>
        <th>{props.number3}</th>
        <th>{props.number4}</th>
        <th>{props.number5}</th>
        <th>{props.number6}</th>
        <th>{props.number7}</th>
        <th>{props.specialnum}</th>
      </tr>
    );
  } else {
    return (
      <tr>
        <th scope="row">{props.dateHistory}</th>
        <th>{props.number1}</th>
        <th>{props.number2}</th>
        <th>{props.number3}</th>
        <th>{props.number4}</th>
        <th>{props.number5}</th>
        <th>{props.number6}</th>
        <th>{props.specialnum}</th>
      </tr>
    );
  }
};

export default HistoryTable;

/*
TODO:
    1.想好数据传过来长什么样？
    2.想好如何渲染Column和Row？
*/
