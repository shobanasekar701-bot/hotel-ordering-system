package com.hotel.ordering.repository;

import com.hotel.ordering.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}