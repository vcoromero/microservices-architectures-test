package handlers

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
	"time"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"

	pbOrder "microservices-architectures-test/go-api-gateway/proto/orders"
)

const (
	orderServiceAddress = "localhost:50052"
)

func GetOrders(w http.ResponseWriter, r *http.Request) {
	orderConn, err := grpc.Dial(orderServiceAddress, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock(), grpc.WithTimeout(60*time.Second))
	if err != nil {
		log.Fatalf("did not connect to Order service: %v", err)
	}
	defer orderConn.Close()
	orderClient := pbOrder.NewOrderServiceClient(orderConn)

	resp, err := orderClient.FindAll(context.Background(), &pbOrder.Empty{})
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resp)
}

func CreateOrder(w http.ResponseWriter, r *http.Request) {
	orderConn, err := grpc.Dial(orderServiceAddress, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock(), grpc.WithTimeout(60*time.Second))
	if err != nil {
		log.Fatalf("did not connect to Order service: %v", err)
	}
	defer orderConn.Close()
	orderClient := pbOrder.NewOrderServiceClient(orderConn)

	var req pbOrder.CreateOrderRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	resp, err := orderClient.Create(context.Background(), &req)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resp)
}
