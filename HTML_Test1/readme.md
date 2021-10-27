### On HTML documents, where can we inject CSS and JS files? The reason why?

### Answer

- Đặt thẻ CSS `<link>` ở bên trong thẻ `<head>`. Lí do: Việc đặt file CSS ở trên cùng cho phép trang và các style của phần tử hiển thị dần từ trên xuống dưới.
- Đặt thẻ JS `<script>` ở ngay trước `</body>`. Lí do: Việc đặt file JS ở cuối cùng sẽ cho phép HTML phân tích cú pháp và hiển thị cho người dùng trước tiên, sau đó các thay đổi về HTML ở trong file JS sẽ được ghi đè lên để đảm bảo các file JS được thực thi.
