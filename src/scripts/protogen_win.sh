# Path to this plugin
PROTOC_GEN_TS_PATH="$PWD/node_modules/.bin/protoc-gen-ts.cmd"
PROTOC_GEN_GRPC_PATH="$PWD/node_modules/.bin/grpc_tools_node_protoc_plugin.cmd"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="src/types"

protoc -I"src/proto" \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --plugin="protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="service=grpc-web:${OUT_DIR}" \
    --grpc_out="${OUT_DIR}" \
    src/proto/*/*.proto src/proto/*/*/*.proto src/proto/*.proto
