// Button.tsx
import React, { Component, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  submit?: boolean;
  copied?: boolean;
}

class Button extends Component<ButtonProps> {
  render() {
    const { children, submit, copied } = this.props;

    return (
      <button
        className={`btn${copied ? ' copied' : ''}`}
        type={submit ? 'submit' : 'button'}
        disabled={copied}
      >
        {children}
      </button>
    );
  }
}

export default Button;
