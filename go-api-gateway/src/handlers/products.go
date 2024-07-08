package handlers

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
	"strconv"
	"time"

	"github.com/gorilla/mux"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"

	pbProduct "microservices-architectures-test/go-api-gateway/proto/products"
)

const (
	productServiceAddress = "localhost:50051"
)

func GetProducts(w http.ResponseWriter, r *http.Request) {
	productConn, err := grpc.Dial(productServiceAddress, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock(), grpc.WithTimeout(60*time.Second))
	if err != nil {
		log.Fatalf("did not connect to Product service: %v", err)
	}
	defer productConn.Close()

	productClient := pbProduct.NewProductServiceClient(productConn)
	req := &pbProduct.FindAllRequest{}

	resp, err := productClient.FindAll(context.Background(), req)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resp)
}

func GetProduct(w http.ResponseWriter, r *http.Request) {
	productConn, err := grpc.Dial(productServiceAddress, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock(), grpc.WithTimeout(60*time.Second))
	if err != nil {
		log.Fatalf("did not connect to Product service: %v", err)
	}
	defer productConn.Close()
	productClient := pbProduct.NewProductServiceClient(productConn)

	vars := mux.Vars(r)
	id := vars["id"]

	parsedId, err := strconv.Atoi(id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	resp, err := productClient.FindOne(context.Background(), &pbProduct.FindOneRequest{Id: int32(parsedId)})
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resp)
}

func CreateProduct(w http.ResponseWriter, r *http.Request) {
	productConn, err := grpc.Dial(productServiceAddress, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock(), grpc.WithTimeout(60*time.Second))
	if err != nil {
		log.Fatalf("did not connect to Product service: %v", err)
	}
	defer productConn.Close()
	productClient := pbProduct.NewProductServiceClient(productConn)

	var req pbProduct.CreateRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	resp, err := productClient.Create(context.Background(), &req)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resp)
}

func UpdateProduct(w http.ResponseWriter, r *http.Request) {
	productConn, err := grpc.Dial(productServiceAddress, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock(), grpc.WithTimeout(60*time.Second))
	if err != nil {
		log.Fatalf("did not connect to Product service: %v", err)
	}
	defer productConn.Close()
	productClient := pbProduct.NewProductServiceClient(productConn)

	var req pbProduct.UpdateRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		http.Error(w, "Invalid product ID", http.StatusBadRequest)
		return
	}
	req.Id = int32(id)

	resp, err := productClient.Update(context.Background(), &req)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resp)
}

func DeleteProduct(w http.ResponseWriter, r *http.Request) {
	productConn, err := grpc.Dial(productServiceAddress, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock(), grpc.WithTimeout(60*time.Second))
	if err != nil {
		log.Fatalf("did not connect to Product service: %v", err)
	}
	defer productConn.Close()
	productClient := pbProduct.NewProductServiceClient(productConn)

	vars := mux.Vars(r)
	id := vars["id"]
	parsedId, err := strconv.Atoi(id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	resp, err := productClient.Delete(context.Background(), &pbProduct.DeleteRequest{Id: int32(parsedId)})
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resp)
}
