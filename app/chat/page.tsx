"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, Bot, User, Sparkles, BookOpen, Briefcase, GraduationCap, TrendingUp } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

const quickReplies = [
  { text: "Help me choose a career path", icon: Briefcase },
  { text: "Create a study plan", icon: BookOpen },
  { text: "Improve my resume", icon: GraduationCap },
  { text: "Find job opportunities", icon: TrendingUp },
]

const aiResponses = [
  "I'd be happy to help you with your career planning! Based on your background, I can suggest several paths that align with your interests and the current job market in India.",
  "Let me create a personalized study plan for you. What subjects or skills would you like to focus on? Are you preparing for any specific exams or career goals?",
  "Great question! I can help you build a strong resume that stands out to Indian employers. Let's start with your current education and any experience you have.",
  "I can help you find relevant job opportunities! What field are you interested in, and what's your current skill level? I'll suggest positions that match your profile.",
]

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hi there! I'm your AI career mentor. I'm here to help you with career guidance, study plans, resume building, and job search strategies. How can I assist you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickReply = (text: string) => {
    handleSendMessage(text)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSendMessage(inputValue)
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col h-[calc(100vh-8rem)]">
        {/* Chat Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between p-4 border-b bg-white dark:bg-gray-800 rounded-t-lg"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-semibold">AI Career Mentor</h2>
              <p className="text-sm text-gray-500">Online • Ready to help</p>
            </div>
          </div>
          <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">Active</Badge>
        </motion.div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex items-start space-x-2 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === "user" ? "bg-purple-600" : "bg-gradient-to-r from-purple-600 to-blue-600"
                    }`}
                  >
                    {message.sender === "user" ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <Card
                    className={`p-3 ${
                      message.sender === "user" ? "bg-purple-600 text-white" : "bg-white dark:bg-gray-800"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${message.sender === "user" ? "text-purple-100" : "text-gray-500"}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <Card className="p-3 bg-white dark:bg-gray-800">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </Card>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        {messages.length === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-4 bg-white dark:bg-gray-800 border-t"
          >
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Quick actions:</p>
            <div className="grid grid-cols-2 gap-2">
              {quickReplies.map((reply, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="justify-start h-auto p-3 text-left"
                  onClick={() => handleQuickReply(reply.text)}
                >
                  <reply.icon className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">{reply.text}</span>
                </Button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Input Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-4 bg-white dark:bg-gray-800 border-t rounded-b-lg"
        >
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything about your career..."
              className="flex-1"
              disabled={isTyping}
            />
            <Button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
          <p className="text-xs text-gray-500 mt-2 text-center">
            AI responses are generated for demonstration. Always verify important career advice.
          </p>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}
