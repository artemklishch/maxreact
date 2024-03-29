import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(error) {
      console.log('error', error)
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <p>Something wenr wrong</p>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
