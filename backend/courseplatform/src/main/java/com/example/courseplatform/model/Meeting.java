package com.example.courseplatform.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Table(name = "meetings")
@Data
public class Meeting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "week_number")
    private int weekNumber;

    private String title;
    private String description;

    @Column(name = "meeting_date")
    private LocalDate meetingDate;

    @Column(name = "meeting_time")
    private String meetingTime;

    @Column(name = "meeting_link")
    private String meetingLink;
}