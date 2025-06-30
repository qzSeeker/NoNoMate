"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Download, TrendingUp, Target, Calendar, Award, Clock, CheckCircle } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function DashboardPage() {
  const [studyProgress] = useState({
    math: 75,
    logic: 60,
    english: 85,
    programming: 45,
  })

  const upcomingTasks = [
    { id: 1, title: "Complete Linear Algebra Chapter 3", due: "Today", priority: "high" },
    { id: 2, title: "Practice Logical Reasoning - Set 2", due: "Tomorrow", priority: "medium" },
    { id: 3, title: "English Grammar Quiz", due: "Dec 28", priority: "low" },
    { id: 4, title: "Data Structures Assignment", due: "Dec 30", priority: "high" },
  ]

  const achievements = [
    { title: "First Week Complete", icon: Award, color: "text-yellow-500" },
    { title: "Math Milestone", icon: Target, color: "text-blue-500" },
    { title: "Consistency Champion", icon: TrendingUp, color: "text-green-500" },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, Priya! 👋</h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">You're making great progress. Keep it up!</p>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Study Streak", value: "12 days", icon: TrendingUp, color: "text-green-500" },
            { title: "Hours This Week", value: "24h", icon: Clock, color: "text-blue-500" },
            { title: "Completed Tasks", value: "18/25", icon: CheckCircle, color: "text-purple-500" },
            { title: "Overall Progress", value: "66%", icon: Target, color: "text-orange-500" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Study Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                Study Progress
              </CardTitle>
              <CardDescription>Track your progress across different subjects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(studyProgress).map(([subject, progress]) => (
                <div key={subject} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium capitalize">{subject}</span>
                    <span className="text-sm text-gray-500">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Upcoming Tasks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Upcoming Tasks
                </CardTitle>
                <CardDescription>Stay on top of your study schedule</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                  >
                    <div className="flex-1">
                      <p className="font-medium">{task.title}</p>
                      <p className="text-sm text-gray-500">Due: {task.due}</p>
                    </div>
                    <Badge
                      variant={
                        task.priority === "high" ? "destructive" : task.priority === "medium" ? "default" : "secondary"
                      }
                    >
                      {task.priority}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Recent Achievements
                </CardTitle>
                <CardDescription>Celebrate your milestones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                    <span className="font-medium">{achievement.title}</span>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  View All Achievements
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Study Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Your Personalized Study Plan</CardTitle>
              <CardDescription>AI-generated plan based on your goals and current progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">This Week's Focus</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">Advanced Mathematics</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Complete calculus fundamentals and practice integration
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">Logical Reasoning</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Focus on pattern recognition and analytical thinking
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">Programming Basics</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Learn Python fundamentals and data structures
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Recommended Resources</h4>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Khan Academy - Calculus
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <BookOpen className="w-4 h-4 mr-2" />
                      GeeksforGeeks - Data Structures
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Coursera - Python Programming
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}
