package com.example.courseplatform.controller;

import com.example.courseplatform.model.Meeting;
import com.example.courseplatform.repository.MeetingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class MeetingController {

    @Autowired
    private MeetingRepository meetingRepository;

    // Endpoint for Admins to create a new meeting
    @PostMapping("/admin/meetings")
    public ResponseEntity<Meeting> createMeeting(@RequestBody Meeting meeting) {
        Meeting savedMeeting = meetingRepository.save(meeting);
        return ResponseEntity.ok(savedMeeting);
    }

    // Endpoint for Students (and Admins) to get meetings for a specific week
    @GetMapping("/meetings/{week}")
    public ResponseEntity<List<Meeting>> getMeetingsByWeek(@PathVariable int week) {
        List<Meeting> meetings = meetingRepository.findByWeekNumber(week);
        return ResponseEntity.ok(meetings);
    }
}