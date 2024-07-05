#!/bin/bash

# Directorios de entrada y salida
PROTO_DIR="./proto"
OUT_DIR_NODEJS="./generated/nodejs"
OUT_DIR_GO="./generated/go"

# Crear directorios de salida si no existen
mkdir -p $OUT_DIR_NODEJS
mkdir -p $OUT_DIR_GO

# Compilar para Node.js
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:$OUT_DIR_NODEJS --grpc_out=$OUT_DIR_NODEJS --proto_path=$PROTO_DIR $PROTO_DIR/*.proto

# Compilar para Go
protoc -I $PROTO_DIR --go_out=$OUT_DIR_GO --go-grpc_out=$OUT_DIR_GO $PROTO_DIR/*.proto

echo "Proto files compiled successfully."

# Copiar archivos generados a los proyectos respectivos
cp -r $OUT_DIR_NODEJS/* ../order-service/proto/
cp -r $OUT_DIR_NODEJS/* ../product-service/proto/
cp -r $OUT_DIR_GO/* ../go-api-gateway/proto/

echo "Generated files copied to respective projects."
