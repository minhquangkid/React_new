import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  // khi có lỗi componentDidCatch sẽ chạy và nó tự động truyền lỗi vào tham số error, và ta có thể làm bất cứ điều gì khi có lỗi (như chạy 1 hàm khác, gửi thông báo lỗi lên server,...)
  render() {
    if (this.state.hasError) {
      return <p>Something went wrong</p>;
    }
    return this.props.children;
  }
}
/*
- Error Boundaries (Ranh giới lỗi) là các thành phần React bắt lỗi JavaScript ở bất kỳ đâu trong cây thành phần con của chúng, ghi lại các lỗi đó và hiển thị giao diện người dùng dự phòng thay vì cây thành phần bị lỗi.
- sử dụng componentDidCatch() để tạo ra Error Boundaries, trong function component ko có tương đương cái này
- Nếu trong javascript thì ta sử dụng try catch có công dụng tương tự, nhưng trong react nó có JSX nên ko dùng try catch được

*/
export default ErrorBoundary;
