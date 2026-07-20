"use client";

import { GraduationCap, BookOpen, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    degree: "Bachelor of Technology (AI & ML)",
    institution: "Mohan Babu University",
    duration: "2023 — 2027",
    grade: "CGPA: 8.50",
    highlights: [
      "Maintained 90% attendance rate demonstrating dedication and discipline",
      "Consistent academic record throughout the program",
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Web Development",
      "Statistical Analysis (Binary Logistic Regression)",
      "Software Engineering",
    ],
  },
  {
    degree: "Intermediate",
    institution: "Narayana Junior College, Kurnool",
    duration: "2021 — 2023",
    grade: "Percentage: 87%",
    highlights: [
      "Strong foundation in Mathematics and Sciences",
    ],
    coursework: [],
  },
  {
    degree: "Secondary School (SSC Board)",
    institution: "Keshava Reddy High School",
    duration: "2020 — 2021",
    grade: "GPA: 10.0",
    highlights: [
      "Perfect score demonstrating academic excellence",
    ],
    coursework: [],
  },
];

export function EducationSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-neon-cyan mx-auto rounded-full" />
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="group bg-card/50 border border-border hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/5"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors">
                      <GraduationCap className="w-8 h-8 text-neon-cyan" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow space-y-4">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-neon-cyan transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-muted-foreground">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1">
                        <span className="text-sm font-mono text-neon-cyan bg-neon-cyan/10 px-3 py-1 rounded-full border border-neon-cyan/20 w-fit">
                          {edu.duration}
                        </span>
                        <span className="text-sm font-semibold text-foreground">
                          {edu.grade}
                        </span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Award className="w-4 h-4 text-neon-cyan mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Coursework - Only show if there are courses */}
                    {edu.coursework.length > 0 && (
                      <div className="pt-4 border-t border-border">
                        <div className="flex items-center gap-2 mb-3">
                          <BookOpen className="w-4 h-4 text-neon-cyan" />
                          <span className="text-sm font-medium text-foreground">
                            Key Coursework
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="px-3 py-1.5 text-xs font-mono bg-secondary/50 text-muted-foreground rounded-md border border-border hover:border-neon-cyan/30 hover:text-neon-cyan transition-colors"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
