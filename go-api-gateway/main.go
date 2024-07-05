package main

import (
	"log"
	"net/http"

	"microservices-architectures-test/go-api-gateway/src/routes"

	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()

	routes.RegisterRoutes(router)

	log.Fatal(http.ListenAndServe(":8080", router))
}
