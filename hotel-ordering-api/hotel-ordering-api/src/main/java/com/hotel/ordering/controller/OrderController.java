package com.hotel.ordering.controller;

import com.hotel.ordering.entity.Order;
import com.hotel.ordering.entity.OrderItem;
import com.hotel.ordering.repository.OrderRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:4200")
public class OrderController {

    private final OrderRepository orderRepository;

    public OrderController(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {

        if (order.getItems() != null) {

            for (OrderItem item : order.getItems()) {

                item.setOrder(order);

                if (item.getMenuItem() != null) {
                    item.setPrice(item.getMenuItem().getPrice());
                }
            }
        }

        Order savedOrder = orderRepository.save(order);

        return ResponseEntity.ok(savedOrder);
    }

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        return ResponseEntity.ok(orderRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrder(@PathVariable Long id) {

        return orderRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    @PutMapping("/{id}/status")
public ResponseEntity<Order> updateOrderStatus(
        @PathVariable Long id,
        @RequestParam String status) {

    return orderRepository.findById(id)
            .map(order -> {
                order.setStatus(status);
                Order updatedOrder = orderRepository.save(order);
                return ResponseEntity.ok(updatedOrder);
            })
            .orElse(ResponseEntity.notFound().build());
}
}