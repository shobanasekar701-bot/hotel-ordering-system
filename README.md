\# Hotel Ordering System



A full-stack hotel ordering application built using Angular, Spring Boot, Java, and PostgreSQL.



\## 🚀 Overview



The Hotel Ordering System is a web application designed to manage hotel food orders from order creation through kitchen processing and billing.



The project demonstrates frontend development, REST API integration, backend development, database connectivity, and responsive UI development.



\## 🛠️ Technologies



\### Frontend



\* Angular

\* TypeScript

\* HTML5

\* CSS3

\* Bootstrap

\* RxJS

\* REST API integration

\* Reactive Forms



\### Backend



\* Java

\* Spring Boot

\* Spring Data JPA

\* REST APIs

\* Maven



\### Database



\* PostgreSQL



\### Tools



\* Visual Studio Code

\* Git

\* GitHub

\* Postman

\* pgAdmin

\* Chrome DevTools



\## ✨ Features



\### Order Management



\* Create customer orders

\* View orders

\* View order details

\* Track order status

\* Update order status



\### Kitchen Management



Kitchen staff can view incoming orders and update their status.



```text

PREPARING → READY → SERVED

```



\### Billing



\* View completed orders

\* Calculate order totals

\* Display billing information



\### Backend



REST APIs are provided for:



\* Orders

\* Order status

\* Menu items

\* Billing

\* Database operations



\## 🏗️ Architecture



```text

Angular Frontend

&#x20;      │

&#x20;      │ HTTP / REST API

&#x20;      ▼

Spring Boot Backend

&#x20;      │

&#x20;      │ JPA / Hibernate

&#x20;      ▼

PostgreSQL Database

```



\## 📁 Project Structure



```text

hotel-ordering/

│

├── .gitignore

├── README.md

│

├── hotel-ordering-api/

│   └── hotel-ordering-api/

│       ├── src/

│       └── pom.xml

│

└── hotel-ordering-ui/

&#x20;   ├── src/

&#x20;   ├── package.json

&#x20;   ├── angular.json

&#x20;   └── tsconfig.json

```



\## ▶️ Running the Application



\### Backend



Navigate to the backend project:



```bash

cd hotel-ordering-api/hotel-ordering-api

```



Run:



```bash

mvn spring-boot:run

```



Backend:



```text

http://localhost:8080

```



\### Frontend



Open another terminal and navigate to:



```bash

cd hotel-ordering-ui

```



Install dependencies:



```bash

npm install

```



Start Angular:



```bash

ng serve

```



Frontend:



```text

http://localhost:4200

```



\## 🗄️ Database Configuration



The application uses PostgreSQL.



Example database:



```text

hotel\_ordering

```



Local database credentials are stored in:



```text

application-local.properties

```



This file is excluded from Git using `.gitignore`.



\*\*Never commit database passwords or other secrets to GitHub.\*\*



\## 🔌 Example API



Get all orders:



```http

GET /api/orders

```



Get an order:



```http

GET /api/orders/{id}

```



Create an order:



```http

POST /api/orders

```



Update order status:



```http

PUT /api/orders/{id}/status?status=READY

```



\## 🔮 Future Improvements



\* Authentication and authorization

\* Role-based access

\* Admin dashboard

\* Menu management

\* Payment integration

\* Order notifications

\* Sales reports

\* Docker support

\* Cloud deployment

\* Automated testing



\## 👩‍💻 Author



\*\*Shobana Sekar\*\*



Senior Angular Developer | UI Developer



\### Skills Demonstrated



Angular • TypeScript • JavaScript • Java • Spring Boot • REST APIs • PostgreSQL • Git • GitHub • Responsive UI • Accessibility



