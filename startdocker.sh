sudo systemctl start docker; docker run --rm -ti -p 127.0.0.1:8888:8888 -v $(pwd)/jupyter:/home/jovyan/tesi dariomalchiodi/sad
