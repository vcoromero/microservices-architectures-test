Here's an updated version of the README with the requested section added:

---

# Microservices Architecture Test

This project demonstrates a microservices architecture using NestJS for product and order services, and a Go API Gateway to expose REST endpoints. The communication between microservices is facilitated by gRPC.

## Frameworks and Tools Used

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **Go**: A statically typed, compiled programming language designed for simplicity and performance.
- **gRPC**: A high-performance, open-source universal RPC framework.
- **Docker**: A platform for developing, shipping, and running applications in containers.

## Deployment

### Prerequisites

- Docker and Docker Compose installed on your system.

### Steps to Deploy

1. **Clone the repository**:

   ```sh
   git clone https://github.com/vcoromero/microservices-architectures-test
   cd microservices-architectures-test
   ```

2. **Set up environment variables**:

   Ensure you have a `.env` file in the root directory with the following content:

   ```env
   DB_TYPE=mysql
   DB_HOST=localhost
   DB_PORT=3306
   DB_NAME=products-and-orders
   DB_USER=root
   MYSQL_ROOT_PASSWORD=root_pswrd
   PRODUCT_SERVICE_PORT=50051
   ORDER_SERVICE_PORT=50052
   ```

3. **Build and run the services using Docker Compose**:

   ```sh
   docker-compose up --build
   ```

This command will build the Docker images and start the containers for the product service, order service, and the Go API Gateway, along with a MySQL database.

### Postman Collection

A Postman collection is provided to test the API endpoints. You can find the collection file [here](./Microservices_Architecture_Test.postman_collection.json). Import this file into Postman to get started with testing the endpoints.

## gRPC Protocols Project

The `grpc-protocols` project contains the protocol buffer definitions used by the microservices. It doesn't require a Dockerfile as it is mainly used for compiling the `.proto` files. The generated files are then included in the respective microservices.

To compile the `.proto` files, run:

```sh
cd grpc-protocols
npm run compile
```

---

By following these steps, you can deploy and run the microservices architecture locally using Docker Compose. For further customization and details, please refer to the individual `Dockerfile` and `package.json` files in the repository.
