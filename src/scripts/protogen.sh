#!/bin/bash

COSMOS_DIR="./cosmos-sdk"
ZIP_FILE="$COSMOS_DIR/tmp.zip"
COSMOS_SDK_REF="0.42.0"
COSMOS_SDK_DIR="$COSMOS_DIR/cosmos-sdk-$COSMOS_SDK_REF"

mkdir -p $COSMOS_DIR

wget -qO $ZIP_FILE "https://github.com/cosmos/cosmos-sdk/archive/v$COSMOS_SDK_REF.zip"
unzip -o $ZIP_FILE -d $COSMOS_DIR

THIRD_PARTY_PROTO_DIR="$COSMOS_SDK_DIR/third_party/proto"
COSMOS_PROTO_DIR="$COSMOS_SDK_DIR/proto"
OUT_DIR="./src/codec/"
PROTOC_GEN_TS_PATH="$(npm bin ts-proto)/protoc-gen-ts_proto$([[ $OSTYPE == "msys" ]] && echo ".cmd")"

mkdir -p $OUT_DIR

protoc \
  --plugin="protoc-gen-ts_proto=${PROTOC_GEN_TS_PATH}" \
  --ts_proto_out=$OUT_DIR \
  --proto_path=$COSMOS_PROTO_DIR \
  --proto_path=$THIRD_PARTY_PROTO_DIR \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
  $COSMOS_PROTO_DIR/*/*/*/*.proto \
  $COSMOS_PROTO_DIR/*/*/*/*/*.proto

rm -rf $COSMOS_DIR