import React from 'react';
import { ErrorBoundary, Button } from '@sensoro/sensoro-design';

class ErrorComponent extends React.Component {
  state = {
    fail: false
  };

  triggerFail = () => {
    this.setState({
      fail: true
    });
  };

  render() {
    if (this.state.fail) {
      throw new Error('This is an error from render.');
    }

    return (
      <div>
        <span style={{ marginRight: 10 }}>成功渲染</span>
        <Button onClick={this.triggerFail}>触发错误</Button>
      </div>
    );
  }
}

export default () => {
  return (
    <div>
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
      <div style={{ marginTop: 10 }}>这里不受影响</div>
    </div>
  );
};
