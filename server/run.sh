#!/bin/bash

cd /code/submissions

if [ "$1" = "cpp" ]; then
    g++ Main.cpp -o Main.out && ./Main.out
elif [ "$1" = "python" ]; then
    python3 main.py
elif [ "$1" = "java" ]; then
    javac Main.java && java Main
else
    echo "Unsupported language"
fi
