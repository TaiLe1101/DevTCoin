# Dự án React: Hệ thống Router, i18n, Redux Toolkit

## Giới thiệu
Dự án React được thiết kế nhằm cung cấp một khung làm việc tích hợp nhiều tính năng như:
- Hệ thống router với phân quyền public/private.
- Hỗ trợ nested routes.
- Tích hợp i18n cho đa ngôn ngữ.
- Quản lý trạng thái tập trung với Redux Toolkit.

## Yêu cầu
- **Node.js**: >= 14.x
- **pnpm**: >= 7.x

## Cài đặt
1. Clone repository về máy:
   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```
2. Cài đặt các dependencies:
   ```bash
   pnpm install
   ```
3. Chạy ứng dụng:
   ```bash
   pnpm dev
   ```
   Ứng dụng sẽ chạy tại [http://localhost:5173](http://localhost:5173).

## Cấu trúc thư mục
```plaintext
src/
├── app/               # Redux store
├── components/        # Component dùng chung
├── features/          # Redux slices (auth, user...)
├── layouts/           # Layouts (được tách biệt)
├── pages/             # Các trang của ứng dụng
├── routes/            # Cấu hình router (routesConfig, AppRoutes)
├── i18n.js            # Cấu hình i18next cho đa ngôn ngữ
└── main.jsx           # Điểm bắt đầu của ứng dụng
```

## Chức năng

### 1. Hệ thống Router
#### Cấu hình router trong `src/routes/routesConfig.js`:
- **Public Routes**: Các route công khai không cần xác thực.
- **Private Routes**: Các route yêu cầu xác thực.
- **Nested Routes**: Hỗ trợ các route con.
- **Dynamic Title**: Cập nhật `document.title` dựa trên cấu hình.

Ví dụ cấu hình:
```javascript
const routesConfig = [
    {
        path: "/",
        title: "Home Page",
        name: "home",
        layout: DefaultLayout,
        component: Home,
        private: false,
    },
    {
        path: "/user",
        title: "User Page",
        name: "user",
        layout: DefaultLayout,
        component: User,
        private: false,
    },
    {
        path: "/user/profile/:userId",
        title: "User Profile Page",
        name: "user-profile",
        layout: DefaultLayout,
        component: Profile,
        private: false,
    },
];
```
#### Tích hợp layout cho route:
- Mỗi route có thể được định nghĩa layout riêng hoặc sử dụng layout mặc định.

---

### 2. Đa ngôn ngữ (i18n)
- Cài đặt `i18next` và tích hợp trong `src/i18n.js`.
- Quản lý file ngôn ngữ trong thư mục `public/locales`:
```plaintext
public/
└── locales/
    ├── en/
    │   └── translation.json
    └── vi/
        └── translation.json
```
#### Ví dụ dịch ngôn ngữ trong component:
```javascript
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();
    return <h1>{t('welcome')}</h1>; // Hiển thị "Chào mừng"
};
```
#### Chuyển đổi ngôn ngữ:
```javascript
const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('vi')}>Tiếng Việt</button>
        </div>
    );
};
```

---

### 3. Redux Toolkit
#### Thiết lập store trong `src/app/store.js`:
```javascript
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import userReducer from '../features/user/userSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
    },
});

export default store;
```
#### Auth Slice:
Quản lý trạng thái xác thực.
```javascript
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { isAuthenticated: false, user: null },
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
```
#### Sử dụng trong component:
```javascript
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '~/features/auth/authSlice';

const Login = () => {
    const dispatch = useDispatch();

    const handleLogin = () => {
        const user = { id: 1, name: 'John Doe' };
        dispatch(login(user));
    };

    return <button onClick={handleLogin}>Login</button>;
};
```
---

## Hướng dẫn đóng góp
1. Fork repository.
2. Tạo nhánh mới:
   ```bash
   git checkout -b feature/ten-chuc-nang
   ```
3. Commit thay đổi:
   ```bash
   git commit -m "Add feature ..."
   ```
4. Gửi pull request.

## Liên hệ
Mọi thắc mắc, vũng lống liên hệ qua email: **taic21a.th1@gmail.com**.

