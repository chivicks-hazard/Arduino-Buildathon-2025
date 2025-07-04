"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar, MapPin, Zap, Video, ExternalLink } from "lucide-react"

// Mock leaderboard data - this would come from Google Sheets API
const leaderboardData = [
  { name: "Chioma Okafor", email: "chioma@futo.edu.ng", submissions: 8, points: 240 },
  { name: "Emeka Nwankwo", email: "emeka@futo.edu.ng", submissions: 7, points: 210 },
  { name: "Adaora Eze", email: "adaora@futo.edu.ng", submissions: 6, points: 180 },
  { name: "Kelechi Okoro", email: "kelechi@futo.edu.ng", submissions: 5, points: 150 },
  { name: "Ngozi Okonkwo", email: "ngozi@futo.edu.ng", submissions: 4, points: 120 },
]

export default function ArduinoBuildathon() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    videoLink: "",
    submissions: "",
    points: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with Google Forms API or your backend
    console.log("Form submitted:", formData)
    alert("Submission successful! Thank you for participating in Arduino Buildathon 2025!")
    setFormData({ name: "", email: "", videoLink: "", submissions: "", points: "" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Arduino Buildathon 2025</h1>
                <p className="text-sm text-gray-400">RAIN FUTO × GDG FUTO</p>
              </div>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
            >
              <a
                href="https://gdg.community.dev/gdg-on-campus-federal-university-of-technology-owerri-nigeria/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join GDG FUTO <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
          <img
            src="/images/arduino-flyer.jpg"
            alt="Arduino Buildathon Circuit Board"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto text-center relative z-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Arduino Buildathon 2025</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Build.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Innovate.
            </span>{" "}
            Showcase.
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the ultimate Arduino challenge! Create innovative projects, showcase your skills, and compete for
            amazing prizes.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="border-2 border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:border-yellow-400 transition-colors">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-white">Duration</h3>
                <p className="text-gray-300">23rd June – 30th July 2025</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:border-yellow-400 transition-colors">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-white">Hosted By</h3>
                <p className="text-gray-300">RAIN FUTO × GDG FUTO</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:border-yellow-400 transition-colors">
              <CardContent className="p-6 text-center">
                <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-white">Prizes</h3>
                <p className="text-gray-300">Top 3 Highest Submissions</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-3xl mx-auto border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-white">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-400/20 border border-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-400 font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2 text-white">Build</h3>
                <p className="text-gray-300 text-sm">Work on exciting Arduino projects</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-400/20 border border-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-400 font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2 text-white">Record</h3>
                <p className="text-gray-300 text-sm">Record a video of you & your working project</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-400/20 border border-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-400 font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2 text-white">Submit</h3>
                <p className="text-gray-300 text-sm">Post online & submit the link</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Submit Your Project</h2>
            <p className="text-gray-300">Share your Arduino creation with the community</p>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-t-lg">
              <CardTitle className="flex items-center space-x-2">
                <Video className="w-5 h-5" />
                <span>Project Submission Form</span>
              </CardTitle>
              <CardDescription className="text-gray-800">
                Fill out the form below to submit your Arduino project
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="border-2 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@futo.edu.ng"
                      required
                      className="border-2 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="videoLink">Project Video Link *</Label>
                  <Textarea
                    id="videoLink"
                    name="videoLink"
                    value={formData.videoLink}
                    onChange={handleInputChange}
                    placeholder="Paste your submission video link here (YouTube, Drive, etc.)"
                    required
                    className="border-2 focus:border-blue-500 min-h-[100px]"
                  />
                  <p className="text-sm text-gray-500">
                    Upload your video to YouTube, Google Drive, or any platform and paste the link here
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="submissions">Number of Submissions</Label>
                    <Input
                      id="submissions"
                      name="submissions"
                      type="number"
                      value={formData.submissions}
                      onChange={handleInputChange}
                      placeholder="0"
                      min="0"
                      className="border-2 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="points">Number of Points</Label>
                    <Input
                      id="points"
                      name="points"
                      type="number"
                      value={formData.points}
                      onChange={handleInputChange}
                      placeholder="0"
                      min="0"
                      className="border-2 focus:border-blue-500"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black py-3 text-lg font-semibold"
                >
                  Submit Project
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="py-16 px-4 bg-gray-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">🏆 Leaderboard</h2>
            <p className="text-gray-300">Top performers in Arduino Buildathon 2025</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5" />
                  <span>Top Builders</span>
                </CardTitle>
                <CardDescription className="text-yellow-100">Ranked by number of submissions</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {leaderboardData.map((participant, index) => (
                    <div
                      key={participant.email}
                      className={`flex items-center justify-between p-6 border-b last:border-b-0 hover:bg-gray-50 transition-colors ${
                        index === 0 ? "bg-gradient-to-r from-yellow-50 to-orange-50" : ""
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                            index === 0
                              ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                              : index === 1
                                ? "bg-gradient-to-r from-gray-400 to-gray-500"
                                : index === 2
                                  ? "bg-gradient-to-r from-orange-400 to-orange-600"
                                  : "bg-gradient-to-r from-blue-400 to-blue-500"
                          }`}
                        >
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{participant.name}</h3>
                          <p className="text-sm text-gray-600">{participant.email}</p>
                        </div>
                        {index < 3 && (
                          <Badge variant="secondary" className="ml-2">
                            {index === 0 ? "🥇 1st" : index === 1 ? "🥈 2nd" : "🥉 3rd"}
                          </Badge>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="text-2xl font-bold text-gray-900">{participant.submissions}</p>
                            <p className="text-sm text-gray-600">Submissions</p>
                          </div>
                          <div>
                            <p className="text-lg font-semibold text-blue-600">{participant.points}</p>
                            <p className="text-sm text-gray-600">Points</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Arduino Buildathon 2025</h3>
              <p className="text-gray-400">GDG FUTO × RAIN FUTO</p>
            </div>
          </div>
          <p className="text-gray-400 mb-4">Build innovative Arduino projects and showcase your creativity</p>
          <div className="flex justify-center space-x-6">
            <Button asChild variant="ghost" className="text-gray-400 hover:text-white">
              <a
                href="https://gdg.community.dev/gdg-on-campus-federal-university-of-technology-owerri-nigeria/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join GDG FUTO
              </a>
            </Button>
            <Button asChild variant="ghost" className="text-gray-400 hover:text-white">
              <a href="https://bit.ly/FUTOArduinoBuildathon" target="_blank" rel="noopener noreferrer">
                Official Submission
              </a>
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-500">
              © 2025 Arduino Buildathon. Hosted by RAIN FUTO in collaboration with GDG FUTO.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
