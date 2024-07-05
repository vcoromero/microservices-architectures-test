package routes

import (
	"log"
	"microservices-architectures-test/go-api-gateway/src/handlers"

	"github.com/gorilla/mux"
)

func RegisterRoutes(r *mux.Router) {
	apiRouterV1 := r.PathPrefix("/api").Subrouter()
	productsRouter := apiRouterV1.PathPrefix("/products").Subrouter()
	ordersRouter := apiRouterV1.PathPrefix("/orders").Subrouter()

	productsRouter.HandleFunc("/{id}", handlers.GetProduct).Methods("GET")
	productsRouter.HandleFunc("", handlers.GetProducts).Methods("GET")
	productsRouter.HandleFunc("", handlers.CreateProduct).Methods("POST")
	productsRouter.HandleFunc("/{id}", handlers.UpdateProduct).Methods("PUT")
	productsRouter.HandleFunc("/{id}", handlers.DeleteProduct).Methods("DELETE")

	ordersRouter.HandleFunc("", handlers.GetOrders).Methods("GET")
	ordersRouter.HandleFunc("", handlers.CreateOrder).Methods("POST")

	logRoutes(r)
}

func logRoutes(r *mux.Router) {
	err := r.Walk(func(route *mux.Route, router *mux.Router, ancestors []*mux.Route) error {
		t, err := route.GetPathTemplate()
		if err != nil {
			return err
		}

		methods, err := route.GetMethods()
		if err != nil {
			log.Printf("Route: %s Methods: NONE\n", t)
			return nil
		}

		log.Printf("Route: %s Methods: %v\n", t, methods)
		return nil
	})
	if err != nil {
		log.Fatalf("Error listing routes: %v", err)
	}
}
