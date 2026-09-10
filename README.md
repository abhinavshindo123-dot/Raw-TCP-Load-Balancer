# ⚖️ Raw TCP Load Balancer (Round Robin)

A lightweight, Layer 4 TCP load balancer built entirely from scratch using pure Python sockets. 

This project strips away the abstraction of modern cloud frameworks (like AWS ELB or NGINX) to demonstrate how network traffic is physically routed at the socket level. It acts as a reverse proxy, listening for incoming client connections and distributing them across multiple backend Node.js servers using a systematic Round Robin algorithm.

## 🧠 Learning Outcomes
As part of my Cloud Computing specialization, this project was built to practically apply core networking concepts:
* **Socket Programming:** Managing raw TCP/IP connections, binding to ports, and handling byte streams.
* **Traffic Distribution:** Implementing a deterministic Round Robin algorithm to prevent server overload.
* **Proxying:** Reading incoming HTTP requests and forwarding them intact to backend environments.

## 🏗️ Architecture

```mermaid
graph TD
    Client[Browser / Client] -->|HTTP:8080| LB[Python Load Balancer]
    LB -->|Round Robin| S1(Node.js Server 1 :3001)
    LB -->|Round Robin| S2(Node.js Server 2 :3002)
    LB -->|Round Robin| S3(Node.js Server 3 :3003)
