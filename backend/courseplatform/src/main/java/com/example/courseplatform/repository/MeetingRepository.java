package com.example.courseplatform.repository;

import com.example.courseplatform.model.Meeting;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MeetingRepository extends JpaRepository<Meeting, Integer> {
    // Find all meetings for a specific week
    List<Meeting> findByWeekNumber(int weekNumber);
}